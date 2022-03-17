<template>
  <div class="">

    <TopNavBar/>

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
    />

    <SearchBar/>

    <MainContentGrid class="page-wrapper"/>

    <Footer/>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  import HeroSection from '../components/HeroSection.vue'
  import MainContentGrid from '../components/MainContentGrid.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'IndexPage',

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

    async fetch() {
      await this.fetchHomeData()
    },

    methods: {
      ...mapActions({
        fetchHomeData: 'store/fetchHomeData',
      }),
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),

    },


  }
</script>
