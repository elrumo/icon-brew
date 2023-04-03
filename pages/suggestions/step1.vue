<template>
  <div class="grid-col-1 gap-lg">

    Fill in this form to request an icon, I'll try my best to design it soon.
    <div class="grid-col-1 gap-xsm w-100">

      <div class="formgrid grid">
      <!-- <div class="grid-col-1-auto gap-sm"> -->

        <!-- Icon name -->
        <div class="field col">
          <label for="inputtext">* Icon name</label>
          <InputText v-model="suggestedIconName" class="w-100" id="inputtext" type="text"/>
        </div>

        <!-- Categories -->
        <div class="field col">
          <label for="inputtext">* Icon Category</label>
          <Dropdown
            class="max-height-input w-full"
            v-model="suggestedIconCategory"
            :options="getIconCategoriesForDropdown"
            optionLabel="name"
            placeholder="Select a category"
          >
            <template #option="slotProps">
              <div class="dropdown-option">
                <IconBrewIcon
                  size="18"
                  :icon="slotProps.option.icon"
                />
                {{slotProps.option.name}}
              </div>
            </template>
          </Dropdown>
        </div>
      </div>

      <!-- Username -->
      <div class="field">
        <label for="inputtext">* Your name</label>
        <InputText class="w-100" id="inputtext" type="text" v-model="suggestedIconUserName"/>
        <!-- <small id="username2-help" class="p-error">Username is not available.</small> -->
      </div>

      <!-- Email -->
      <div class="field">
        <label class="" for="inputtext">* Your email</label>
        <InputText class="w-100" id="inputtext" type="email" v-model="suggestedIconEmail"/>
      </div>

      <!-- Notes -->
      <div class="field">
        <label for="inputtext">Other notes <small>(optional)</small></label>
        <Textarea
          placeholder="Here you can add links to examples, similar icons etc..."
          class="w-100"
          id="inputtext"
          type="textArea"
          v-model="suggestedIconNotes"
        />
      </div>

    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  // import { useVuelidate } from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'
  import IconBrewIcon from '@/components/IconBrewIcon.vue'
  export default {
    // setup () {
    //   return { v$: useVuelidate() }
    // },
    name: 'step1',
    components:{
      IconBrewIcon
    },

    data: function () {
      return {
        index: 0,
        name: '',

        suggestedIconName: 'Owl',
        suggestedIconCategory: '',
        suggestedIconUserName: 'elias',
        suggestedIconEmail: 'elrumo97@me.com',
        suggestedIconNotes: '',

        nameValidationError: false,

        formData: {
          suggestedIconName: '',
          suggestedIconCategory: '',
          userName: '',
          email: '',
          notes: ''
        },
        filteredData: null,
      }
    },

    watch: {
      suggestedIconName(newVal, oldVal) {
        let name = newVal;
        // let name = newVal.charAt(newVal.length-1) == ' ' && newVal.length > 1 ? newVal.slice(0, -1) : newVal;
        this.suggestedIconName = name.replaceAll('\\', '');
        this.setDataToStore({state: 'suggestedIconName', data: name});
      },

      suggestedIconCategory(newVal, oldVal) {
        this.setDataToStore({state: 'suggestedIconCategory', data: newVal});
      },

      suggestedIconUserName(newVal, oldVal) {
        let name = newVal.charAt(newVal.length-1) == ' ' && newVal.length > 1? newVal.slice(0, -1) : newVal;
        this.suggestedIconUserName = name.replaceAll('\\', '');
        this.setDataToStore({state: 'suggestedIconUserName', data: name});
      },

      suggestedIconEmail(newVal, oldVal) {
        let email = newVal.charAt(newVal.length-1) == ' ' ? newVal.slice(0, -1) : newVal;
        this.suggestedIconEmail = email.replaceAll('\\', '');
        this.setDataToStore({state: 'suggestedIconEmail', data: email});
      },

      suggestedIconNotes(newVal, oldVal) {
        this.suggestedIconNotes = newVal.replaceAll('\\', '');
        this.setDataToStore({state: 'suggestedIconNotes', data: newVal});
      },
    },

    created() {
      if (process.client) {
      }
    },

    async mounted() {
    },

    async fetch() {
    },

    methods: {
      ...mapActions({
        setIconSuggestionForm: 'store/setIconSuggestionForm',
        setDataToStore: 'store/setDataToStore',
        setDataToState: 'store/setDataToState',
      }),

      // filterCategories(event) {
        // console.log(event.query);
        // this.filteredData = this.getIconCategoriesForDropdown;
        // this.filteredData = this.categoryService.search(event.query);
      // },

      setFormData(formDataKey, value) {
        console.log(formDataKey);
        this.setIconSuggestionForm({
          state: formDataKey,
          data: value,
        })
      },
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
        getIconCategoriesForDropdown: 'store/getIconCategoriesForDropdown',
        getIconSuggestionForm: 'store/getIconSuggestionForm',
      }),
    },
  }
</script>
