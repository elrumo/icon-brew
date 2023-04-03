
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
              :category="category"
              :icons="getNumberOfIcons"
              :isStatic="true"
            />
          <div class="divider-horizontal w-80 m-all-a opacity-30 desktop-only">‎</div>
          
          <div v-if="getIconCategories.length == 0" class="category-side-bar-wrapper">
              <Skeleton v-for="n in 17" :key="n+'-placeholder-sidebar'" class="h-2rem mb-2 w-full"/>
          </div>
        
          <div v-if="getIconCategories.length != 0" class="category-side-bar-wrapper">
            <CategoryButton
            v-for="category in getIconCategories"
            :key="category.categoryName"
            :category="category"
            :active="category.categoryName == selectedCategory"
            :icons="category.noOfIcons != undefined ? category.noOfIcons : 0"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div id="mainContentGrid" class="content-card-secondary main-content-wrapper">

      <!-- Skeleton placeholder -->
      <div v-if="getIcons.length == 0 && getSearchValue.length == 0" class="content-area" style="min-height: 100%">
        <Skeleton v-for="n in 42" :key="n+'-placeholder'" class="mb-2 h-full w-full"/>
      </div>

      <div v-if="getIcons.length != 0" class="content-area">
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
        v-if="getIcons.length == 0 && getSearchValue.length != 0"
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

  export default {
    name: 'MainContentGrid',

    components:{
      IconCard: () => import('./IconCard.vue'),
      SearchBar: () => import('./SearchBar.vue'),
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

    async mounted(){
    },

    async fetch() {
    },

    methods:{
      ...mapActions({
        scrollTo: 'store/scrollTo',
        setDataToState: 'store/setDataToState',
        getState: 'store/getState'
      }),

      setIconSize(){
        let size = this.size;
        this.setDataToState({state: 'iconSize', data: size})
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
