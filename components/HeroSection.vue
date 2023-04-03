<!-- Please remove this file from your project -->
<template>
  <div class="hero-wrapper">

    <IconBrewLogo
      direction="vertical"
      size="mediumSmall"
      :title="homeData.title"
      :to="to"
      :isLink="isLink"
    />

    <h2
      v-if="homeData.subtitle"
      class="text-2xl font-normal"
    >
      {{homeData.subtitle}}
    </h2>

    <div class="hero-btns-wrapper">

      <Button
        v-if="customBtn"
        @click="$emit('bttnFunc')"
        :label="homeData.button"
      />

      <ButtonLink
        v-if="homeData.button && isLink"
        :isLink="homeData.primaryButtonIsLink"
        :url="homeData.buttonUrl"
        :isOutline="homeData.primaryButtonIsOutline"
        :icon="homeData.primaryButtonIcon"
        :label="homeData.button"
      />

      <ButtonLink
        v-if="homeData.secondaryButton"
        :isLink="homeData.secondaryButtonIsLink"
        :url="homeData.secondaryButtonUrl"
        :isOutline="homeData.secondaryButtonIsOutline"
        :icon="homeData.secondaryButtonIcon"
        :label="homeData.secondaryButton"
      />

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
      to: "",
      isLink: {
        type: Boolean,
        default: true
      },
      customBtn: {
        type: Boolean,
        default: false
      }
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
