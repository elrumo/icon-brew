<!-- Please remove this file from your project -->
<template>
     <div
      class="md-article-body"
    >

      <img
        class="article-body-img"
        v-if="contentData.mainImage"
        :src="'https://api.macosicons.com/'+contentData.mainImage.data.attributes.formats.large.url" alt=""
      >

      <div
        v-if="contentData.body"
        v-html="$md.render(contentData.body)"
      ></div>
    </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';

  export default {
    name: 'ArticleContent',

    components:{
    },

    props:{
      contentData: {
        type: Object,
        required: true,
      }
    },

    data(){
      return{
      }
    },

    methods:{
      ...mapActions({
      }),

    },

    computed:{
      ...mapGetters({
      }),

    }

  }
</script>
