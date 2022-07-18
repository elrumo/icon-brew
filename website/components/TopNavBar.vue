<!-- Please remove this file from your project -->
<template>
  <div class="top-nav-bar">

    <IconBrewLogo
      direction="horizontal"
      class="justify-start"
      size="small"
      to="/"
    />

    <div class="nav-bar-links-wrapper">
      <a href="https://twitter.com/elrumo" target="blank">
        <IconBrewIcon
          size="24"
          icon="twitter"
          :filled="false"
        />
      </a>
      <a href="https://github.com/elrumo/icon-brew" target="blank">
        <IconBrewIcon
          size="24"
          icon="github"
          :filled="false"
        />
      </a>
    </div>

    <div
      class="justify-end nav-bar-page-links"
    >
        <!-- <NuxtLink
          class="nuxt-link"
          to="/"
        >
          Resources
        </NuxtLink> -->

        <a
          class="nuxt-link"
          href="https://github.com/elrumo/icon-brew/discussions"
          target="_blank"
        >
          Discussion
        </a>

        <NuxtLink
          class="nuxt-link"
          to="/about"
        >
          About
        </NuxtLink>
    </div>

  </div>
</template>

<script>

  import IconBrewLogo from '../components/IconBrewLogo.vue'
  import IconBrewIcon from '../components/IconBrewIcon.vue'

  export default {
    name: 'TopNavBar',

    components:{
      IconBrewLogo,
      IconBrewIcon
    },

    props:{
      icon: {}
    },

    data(){
      return{
      }
    }
  }
</script>
