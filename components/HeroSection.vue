<!-- Please remove this file from your project -->
<template>
  <div class="hero-wrapper">

    <!-- <img :src="imgs.iconBrew" alt=""> -->
    <IconBrewLogo
      variant="vertical-xl"
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
          iconBrew: require('@/assets/images/icon-brew.png'),
        }
      }
    }
  }
</script>
