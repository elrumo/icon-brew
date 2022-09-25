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
    <img
      :src="iconBrew[size]"
      :width="size == 'large' ? '89px':'28px'"
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
          small: require('@/assets/images/IconBrew-logo/IconBrew-small.png'),
          medium: require('@/assets/images/IconBrew-logo/IconBrew-medium.png'),
          large: require('@/assets/images/IconBrew-logo/IconBrew-large.png'),
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
