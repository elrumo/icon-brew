<template>
  <div class="min-100vh">
  <!-- <div class="h-100"> -->

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
        class="suggestions-dialog"
        @show="next"
        :closable="false"
      >
        <template #header>
          <h2>Icon request</h2>
        </template>

        <NuxtChild/>

        <template #footer>
          <Button label="Close" class="p-button-sm p-button-text" @click="closeDialog()"/>
          <Button label="Submit" :disabled="!isFormValid" class="p-button-sm" @click="sendSuggestion()"/>
        </template>
      </Dialog>

      <div
        v-if="getIconSuggestionsSorted.length == 0"
        class="content-card-secondary p-all-md w-max-sm m-all-a"
      >
        <Skeleton class="skeleton-wide"/>
      </div>

      <div
        class="content-card-secondary p-all-md w-max-sm m-all-a gap-md flex-column flex"
      >
        <div
          v-for="suggestion in getIconSuggestionsSorted"
          :key="suggestion.id"
          class="icon-card-wrapper cursor-default p-tb-sm p-rl-sm flex-row align-center gap-sm w-100"
        >
          <div class="flex-col gap-xxsm">
            <div @click="voteUpDown(suggestion.id, 'add')" class="height-weight-18">
              <client-only>
                <div slot="placeholder">
                  <IconBrewIcon
                    size="18"
                    icon="triangle-up-outline"
                  />
                </div>
                <IconBrewIcon
                  size="18"
                  :icon="suggestion.voteOperation == 'add' && suggestion.voteOperation != 'null' ? 'triangle-up-filled' : 'triangle-up-outline'"
                  iconOnHover="triangle-up-filled"
                />
              </client-only>
            </div>
            <div @click="voteUpDown(suggestion.id, 'minus')" class="height-weight-18">
              <client-only>
                <div slot="placeholder">
                  <IconBrewIcon
                    size="18"
                    icon="triangle-down-outline"
                  />
                </div>
                <IconBrewIcon
                  size="18"
                  :icon="suggestion.voteOperation == 'minus' && suggestion.voteOperation != 'null' ? 'triangle-down-filled' : 'triangle-down-outline'"
                  iconOnHover="triangle-down-filled"
                />
              </client-only>
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
            label: 'Step 2',
            to: '/suggestions/step2',
            index: 1,
          }
        ]
      }
    },

    async mounted() {
      if(process.client){
        // await this.fetchSuggestionsHero()
        // await this.fetchSuggestions()
      }
    },

    async fetch() {
      try {
        await this.fetchSuggestionsHero()
        await this.fetchSuggestions()
      } catch (error) {
      }
    },

    methods: {
      ...mapActions({
        fetchSuggestionsHero: 'store/fetchSuggestionsHero',
        fetchSuggestions: 'store/fetchSuggestions',
        addVote: 'store/addVote',
        addSuggestion: 'store/addSuggestion',
      }),

      sendSuggestion(){
        this.closeDialog()
        this.addSuggestion()
      },

      getVoteOp(id) {
        try {
          return JSON.parse(localStorage.getItem('iconVoted-'+id)).vote
        } catch (error) {
          return 'null'
        }
      },

      async voteUpDown(id, operation) {
        if (this.getVoteOp(id) == operation) {
          if(operation == 'add' ){
            this.addVote({id: id, operation: 'minus', localStorage: null});
          } else {
            this.addVote({id: id, operation: 'add', localStorage: null});
          }
        } else{
          this.addVote({id: id, operation: operation, localStorage:   operation});
        }
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
      },

      validateEmail(email){
        let regEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)

        if (regEx){
          return true
        }
        return false
      }
    },

    computed: {
      ...mapGetters({
        getSuggestionsHero: 'store/getSuggestionsHero',
        getIconSuggestions: 'store/getIconSuggestions',
        getIconSuggestionForm: 'store/getIconSuggestionForm',
      }),

      getIconSuggestionsSorted() {
        let suggestions = JSON.stringify(this.getIconSuggestions)
        suggestions = JSON.parse(suggestions)
        try {
          suggestions.forEach(element => {
            element.voteOperation = this.getVoteOp(element.id);
          });
          return suggestions
        } catch (error) {
          return []
        }
      },

      isFormValid () {
        return this.getIconSuggestionForm.formData.suggestedIconName !== '' &&
          this.getIconSuggestionForm.formData.suggestedIconCategory.code !== '' &&
          this.getIconSuggestionForm.formData.suggestedIconUserName !== '' &&
          this.validateEmail(this.getIconSuggestionForm.formData.suggestedIconEmail)
      }

    },


  }
</script>
