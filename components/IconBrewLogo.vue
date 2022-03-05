<!-- Please remove this file from your project -->
<template>
  <nuxt-link
    to="/"
    :class="{
      'icon-brew-logo-wrapper-vertical-xl': variant == 'vertical-xl',
      'icon-brew-logo-wrapper-horizontal-sm': variant == 'horizontal-sm'
    }"
  >

    <img
      :src="iconBrew"
      class="hero-logo"
      alt="IconBrew logo"
    >

    <p v-if="isText" class="icon-brew-logo-text">
      IconBrew
    </p>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'IconBrewLogo',

    components:{
    },

    props:{
      size: {
        type: String,
        default: '24',
      },

      isText: {
        type: Boolean,
        default: true,
      },

      variant:{
        type: String,
        default: 'horizontal-sm',
      }
    },

    data(){
      return{
        iconBrew: require('@/assets/images/icon-brew.png')
      }
    }
  }
</script>
