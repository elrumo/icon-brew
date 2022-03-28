<template>
  <div class="">

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
      to="false"
    />

    <SearchBar/>

    <MainContentGrid class="page-wrapper"/>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import axios from 'axios'

  import HeroSection from '../components/HeroSection.vue'
  import MainContentGrid from '../components/MainContentGrid.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'HomePage',

    components:{
      MainContentGrid,
      HeroSection,
      TopNavBar,
      Footer,
    },

    data: function () {
      return {
      }
    },

    async mounted() {
    },

    async fetch() {
        // await this.fetchHomeData()
        // await this.fetchSinglePage({id: 'icon-brew-about', state: 'aboutPageData'})
    },

    methods: {
      ...mapActions({
        fetchHomeData: 'store/fetchHomeData',
        fetchSinglePage: 'store/fetchSinglePage',
      }),
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),

    },


  }
</script>
