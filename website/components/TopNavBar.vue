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

        <div v-for="item in getHomeData.navBarItems" :key="item.nameToDisplay">
          <NuxtLink
            v-if="!item.isExternalLink"
            class="nuxt-link"
            :to="item.goToPage"
          >
            {{ item.nameToDisplay }}
          </NuxtLink>

          <a
            v-else
            class="nuxt-link"
            :href="item.goToPage"
            target="_blank"
          >
          {{ item.nameToDisplay }}
          </a>
        </div>

        <!-- <NuxtLink
          class="nuxt-link"
          to="/suggestions"
        >
          Suggestions
        </NuxtLink>

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
        </NuxtLink> -->
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

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
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),
    },
  }
</script>
