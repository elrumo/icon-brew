<!-- Please remove this file from your project -->
<template>
  <div
    ref="searchBarWrapper"
    :class="{
      'search-bar-wrapper': true,
      'sticky-shadow': isIntersectingElement,
    }"
  >

    <span class="p-input-icon-left input-search">
        <i class="pi pi-search" />
        <label for="searchBar" class="hidden">Search icons</label>
        <InputText
          v-on:focus.native="onFocus"
          class="p-inputtext-sm"
          type="text"
          id="searchBar"
          v-model="searchValue"
          placeholder="Search"
          @keyup="getFromAlgolia"
        />
        <i
          @click="searchValue = '', getFromAlgolia()"
          v-if="searchValue.length != 0"
          class="ib-close-24 clear-search-btn"
        />
    </span>

    <div class="options-wrapper">
      <Dropdown
        v-model="size"
        :options="sizes"
        optionLabel="name"
        placeholder="Select a size"
        @change="setIconSize()"
      />

      <!-- <InputText
        class="p-inputtext-sm weight-input-wrapper"
        type="number"
        id="iconWeight"
        v-model="iconWeight"
        @change="setIconWeight($event)"
      />

      <input
        @change="setIconColour()"
        v-model="iconColour"
        type="color"
      > -->


    </div>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import algoliasearch from 'algoliasearch';


  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
  const index = client.initIndex(process.env.ALGOLIA_INDEX);

  export default {
    name: 'SearchBar',

    components:{
    },

    props:{
      icon: {}
    },

    data(){
      return{
        searchValue: '',
        is24px: true,
        isIntersectingElement: false,
        observer: null,
        iconWeight: 2,
        // iconWeight: [0, 50, 100],
        searchResults: {},
        iconColour: "#FFFFFF",
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
        this.setDataToState({state: 'iconColour', data: colour});
      },

      setIconWeight(e){
        const weight = e.target.value
        this.setDataToState({state: 'iconWeight', data: weight});
      },

      setIconSize(){
        let size = this.size.code;
        this.setDataToState({state: 'iconSize', data: size})
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
          hitsPerPage: 50
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
