<template>
  <div class="h-100">

    <HeroSection
      class="page-wrapper"
      :homeData="getSuggestionsHero"
      :isLink="false"
      :customBtn="true"
      buttonMessage=""
      @bttnFunc="showDialog()"
    />

    <div class="page-wrapper">

      <Dialog
        :visible="showSubmitDialog" modal
        :dismissableMask="true"
        @show="next"
        :closable="false"
      >
        <template #header>
          <h2>Icon request</h2>
        </template>

        <NuxtChild/>

        <template #footer>
          <Button label="Close" class="p-button-sm p-button-text" @click="closeDialog()"/>
          <Button label="Submit" class="p-button-sm" @click="next"/>
        </template>
      </Dialog>

      <div
        v-for="suggestion in getIconSuggestions"
        :key="suggestion.id"
        class="content-card-secondary p-all-md w-max-sm m-all-a"
      >
        <div class="icon-card-wrapper cursor-default p-tb-sm p-rl-sm flex-row align-center gap-sm w-100">

          <div class="flex-col gap-xxsm">
            <div @click="voteUpDown(suggestion.id, 'add')" class="height-weight-18">
              <IconBrewIcon
                size="18"
                icon="triangle-up-outline"
                iconOnHover="triangle-up-filled"
              />
            </div>
            <div @click="voteUpDown(suggestion.id, 'minus')" class="height-weight-18">
              <IconBrewIcon
                size="18"
                icon="triangle-down-outline"
                iconOnHover="triangle-down-filled"
              />
            </div>
          </div>

          <div class="flex-col gap-xxsm">
            <p class="opacity-100 text-sm sans">
              {{suggestion.attributes.name}}
            </p>
            <p class="text-sm sans">
              {{suggestion.attributes.suggestedBy}}
              -
              {{suggestion.attributes.votes}}
              <span v-if="suggestion.attributes.votes == 1">
                vote
              </span>
              <span v-else>
                votes
              </span>
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
  import axios from 'axios';

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
        showSubmitDialog: false,
        indexSelected: 0,
        steps:[
          {
            label: 'Step 1',
            to: '/suggestions/step1',
            index: 0,
          },
          {
            label: 'Step 1',
            to: '/suggestions/step2',
            index: 1,
          }
        ]
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
        addVote: 'store/addVote',
      }),

      async voteUpDown(id, operation) {
        this.addVote({id: id, operation: operation});
      },

      closeDialog() {
        this.$router.push('/suggestions');
        this.showSubmitDialog = false;
      },

      showDialog() {
        this.$router.push(this.steps[this.indexSelected].to);
        this.showSubmitDialog = true;
      },

      toggleDialog() {
        this.showSubmitDialog = !this.showSubmitDialog;
      },

      next() {
        return
        // this.showSubmitDialog = false;
      }
    },

    computed: {
      ...mapGetters({
        getSuggestionsHero: 'store/getSuggestionsHero',
        getIconSuggestions: 'store/getIconSuggestions',
      }),

    },


  }
</script>
