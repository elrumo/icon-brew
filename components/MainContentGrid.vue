
<template>
  <div
    :class="{
      'main-layout-wrapper': true,
      'main-layout-wrapper-extended': Object.keys(getSelectedIcon).length > 0,
    }"
  >

      <!-- Sidebar -->
      <!-- <div class="">
        <div class="sticky-side-bar">
          <div class="category-side-bar-wrapper">
            <CategoryButton
              v-for="category in getIconCategories"
              :key="category.categoryName"
              :category="category"
              :active="category.categoryName == selectedCategory"
              :func="setCategory"
            />
          </div>
        </div>
      </div> -->

      <!-- Main content -->
      <div class="content-card-secondary main-content-wrapper">
        <div class="content-area">
          <IconCard
            v-for="icon in getIcons"
            :key="icon.iconName"
            :icon="{
                name: icon.iconName,
                iconImage18px: icon.iconImage18px,
                iconImage24px: icon.iconImage24px,
                objectID: icon.objectID,
                icon: icon
              }"
          />
        </div>
        <p
          class="no-icons-msg"
          v-if="getIcons.length == 0"
        >
          No icons found
        </p>
      </div>

      <!-- Icon details -->
      <!-- <div class="">
        <div class="sticky-side-bar">
          <div class="category-side-bar-wrapper" >
            <IconOptions/>
          </div>
            <IconDetails/>
        </div>
      </div> -->

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  import IconCard from '../components/IconCard.vue'
  import SearchBar from '../components/SearchBar.vue'

  export default {
    name: 'MainContentGrid',

    components:{
      IconCard,
      SearchBar
    },

    data(){
      return{
        selectedCategory: 'all-icons',
        is24px: true,
        size: "iconImage24px",
        sizes:[
          "18px", "24px"
        ],
        categories: [
          {
            name: 'All Icons',
            isSelected: true,
            code: 'all-icons',
          },
          {
            name: 'Popular',
            isSelected: false,
            code: 'download',
          },
          { name: 'Download',
            isSelected: false,
            code: 'download',
          },
        ],
        SelectButton: "",
        aboutData: {},

        iconColour: "#FFFFFF",
        size:  { "name": "24px", "code": "iconImage24px" },
        sizes:[
          {name: "18px", code: "iconImage18px"},
          {name: "24px", code: "iconImage24px"}
        ],
      }
    },

    mounted(){
    },

    async fetch() {
      await this.fetchIconCategories()
      // await this.fetchIcons()
    },

    methods:{
      ...mapActions({
        scrollTo: 'store/scrollTo',
        setDataToState: 'store/setDataToState',
        fetchIcons: 'store/fetchIcons',
        fetchIconCategories: 'store/fetchIconCategories',
        fetchSinglePage: 'store/fetchSinglePage',
        getState: 'store/getState'
      }),

      setIconSize(){
        // let size = this.is24px ? 'iconImage24px' : 'iconImage18px'
        let size = this.size;
        this.setDataToState({state: 'iconSize', data: size})
      },

      setCategory(e){
        this.scrollTo(520)
        this.selectedCategory = e.target.id
      },
    },

    computed:{
      ...mapGetters({
        getIcons: 'store/getIcons',
        iconSize: 'store/iconSize',
        getIconCategories: 'store/getIconCategories',
        getSelectedIcon: 'store/getSelectedIcon',
      }),
    }

  }
</script>
