<!-- Please remove this file from your project -->
<template>
  <div class="icon-brew-icon">
    <img
      :src="getIcon"
      :class="'icon-image-' + size"
      alt=""
    >
  </div>
</template>

<script>

  export default {
    name: 'IconBrewIcon',

    components:{
    },

    props:{
      icon: {
        type: String,
        default: 'all-icons',
      },
      size: {
        type: String,
        default: '24',
      },
      filled: {
        type: Boolean,
        default: false,
      },
    },

    data(){
      return{
      }
    },

    computed:{
      getIcon(){
        // console.log( this.icon + '.svg');
        return require('@/assets/icons/' + this.size + 'px/' + this.icon + '.svg');
      }
    }
  }
</script>
