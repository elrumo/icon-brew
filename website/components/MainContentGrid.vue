
<template>
  <div
    :class="{
      'main-layout-wrapper': true,
      'main-layout-wrapper-extended': Object.keys(getSelectedIcon).length > 0,
    }"
  >
    <!-- Sidebar -->
    <div class="">
      <div class="sticky-side-bar">
        <div class="category-side-bar-wrapper-container gap-md">
          <CategoryButton
            v-for="category in categories"
            :key="category.categoryName"
            :active="category.categoryName == selectedCategory"
            :category="category"
            :func="setCategory"
            :icons="category.icons"
            />

          <div class="divider-horizontal w-80 m-all-a opacity-30">‎</div>

          <div class="category-side-bar-wrapper">
            <CategoryButton
              v-for="category in getIconCategories"
              :key="category.categoryName"
              :category="category"
              :active="category.categoryName == selectedCategory"
              :func="setCategory"
              :icons="category.icons.data.length"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div id="mainContentGrid" class="content-card-secondary main-content-wrapper">
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
        selectedCategory: 'All Icons',
        is24px: true,
        size: "iconImage24px",
        sizes:[
          "18px", "24px"
        ],
        categories: [
          {
            categoryName: 'All Icons',
            icon: 'dashboard',
            icons: this.getNumberOfIcons
          },
          // {
          //   categoryName: 'Popular',
          //   icon: 'download',
          // },
          // { categoryName: 'Download',
          //   icon: 'download',
          // },
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
        getState: 'store/getState',
        searchAlgolia: 'store/searchAlgolia'
      }),

      setIconSize(){
        let size = this.size;
        this.setDataToState({state: 'iconSize', data: size})
      },

      async setCategory(e){
        let category = e.target.id
        this.setDataToState({state: 'selectedCategory', data: category})
        this.searchAlgolia({query: this.getSearchValue, category: 'categories: '+category})
        // this.scrollTo(520)
        this.selectedCategory = category
      },
    },

    computed:{
      ...mapGetters({
        getIcons: 'store/getIcons',
        iconSize: 'store/iconSize',
        getIconCategories: 'store/getIconCategories',
        getSelectedIcon: 'store/getSelectedIcon',
        getNumberOfIcons: 'store/getNumberOfIcons',
        getSelectedCategory: 'store/getSelectedCategory',
        getSearchValue: 'store/getSearchValue',
      }),
    }

  }
</script>
