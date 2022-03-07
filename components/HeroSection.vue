<!-- Please remove this file from your project -->
<template>
  <div class="hero-wrapper">

    <!-- <img :src="imgs.iconBrew" alt=""> -->
    <IconBrewLogo
      direction="vertical"
      :size="'large'"
    />

    <h2 class="text-2xl font-normal"> Flexible open source icons </h2>

    <div class="hero-btns-wrapper">

      <Button label="Download all" icon="pi pi-download"/>

      <!-- <Button class="p-button-outlined">
        Contribute
      </Button> -->
    </div>

  </div>
</template>

<script>
  import IconBrewLogo from '../components/IconBrewLogo.vue'

  export default {
    name: 'HeroSection',

    components:{
      IconBrewLogo
    },

    props:{
      icon: {}
    },

    data(){
      return{
        imgs:{
          iconBrewMedium: require('@/assets/images/IconBrew-logo/IconBrew-medium.png'),
          iconBrewLarge: require('@/assets/images/IconBrew-logo/IconBrew-large.png'),
        }
      }
    }
  }
</script>
