<template>
  <div
    ref="searchBarWrapper"
    :class="{
      'search-bar-wrapper': true,
      'sticky-shadow': isIntersectingElement,
    }"
  >

    <!-- Search bar -->
    <span class="p-input-icon-left p-float-label input-search">
      <label for="searchBar" class="hidden">Search icons</label>
      <i class="pi pi-search"/>
      <InputText
        v-on:focus.native="onFocus"
        class="p-inputtext-sm"
        type="text"
        id="searchBar"
        v-model="searchValue"
        @keyup="getFromAlgolia"
        placeholder="Search"
      />

      <a
        href="https://www.algolia.com/"
        target="_blank"
        :class="{
          'searchByAlgolia': true,
          'movedBySearch': searchValue.length != 0
        }"
      >
          <img
          :src="imgs.searchByAlgolia"
          alt="Search by Algolia"
        >
      </a>
      <span
        @click="searchValue = '', getFromAlgolia()"
      >
        <IconBrewIcon
          size="24"
          icon="close"
          :filled="false"
          v-if="searchValue.length != 0"
          class="clear-search-btn"
        />
      </span>
    </span>

    <Divider class="desktop-only" layout="vertical" />
    <Divider class="mobile-only"/>

    <!-- Options wrapper -->
    <div class="options-wrapper">


      <!-- Color picker -->
      <ColorPicker
        defaultColor="ffffff"
        id="colorPicker"
        v-model="iconColour"
      />

      <!-- Size -->
      <Dropdown
        class="max-height-input"
        v-model="size"
        :options="sizes"
        optionLabel="name"
        placeholder="Select a size"
        @change="setIconSize()"
      />

      <!-- Download as -->
      <Dropdown
        class="max-height-input"
        v-model="downloadAs"
        :options="downloadOptions"
        optionLabel="name"
        placeholder="Select a size"
        @change="setDownloadOption()"
      />

      <!--
        <InputText
          class="p-inputtext-sm weight-input-wrapper"
          type="number"
          id="iconWeight"
          v-model="iconWeight"
          @change="setIconWeight($event)"
        />
      -->
    </div>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import algoliasearch from 'algoliasearch';
  import IconBrewIcon from '../components/IconBrewIcon.vue'

  // const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
  const client = algoliasearch('FK0ELT4B74', process.env.ALGOLIA_SEARCH_KEY);
  const index = client.initIndex(process.env.ALGOLIA_INDEX);

  export default {
    name: 'SearchBar',

    components:{
      IconBrewIcon,
    },

    props:{
      icon: {}
    },

    data(){
      return{
        imgs:{
          searchByAlgolia: require('@/assets/images/other/search-by-algolia.svg')
        },
        color: '1976D2',
        searchValue: '',
        is24px: true,
        isIntersectingElement: false,
        observer: null,
        iconWeight: 2,
        // iconWeight: [0, 50, 100],
        searchResults: {},
        iconColour: "#FFFFFF",

        downloadAs: {name: 'Download .SVG', code: "downloadSVG"},
        downloadOptions:[
          {name: 'Download .SVG', code: "downloadSVG"},
          // {name: 'Download .PNG', code: "downloadPNG"},
          {name: 'Copy SVG', code: "copySVG"},
        ],

        size:  { "name": "24px", "code": "iconImage24px" },
        sizes:[
          {name: "18px", code: "iconImage18px"},
          {name: "24px", code: "iconImage24px"}
        ],

        fetchingData: false,
        algoliaPage: 0
      }
    },

    watch: {
    },

    async mounted(){
      this.scroll()
      // this.clearIcons();

      if(process.client){
        this.keyboardEvent()

        const searchBar = this.$refs.searchBarWrapper
        let options = { rootMargin: "-400px" };
        let observer = new IntersectionObserver(this.handleIntersection, options);
        observer.observe(searchBar);

        const mainContentGrid = document.getElementById("mainContentGrid")

        // Function to get the x and y position of an element

        window.addEventListener('scroll', function(event){
        // mainContentGrid.addEventListener('scroll', function(event){
            let element = event.target;
            if (element.scrollHeight - element.scrollTop === element.clientHeight)
            {
              console.log("element.scrollHeight: ", mainContentGrid.getBoundingClientRect());
              console.log('scrolled');
            }
        });
      }

    },

    async fetch(){
      try {
        await this.fetchAlgolia()
      } catch (error) {
        console.log(error);
      }
    },

     watch:{
      iconColour:{
        handler() { // Reset toUpdate each time 'icon' changes.
          this.setIconColour()
        },
      }
    },

    methods:{
      ...mapActions({
        setSearchValue: 'store/setSearchValue',
        scrollTo: 'store/scrollTo',
        setIcons: 'store/setIcons',
        addIcons: 'store/addIcons',
        clearIcons: 'store/clearIcons',
        setDataToState: 'store/setDataToState',
      }),

      scroll() {
        let margin = 500
        window.onscroll = () => {
          let searchEmpty = this.searchValue == ''
          let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight > document.documentElement.offsetHeight - margin

          if (bottomOfWindow && !this.fetchingData && searchEmpty) {
            this.fetchingData = true
            this.algoliaPage++
            this.fetchAlgolia()
          }
        }
      },

      setIconColour(e){
        const colour = this.iconColour
        const contentArea = document.querySelector(".content-area");
        contentArea.style.color = '#'+colour;
        this.setDataToState({state: 'iconColour', data: colour});
      },

      setIconWeight(e){
        const weight = e.target.value;
        this.setDataToState({state: 'iconWeight', data: weight});
      },

      setIconSize(){
        let size = this.size.code;
        this.setDataToState({state: 'iconSize', data: size});
      },

      setDownloadOption(){
        let downloadAs = this.downloadAs.code;
        this.setDataToState({state: 'downloadAs', data: downloadAs});
      },

      keyboardEvent(){
        document.addEventListener('keydown', (event) => {

          let isNotCmd = event.getModifierState('Meta')
                          || event.key == 'Alt'
                          || event.key == 'Control'
                          || event.key == 'CapsLock'
                          || event.key == 'Backspace'
                          || event.key == 'Shift'
                          || event.key == 'Enter'
                          || event.key == 'Tab'
                          || event.key == ' '
                          || document.activeElement.tagName == 'INPUT'
                          || this.$route.name != 'index'

          if(!isNotCmd){
            document.getElementById('searchBar').focus()
          }

        });
      },

      async getFromAlgolia(){

        if (this.searchValue == '') {
          this.clearIcons()
          this.fetchAlgolia()
          return
        } else{
          this.searchAlgolia()
        }

      },

      async fetchAlgolia(){
        const searchResult = await index.search('', {
          page: this.algoliaPage,
          hitsPerPage: 40
        });

        this.searchResults = searchResult;
        this.addIcons(searchResult.hits);
        this.fetchingData = false;
      },

      async searchAlgolia(){
        const searchResult = await index.search(this.searchValue, {
          page: 0,
          hitsPerPage: 500
        });
        this.searchResults = searchResult;
        this.setIcons(searchResult.hits);
      },

      handleIntersection(payload){
        const y = payload[0].boundingClientRect.y
        // console.log(payload);
        if(y < 120){
          this.isIntersectingElement = true
        } else{
          this.isIntersectingElement = false
        }
      },

      onFocus(e){
        this.scrollTo(460)
        this.$emit('focus')
      },
    },

    computed:{
      ...mapGetters({
        getUsername: 'store/getUsername',
      }),
    },
  }
</script>
