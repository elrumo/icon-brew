<!-- Please remove this file from your project -->
<template>
  <div
    @click="downloadImage({url: icon.img, name: icon.name})"
    class="icon-card-wrapper"
  >
    <img
      :src="icon.img"
      :id="icon.name"
      :class="{
        'icon-image-24': iconSize === 'iconImage24px',
        'icon-image-18': iconSize === 'iconImage18px',
      }"
      :alt="icon.name"
    >

    <p>
      {{icon.name}}
    </p>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';

  export default {
    name: 'IconCard',

    components:{
    },

    props:{
      icon: {
        type: Object,
        required: true,
        default: {
          name: 'icon',
          img: "https://i.imgur.com/rUHk33L.png"
        }
      }
    },

    data(){
      return{
      }
    },

    methods:{
      ...mapActions({
        downloadImage: 'store/downloadImage',
      }),

    },

    computed:{
      ...mapGetters({
        iconSize: 'store/iconSize',
      }),

    }

  }
</script>
