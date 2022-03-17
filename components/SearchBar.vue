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
        <InputText
          v-on:focus.native="onFocus"
          class="p-inputtext-sm"
          type="text"
          id="searchBar"
          v-model="searchValue"
          placeholder="Search"
          @keyup="searchAlgolia"
        />
    </span>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import algoliasearch from 'algoliasearch';


  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
  const index = client.initIndex(process.env.ALGOLIA_INDEX);

  export default {
    name: 'IconCard',

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
        searchResults: {}
      }
    },

    watch: {
    },

    mounted(){

      if(process.client){
        const searchBar = this.$refs.searchBarWrapper
        let options = {
          rootMargin: "-200px",
        };
        let observer = new IntersectionObserver(this.handleIntersection, options);

        observer.observe(searchBar);
      }

    },

    async fetch(){
      await this.searchAlgolia()
    },

    methods:{
      ...mapActions({
        setSearchValue: 'store/setSearchValue',
        scrollTo: 'store/scrollTo',
        setIcons: 'store/setIcons',
      }),

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
        this.scrollTo(540)
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
