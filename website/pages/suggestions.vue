<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getSuggestionsHero"
      :isLink="false"
    />

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

    <LazyHydrate when-idle>
      <div class="page-wrapper main-layout-wrapper">

        <div class="content-card-secondary p-all-md w-max-sm m-all-a">
          <div class="icon-card-wrapper p-tb-xsm p-rl-md flex-row align-center gap-sm w-100">
            <div class="flex-col">
              <div> H </div>
              <div> H </div>
            </div>
            <div class="flex-col">
              <p>
                AI icon
              </p>
              <p>
                AI icon
              </p>
            </div>
          </div>
        </div>

      </div>
    </LazyHydrate>

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
      await this.fetchSuggestionsHero()
        // await this.fetchSinglePage({id: 'icon-brew-about', state: 'aboutPageData'})
    },

    methods: {
      ...mapActions({
        fetchSuggestionsHero: 'store/fetchSuggestionsHero',
      }),
    },

    computed: {
      ...mapGetters({
        getSuggestionsHero: 'store/getSuggestionsHero',
      }),

    },


  }
</script>
