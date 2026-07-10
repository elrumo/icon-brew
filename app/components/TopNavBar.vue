<!-- Please remove this file from your project -->
<template>
  <div class="top-nav-bar-container">
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
          <Icon name="ib:twitter-24" size="24" />
        </a>
        <a class="flex" aria-label="Link to GitHub" href="https://github.com/elrumo/icon-brew" target="blank">
          <Icon name="ib:github-24" size="24" />
        </a>
        <a class="flex" aria-label="Link to Figma" href="https://www.figma.com/community/file/1121752926262800605" target="blank">
          <Icon name="ib:figma-24" size="24" />
        </a>
      </div>

      <div
        class="justify-end nav-bar-page-links"
      >
          <ButtonLink
            v-if="homeData.button"
            :isLink="homeData.primaryButtonIsLink"
            :url="homeData.buttonUrl"
            :isOutline="homeData.primaryButtonIsOutline"
            :label="homeData.button"
          />

          <ButtonLink
            v-if="homeData.secondaryButton"
            :isLink="homeData.secondaryButtonIsLink"
            :url="homeData.secondaryButtonUrl"
            :isOutline="homeData.secondaryButtonIsOutline"
            :label="homeData.secondaryButton"
          />

          <!-- <UButton
            variant="ghost"
            color="white"
            icon="i-heroicons-user-circle-solid"
            square
            class="font-sans"
          /> -->

          <!-- <div v-for="item in homeData.navBarItems" :key="item.nameToDisplay">
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
          </div> -->

          <!-- <NuxtLink
            class="nuxt-link"
            to="/suggestions"
          >
            Suggestions
          </NuxtLink> -->

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
  </div>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  import IconBrewLogo from '../components/IconBrewLogo.vue'

  export default {
    name: 'TopNavBar',

    components:{
      IconBrewLogo
    },

    props:{
      icon: {}
    },

    data(){
      return{
      }
    },

    async mounted() {
      if (import.meta.client) {
        try {
          await this.fetchHomeData();
          this.showDialog = this.homeData.showDialog;
        } catch (error) {
        }
      }
    },

    async fetch() {
      // try {
      //     await this.fetchHomeData();
      //     this.showDialog = this.homeData.showDialog;
      //   } catch (error) {
      //   }
    },

    methods: {
      ...mapActions(useStore, ['fetchHomeData']),
    },

    computed: {
      ...mapWritableState(useStore, ['homeData']),
    },
  }
</script>
