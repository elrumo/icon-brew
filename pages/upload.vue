<template>
  <div class="h-100">

    <UploadIcons/>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'


  export default {
    name: 'HomePage',

    components:{
      UploadIcons: () => import('../components/UploadIcons.vue'),
    },

    data: function () {
      return {
      }
    },

    created() {
    },

    async mounted() {
    },

    async fetch() {
    },

    methods: {
      ...mapActions({
      }),
    },

    computed: {
      ...mapGetters({
      }),
    },


  }
</script>
