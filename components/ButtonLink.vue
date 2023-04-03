<!-- Please remove this file from your project -->
<template>
  <div>
    <a
      v-if="isLink"
      :href="url"
      target="_blank"
    >
      <Button
        v-if="icon"
        :label="label"
        :class="{
          'p-button-outlined': isOutline
        }"
      />

      <Button
        v-else
        :label="label"
        :icon="'pi' + icon"
        :class="{
          'p-button-outlined': isOutline
        }"
      />
    </a>

    <NuxtLink
      v-else-if="!isLink"
      :to="'/'+url"
      class="nuxt-link"
    >
      <Button
        v-if="icon"
        :label="label"
        :class="{
          'p-button-outlined': isOutline
        }"
      />
      <Button
        v-else
        :label="label"
        :icon="'pi' + icon"
        :class="{
          'p-button-outlined': isOutline
        }"
      />
    </NuxtLink>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
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
      icon: ''
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
