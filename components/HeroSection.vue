<!-- Please remove this file from your project -->
<template>
  <div class="hero-wrapper">

    <IconBrewLogo
      direction="vertical"
      :size="'large'"
      :title="homeData.title"
      :to="to"
    />

    <h2
      v-if="homeData.subtitle"
      class="text-2xl font-normal"
    >
      {{homeData.subtitle}}
    </h2>

    <div class="hero-btns-wrapper">

      <a
        v-if="homeData.buttonUrl"
        :href="homeData.buttonUrl"
        target="_blank"
      >
        <Button
          :label="homeData.button"
          icon="pi pi-download"
        />
      </a>

      <!-- <Button class="p-button-outlined">
        Contribute
      </Button> -->
    </div>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import IconBrewLogo from '../components/IconBrewLogo.vue'

  export default {
    name: 'HeroSection',

    components:{
      IconBrewLogo
    },

    props:{
      homeData: {},
      to: ""
    },

    methods:{
    },

    computed:{
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
