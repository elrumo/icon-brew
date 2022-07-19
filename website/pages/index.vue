<template>
  <div class="">

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
      :isLink="false"
    />

    <!-- <UploadIcons/> -->
    <Toast
      position="bottom-center"
      group="iconDownload"
      class="icon-download-toast"
    >
      <template #message="slotProps">
          <div class="custom-toast">
            <IconBrewIcon
              size="24"
              icon="check"
              :filled="false"
            />
            <p>
              <b>
                '{{slotProps.message.summary}}'
              </b>
              {{slotProps.message.detail}}
            </p>
          </div>
      </template>
    </Toast>

    <LazyHydrate when-visible>
      <SearchBar/>
    </LazyHydrate>

    <MainContentGrid class="page-wrapper"/>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  import LazyHydrate from 'vue-lazy-hydration';

  import HeroSection from '../components/HeroSection.vue'
  import MainContentGrid from '../components/MainContentGrid.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import Footer from '../components/Footer.vue'
  import UploadIcons from '../components/UploadIcons.vue'

  export default {
    name: 'HomePage',

    components:{
      LazyHydrate,
      MainContentGrid,
      HeroSection,
      TopNavBar,
      Footer,
      UploadIcons,
      SearchBar: () => import('../components/SearchBar.vue'),
    },

    data: function () {
      return {
      }
    },

    async mounted() {
    },

    async fetch() {
        await this.fetchHomeData()
        await this.fetchSinglePage({id: 'icon-brew-about', state: 'aboutPageData'})
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
