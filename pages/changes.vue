<template>
  <div class="h-100 changes-wrapper">
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

  export default {
    name: 'HomePage',

    components:{
      LazyHydrate,
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
      if(process.client){
      }
    },

    async fetch() {
    },

    methods: {
      ...mapActions({
        fetchHomeData: 'store/fetchHomeData',
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
