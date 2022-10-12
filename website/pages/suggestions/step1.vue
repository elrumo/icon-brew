<template>
  <div class="grid-col-1 gap-lg">

    Fill in this form to request an icon, I'll try my best to design it soon.
    {{v$.name}}
    <div class="grid-col-1 gap-xsm w-100">

      <div class="grid-col-1-auto gap-sm">

        <!-- Icon name -->
        <div class="field">
          <label for="inputtext">* Icon name</label>
          <InputText class="w-100" id="inputtext" type="text" v-model="formData.iconName"/>
        </div>

        <!-- Categories -->
        <div class="field flex-col">
          <label for="inputtext">* Icon Category</label>
          <Dropdown
            class="max-height-input"
            v-model="formData.categorySelected"
            :options="getIconCategoriesForDropdown"
            optionLabel="name"
            placeholder="Select a category"
          >
            <template #option="slotProps">

              <div class="dropdown-option">
                <!-- {{slotProps.option.icon}} -->
                <IconBrewIcon
                  size="18"
                  :icon="slotProps.option.icon"
                />
                {{slotProps.option.name}}
              </div>
            </template>
          </Dropdown>
            <!-- @change="setIconSize()" -->
        </div>
      </div>

      <!-- Username -->
      <div class="field">
        <label for="inputtext">* Your name to show</label>
        <InputText class="w-100" id="inputtext" type="text" v-model="formData.userName"/>
      </div>

      <!-- Email -->
      <div class="field">
        <label class="" for="inputtext">* Your email</label>
        <InputText class="w-100" id="inputtext" type="text" v-model="formData.email"/>
      </div>

      <!-- Notes -->
      <div class="field">
        <label for="inputtext">Other notes <small>(optional)</small></label>
        <Textarea
          placeholder="Here you can add links to examples, similar icons etc..."
          class="w-100"
          id="inputtext"
          type="textArea"
          v-model="formData.notes"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { useVuelidate } from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  import IconBrewIcon from '@/components/IconBrewIcon.vue'

  export default {
    setup () {
      return { v$: useVuelidate() }
    },

    name: 'step1',

    components:{
      IconBrewIcon
    },

    data: function () {
      return {
        index: 0,
        name: '',
        formData: {
          iconName: '',
          categorySelected: '',
          userName: '',
          email: '',
          notes: ''
        }
      }
    },

    validations () {
      return {
        name: { required },
        formData: {
          iconName: { required },
          categorySelected: { required },
          userName: { required },
          email: { required }
        }
      }
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
        fetchHomeData: 'store/fetchHomeData',
        fetchSinglePage: 'store/fetchSinglePage',
      }),
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
        getIconCategoriesForDropdown: 'store/getIconCategoriesForDropdown',
      }),
    },


  }
</script>
