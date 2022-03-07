<!-- Please remove this file from your project -->
<template>
  <nuxt-link
    to="/"
    :class="{
      'icon-brew-logo-wrapper-vertical': direction == 'vertical',
      'icon-brew-logo-wrapper-horizontal': direction == 'horizontal'
    }"
  >
    <img
      :src="iconBrew[size]"
      class="hero-logo"
      alt="IconBrew logo"
    >
    <p
      v-if="withText"
      class="icon-brew-logo-text"
    >
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
        default: 'medium',
      },

      withText: {
        type: Boolean,
        default: true,
      },

      direction:{
        type: String,
        default: 'horizontal-sm',
      }
    },

    data(){
      return{
        iconBrew:{
          small: require('@/assets/images/IconBrew-logo/IconBrew-small.png'),
          medium: require('@/assets/images/IconBrew-logo/IconBrew-medium.png'),
          large: require('@/assets/images/IconBrew-logo/IconBrew-large.png'),
        }
      }
    }
  }
</script>
