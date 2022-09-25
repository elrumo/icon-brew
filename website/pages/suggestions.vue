<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getSuggestionsHero"
      :isLink="false"
    />

    <div class="page-wrapper">

      <div
        v-for="suggestion in getIconSuggestions"
        :key="suggestion.id"
        class="content-card-secondary p-all-md w-max-sm m-all-a"
      >
        <div class="icon-card-wrapper cursor-default p-tb-sm p-rl-sm flex-row align-center gap-sm w-100">

          <div class="flex-col gap-xxsm">
            <IconBrewIcon
              size="18"
              icon="triangle-up-outline"
              iconOnHover="triangle-up-filled"
            />
            <IconBrewIcon
              size="18"
              icon="triangle-down-outline"
              iconOnHover="triangle-down-filled"
            />
          </div>

          <div class="flex-col gap-xxsm">
            <p class="opacity-100 text-sm">
              {{suggestion.attributes.name}}
            </p>
            <p class="text-sm">
              AI icon
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  import LazyHydrate from 'vue-lazy-hydration';

  import HeroSection from '../components/HeroSection.vue'
  import MainContentGrid from '../components/MainContentGrid.vue'
  import IconBrewIcon from '../components/IconBrewIcon.vue'

  export default {
    name: 'HomePage',

    components:{
      LazyHydrate,
      MainContentGrid,
      HeroSection,
      IconBrewIcon
    },

    data: function () {
      return {
      }
    },

    async mounted() {
    },

    async fetch() {
      await this.fetchSuggestionsHero()
      await this.fetchSuggestions()
    },

    methods: {
      ...mapActions({
        fetchSuggestionsHero: 'store/fetchSuggestionsHero',
        fetchSuggestions: 'store/fetchSuggestions',
      }),
    },

    computed: {
      ...mapGetters({
        getSuggestionsHero: 'store/getSuggestionsHero',
        getIconSuggestions: 'store/getIconSuggestions',
      }),

    },


  }
</script>
