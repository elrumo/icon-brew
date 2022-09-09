<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getHomeData"
      :isLink="false"
    />

    <Dialog
      :closeOnEscape="true"
      :visible="showDialog"
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
            @click="showDialog = false"
            autofocus
            label="Close"
            class="p-button-text"
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
        showDialog: false
      }
    },

    async mounted() {
    },

    async fetch() {
      await this.fetchHomeData();
      this.showDialog = this.getHomeData.showDialog;
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
