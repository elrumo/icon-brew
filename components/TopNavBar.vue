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
      <!-- <Skeleton height="24px" width="24px"></Skeleton> -->
      <a class="flex" aria-label="Link to Twitter" href="https://twitter.com/elrumo" target="blank">
        <IconBrewIcon
          size="24"
          icon="twitter"
        />
      </a>
      <a class="flex" aria-label="Link to GitHub" href="https://github.com/elrumo/icon-brew" target="blank">
        <IconBrewIcon
          size="24"
          icon="github"
        />
      </a>
      <a class="flex" aria-label="Link to Figma" href="https://www.figma.com/community/file/1121752926262800605" target="blank">
        <IconBrewIcon
          size="24"
          icon="figma"
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

        <NuxtLink
          class="nuxt-link"
          to="/suggestions"
        >
          Suggestions
        </NuxtLink>

        <!-- <a
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
  import { mapGetters, mapActions } from 'vuex'

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

    async mounted() {
      if (process.client) {
        try {
          await this.fetchHomeData();
          this.showDialog = this.getHomeData.showDialog;
        } catch (error) {
        }
      }
    },

    async fetch() {
      // try {
      //     await this.fetchHomeData();
      //     this.showDialog = this.getHomeData.showDialog;
      //   } catch (error) {
      //   }
    },

    methods: {
      ...mapActions({
        fetchHomeData: 'store/fetchHomeData',
      }),
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),
    },
  }
</script>
