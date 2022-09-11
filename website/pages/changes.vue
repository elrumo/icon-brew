<template>
  <div class="h-100">
    <div
      class="m-all-a p-all-lg m-t-xlg dialog-content p-dialog"
      v-if="getHomeData.dialogText"
      v-html="$md.render(getHomeData.dialogText)"
    ></div>
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
      }
    },

    created() {
      if (process.client) {
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

      str_obj(str) {
          str = str.split(', ');
          var result = {};
          for (var i = 0; i < str.length; i++) {
              var cur = str[i].split('=');
              result[cur[0]] = cur[1] == 'true' ? true : false;
          }
          return result;
      },
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),
    },


  }
</script>
