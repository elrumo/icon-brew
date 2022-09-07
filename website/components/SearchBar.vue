<template>
  <div
    ref="searchBarWrapper"
    :class="{
      'search-bar-container': true,
      'sticky-shadow': isIntersectingElement,
    }"
  >
    <div
    :class="{
      'search-bar-wrapper': true,
    }"
    >

      <!-- Search bar -->
      <span class="p-input-icon-left p-float-label input-search">
        <label for="searchBar" class="hidden">Search icons</label>
        <i class="pi pi-search"/>
        <!-- v-on:focus.native="onFocus" -->
        <InputText
          class="p-inputtext-sm"
          type="text"
          id="searchBar"
          v-model="searchValue"
          @keyup="getFromAlgolia"
          :placeholder="'Search ' + getNumberOfIcons + ' icons'"
        />

        <a
          href="https://www.algolia.com/"
          target="_blank"
          v-if="searchValue.length != 0"
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
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import algoliasearch from 'algoliasearch';
  import IconBrewIcon from '../components/IconBrewIcon.vue'

  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
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

        algoliaPage: 0,
      }
    },

    watch: {
    },

    async mounted(){
      this.scroll()
      // this.clearIcons();

      if(process.client){
        this.keyboardEvent()
      }

    },

    async fetch(){
      try {
        await this.fetchTotalNoOfRecods();
        await this.searchAlgolia({appendIcons: false});
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
        fetchTotalNoOfRecods: 'store/fetchTotalNoOfRecods',
        addOneToPage: 'store/addOneToPage',
        searchAlgolia: 'store/searchAlgolia',
      }),

      scroll() {
        let margin = 600
        window.onscroll = (e) => {
          let searchEmpty = this.searchValue == ''
          let bottomOfWindow = Math.ceil(document.body.offsetHeight - (window.pageYOffset + window.innerHeight)) < margin;
          this.isIntersectingElement = this.$refs.searchBarWrapper.getBoundingClientRect().top <= 70;

          if (bottomOfWindow && !this.getIsFetchingData && searchEmpty) {
            this.setDataToState({state: 'fetchingData', data: true});
            this.addOneToPage()
            this.searchAlgolia({appendIcons: true})
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
        this.setDataToState({state: 'searchValue', data: this.searchValue});
        this.searchAlgolia({appendIcons: false});
      },

      handleIntersection(payload){
        const y = payload[0].boundingClientRect.y
        if(y < 120){
          this.isIntersectingElement = true
        } else{
          this.isIntersectingElement = false
        }
      },

      onFocus(e){
        // this.scrollTo(460)
        // this.$emit('focus')
      },
    },

    computed:{
      ...mapGetters({
        getNumberOfIcons: 'store/getNumberOfIcons',
        getIsFetchingData: 'store/getIsFetchingData',
        getAlgoliaPage: 'store/getAlgoliaPage',
      }),
    },
  }
</script>
