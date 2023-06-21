<!-- Please remove this file from your project -->
<template>
  <div>
    <a
      v-if="isLink"
      :href="url"
      target="_blank"
    >
      <Button
        v-if="icon != undefined"
        :label="label"
        :class="{
          'p-button-outlined': isOutline,
          'p-button-small': true
        }"
      />

      <!-- :icon="'pi' + icon" -->
      <Button
        v-else
        :label="label"
        :class="{
          'p-button-outlined': isOutline,
          'p-button-small': true
        }"
      />
    </a>

    <NuxtLink
      v-else-if="!isLink"
      :to="'/'+url"
      class="nuxt-link"
    >
      <Button
        v-if="icon != undefined"
        :label="label"
        :class="{
          'p-button-outlined': isOutline,
          'p-button-small': true
        }"
      />
      <Button
        v-else
        :label="label"
        :icon="'pi' + icon"
        :class="{
          'p-button-outlined': isOutline,
          'p-button-small': true
        }"
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
