<template>
  <div class="">

    <HeroSection
      class="page-wrapper"
      :homeData="aboutData"
      to="false"
    />

    <!-- <div class="icon-at"></div> -->

    <ArticleContent
      :contentData="aboutData"
    />

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import HeroSection from '../components/HeroSection.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import Footer from '../components/Footer.vue'
import ArticleContent from '../components/ArticleContent.vue'

  export default {
    name: 'IndexPage',

    components:{
    HeroSection,
    TopNavBar,
    Footer,
    ArticleContent
},

    data: function () {
      return {
        aboutData: {}
      }
    },

    async mounted() {
      if(process.client){
        let aboutData = await this.getState({state: 'aboutPageData'})
        if (aboutData.length == 0) {
          await this.fetchSinglePage({id: 'icon-brew-about', state: 'aboutPageData'})
          aboutData = await this.getState({state: 'aboutPageData'})
        }
        this.aboutData = aboutData
      }
    },

    async fetch() {
      // let aboutData = await this.getState({state: 'aboutPageData'})

      // if (aboutData.length == 0) {
      //   await this.fetchSinglePage({id: 'icon-brew-about', state: 'aboutPageData'})
      //   aboutData = await this.getState({state: 'aboutPageData'})
      // }
      // this.aboutData = aboutData
    },

    methods: {
      ...mapActions({
        getState: 'store/getState',
        fetchSinglePage: 'store/fetchSinglePage',
      }),
    },

    computed: {
      ...mapGetters({
      }),

    },


  }
</script>
