<template>
  <div class="grid-col-1 gap-lg">

    Fill in this form to request an icon, I'll try my best to design it soon.

    <div class="grid-col-1 gap-xsm w-100">

      <div class="grid-col-1-auto gap-sm">
        <div class="field">
          <label for="inputtext">* Icon name</label>
          <InputText class="w-100" id="inputtext" type="text" v-model="iconName"/>
        </div>

        <div class="field flex-col">
          <label for="inputtext">* Icon Category</label>
          <Dropdown
            class="max-height-input"
            v-model="categorySelected"
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

      <div class="field">
        <label for="inputtext">* Your name to show</label>
        <InputText class="w-100" id="inputtext" type="text" v-model="userName"/>
      </div>

      <div class="field">
        <label class="" for="inputtext">* Your email</label>
        <InputText class="w-100" id="inputtext" type="text" v-model="userName"/>
      </div>

      <div class="field">
        <label for="inputtext">Other notes <small>(optional)</small></label>
        <Textarea placeholder="Here you can add links to examples, similar icons etc..." class="w-100" id="inputtext" type="textArea" v-model="userName"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import IconBrewIcon from '@/components/IconBrewIcon.vue'

  export default {
    name: 'step1',

    components:{
      IconBrewIcon
    },

    data: function () {
      return {
        index: 0,
        userName: '',
        iconName: '',
        categorySelected: '',
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
