<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
      :isLink="false"
    />

    <UploadIcons/>
    <CustomDialog :isVisible="showDialog && cookieShowDialog"/>
    <CustomToast/>

    <LazyHydrate when-visible>
      <SearchBar/>
    </LazyHydrate>

    <LazyHydrate when-idle>
      <MainContentGrid class="page-wrapper"/>
    </LazyHydrate>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import LazyHydrate from 'vue-lazy-hydration';
  import iconTest from '../assets/icons/24px/triangle-down-outline-24px.svg';

  export default {
    name: 'HomePage',

    components:{
      LazyHydrate,
      MainContentGrid: () => import('../components/MainContentGrid.vue'),
      HeroSection: () => import('../components/HeroSection.vue'),
      TopNavBar: () => import('../components/TopNavBar.vue'),
      Footer: () => import('../components/Footer.vue'),
      UploadIcons: () => import('../components/UploadIcons.vue'),
      IconBrewIcon: () => import('../components/IconBrewIcon.vue'),
      SearchBar: () => import('../components/SearchBar.vue'),
      CustomToast: () => import('../components/CustomToast.vue'),
      CustomDialog: () => import('../components/CustomDialog.vue'),
    },

    data: function () {
      return {
        showDialog: false,
        cookieShowDialog: false,
        iconTest: iconTest,
      }
    },

    created() {
      if (process.client) {
        // handle client side
      }
    },

    async mounted() {
    },

    async fetch() {
      await this.fetchHomeData();
      this.showDialog = this.getHomeData.showDialog;
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

      getCookie(){
        return this.str_obj(document.cookie);
      }
    },


  }
</script>
