<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
      :isLink="false"
    />

    <Dialog
      :closeOnEscape="true"
      :visible="showDialog && cookieShowDialog"
      :modal="true"
      :closable="false"
    >
      <template #header>
        <h3>
          {{ getHomeData.dialogTitle }}
        </h3>
      </template>

        <div
          class="dialog-content"
          v-if="getHomeData.dialogText"
          v-html="$md.render(getHomeData.dialogText)"
        ></div>

      <template #footer>
        <div class="p-t-md">
          <Button
            @click="closeDialog(false)"
            label="Close"
            class="p-button-text"
          />
          <Button
            @click="closeDialog(true)"
            autofocus
            label="Close & don't show again"
          />
        </div>
        </template>
    </Dialog>

    <!-- <IconBrewIcon
      size="24"
      icon="chromatica"
    /> -->

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

    <LazyHydrate when-idle>
      <MainContentGrid class="page-wrapper"/>
    </LazyHydrate>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import LazyHydrate from 'vue-lazy-hydration';

  import HeroSection from '../components/HeroSection.vue'
  import MainContentGrid from '../components/MainContentGrid.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import Footer from '../components/Footer.vue'
  import UploadIcons from '../components/UploadIcons.vue'
  import IconBrewIcon from '../components/IconBrewIcon.vue'
  import SearchBar from '../components/SearchBar.vue'


  export default {
    name: 'HomePage',

    components:{
      LazyHydrate,
      MainContentGrid,
      HeroSection,
      TopNavBar,
      Footer,
      UploadIcons,
      IconBrewIcon,
      SearchBar
      // SearchBar: () => import('../components/SearchBar.vue'),
    },

    data: function () {
      return {
        showDialog: false,
        cookieShowDialog: false
      }
    },

    created() {
      if (process.client) {
        // handle client side
      }
    },

    async mounted() {
      let cookie = this.str_obj(document.cookie);

      if (cookie.showDialog == undefined) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 30);
        document.cookie =  "showDialog="+true+ "; expires="+currentDate.toString();
        this.cookieShowDialog = 'true';
      } else{
        this.cookieShowDialog = cookie.showDialog;
      }

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

      str_obj(str) {
          str = str.split(', ');
          var result = {};
          for (var i = 0; i < str.length; i++) {
              var cur = str[i].split('=');
              result[cur[0]] = cur[1] == 'true' ? true : false;
          }
          return result;
      },

      closeDialog(rememberChoice){
        this.showDialog = false;
        this.cookieShowDialog = false;
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 30);
        document.cookie =  "showDialog="+!rememberChoice+ "; expires="+currentDate.toString();
        // document.cookie =  "showDialog=" + JSON.stringify(cookie) + "; expires=Thu, 9 Oct 2022 12:00:00 UTC";
        console.log(document.cookie);
      }
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
