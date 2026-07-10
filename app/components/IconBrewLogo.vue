<!-- Please remove this file from your project -->
<template>
  <div
    @click="isLink ? goTo(to) : null"
    :class="{
      'icon-brew-logo-wrapper-vertical': direction == 'vertical',
      'icon-brew-logo-wrapper-horizontal': direction == 'horizontal',
      'cursor-pointer': isLink
    }"
  >
  <!-- :src="iconBrew[size]" -->
  <!-- <img src="@/assets/images/IconBrew-logo/IconBrew-small.png" alt=""> -->
  <!-- :src="iconBrew[size]" -->
  <br>
  <!-- :src="iconBrew[size]" -->
  <!-- :src="`IconBrew-logo/IconBrew-${size}.png`" -->
  <img
      :src="iconBrew[size]"
      :width="size == 'large' ? '89':'28'"
      :height="size == 'large' ? '89':'28'"
      class="hero-logo"
      alt="IconBrew logo"
    />
    <p
      v-if="withText"
      class="icon-brew-logo-text"
    >
      {{ title }}
    </p>
  </div>
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

      to: {
        type: String,
        default: '/',
      },

      withText: {
        type: Boolean,
        default: true,
      },

      direction:{
        type: String,
        default: 'horizontal-sm',
      },

      title:{
        type: String,
        default: 'IconBrew',
      },

      isLink: {
        type: Boolean,
        default: true
      }
    },

    data(){
      return{
        iconBrew:{
          small: 'IconBrew-logo/IconBrew-small.png',
          mediumSmall: 'IconBrew-logo/IconBrew-mediumSmall.png',
          medium: 'IconBrew-logo/IconBrew-medium.png',
          large: 'IconBrew-logo/IconBrew-large.png',
        }
      }
    },

    methods:{
      goTo(to){
        if (to == 'false') {
          return
        } else{
          this.$router.push(to)
        }
      }
    }
  }
</script>
