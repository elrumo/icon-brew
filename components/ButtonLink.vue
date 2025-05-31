<!-- Please remove this file from your project -->
<template>
  <div>
    <a
      v-if="isLink"
      :href="url"
      target="_blank"
    >
      <UButton
        v-if="icon != undefined"
        :label="label"
        :variant="isOutline ? 'ghost' : 'solid'"
        color="white"
        class="font-sans"
      />

      <UButton
        v-else
        :label="label"
        :color="isOutline ? 'white' :   'primary'"
        :variant="isOutline ? 'ghost' : 'solid'"
        class="font-sans"
      />
    </a>

    <NuxtLink
      v-else-if="!isLink"
      :to="'/'+url"
      class="nuxt-link"
    >
      <UButton
        v-if="icon != undefined"
        :label="label"
        color="white"
        :variant="isOutline ? 'ghost' : 'solid'"
        class="font-sans"
      />
      <UButton
        v-else
        :label="label"
        color="white"
        :icon="icon"
        :variant="isOutline ? 'ghost' : 'solid'"
        class="font-sans"
      />
    </NuxtLink>
  </div>
</template>

<script>
  import IconBrewLogo from './IconBrewLogo.vue'

  export default {
    name: 'HeroSection',

    components:{
      IconBrewLogo
    },

    props:{
      isLink: {
        type: Boolean,
        default: true
      },
      isOutline: {
        type: Boolean,
        default: false
      },
      url: '',
      label: '',
      icon: {
        type: String,
        default: undefined
      }
    },

    methods:{
    },

    computed:{
    },

    data(){
      return{
        imgs:{
          iconBrewMedium: '@/assets/images/IconBrew-logo/IconBrew-medium.png',
          iconBrewLarge: '@/assets/images/IconBrew-logo/IconBrew-large.png',
        }
      }
    }
  }
</script>
