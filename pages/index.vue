<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
      :isLink="false"
    />

    <!-- <UploadIcons/> -->
    <CustomDialog :isVisible="showDialog && cookieShowDialog"/>
    <CustomToast/>

    <!-- <LazyHydrate when-visible> -->
      <SearchBar/>
    <!-- </LazyHydrate> -->

    <!-- <LazyHydrate when-idle> -->
      <MainContentGrid class="page-wrapper"/>
    <!-- </LazyHydrate> -->

  </div>
</template>

<script>
  import axios from 'axios';

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
        iconTest: iconTest
      }
    },

    created() {
      if (process.client) {
        // handle client side
      }
    },

    async mounted() {
      if(process.client){
        this.showDialog = this.getHomeData.showDialog;
      }
    },

    async fetch() {
      // this.showDialog = this.getHomeData.showDialog;
    },

    methods: {
      ...mapActions({
        fetchHomeData: 'store/fetchHomeData',
        fetchSinglePage: 'store/fetchSinglePage',
      }),

      downloadJson(){
        // Gets string from this.jsonData and downlaods it as a .json file
        console.log(this.getjsonData);
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.getjsonData);
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", "data.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      },

      nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
      },

      prevPage(event) {
          this.$router.push(this.items[event.pageIndex - 1].to);
      },

      complete() {
          this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
      }
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
        getjsonData: 'store/getjsonData',
      }),

      getCookie(){
        return this.str_obj(document.cookie);
      }
    },


  }
</script>
