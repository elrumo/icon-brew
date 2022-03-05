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
          v-model="searchValue"
          placeholder="Search"
        />
    </span>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

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

    methods:{
      ...mapActions({
        setSearchValue: 'store/setSearchValue',
        scrollTo: 'store/scrollTo',
      }),

      handleIntersection(payload){
        const y = payload[0].boundingClientRect.y

        if(y < 120){
          this.isIntersectingElement = true
        } else{
          this.isIntersectingElement = false
        }
      },

      setIconSize(){
        let size = this.is24px ? 'iconImage24px' : 'iconImage18px'
        this.setDataToState({state: 'iconSize', data: size})
      },


      el(entries) {
         entries.forEach(({ target, isIntersecting}) => {
          console.log(target, isIntersecting);
        });
      },

      isShadow(target){
        // let el = document.getElementById(target)
        // console.log(el.getBoundingClientRect().top);
        return true
      },

      onFocus(e){
        this.scrollTo(540)
        this.$emit('focus')
      },
    }
  }
</script>
