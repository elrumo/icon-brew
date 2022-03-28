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
        <label for="searchBar"></label>
        <InputText
          v-on:focus.native="onFocus"
          class="p-inputtext-sm"
          type="text"
          id="searchBar"
          v-model="searchValue"
          placeholder="Search"
          @keyup="searchAlgolia"
        />
        <i
          @click="searchValue = '', searchAlgolia()"
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

      <InputText
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
      >


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
      }
    },

    watch: {
    },

    mounted(){

      if(process.client){
        this.keyboardEvent()

        const searchBar = this.$refs.searchBarWrapper
        let options = {
          rootMargin: "-200px",
        };
        let observer = new IntersectionObserver(this.handleIntersection, options);

        observer.observe(searchBar);
      }

    },

    async fetch(){
      try {
        // await this.searchAlgolia()
      } catch (error) {
        console.log(error);
      }
    },

    methods:{
      ...mapActions({
        setSearchValue: 'store/setSearchValue',
        scrollTo: 'store/scrollTo',
        setIcons: 'store/setIcons',
        setDataToState: 'store/setDataToState',
      }),


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

      async searchAlgolia(){
        const searchResult = await index.search(this.searchValue, {
          page: 0,
          hitsPerPage: 200
        });
        this.searchResults = searchResult;
        this.setIcons(searchResult.hits);
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
