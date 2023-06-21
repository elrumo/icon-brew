
<template>
  <div
    :class="{
      'main-layout-wrapper': true,
      'main-layout-wrapper-extended': Object.keys(selectedIcon).length > 0,
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
              :icons="numberOfIcons"
              :isStatic="true"
            />
          <div class="divider-horizontal w-80 m-all-a opacity-30 desktop-only">‎</div>
          
          <div v-if="iconCategories.length == 0" class="category-side-bar-wrapper">
              <Skeleton v-for="n in 17" :key="n+'-placeholder-sidebar'" class="h-2rem mb-2 w-full"/>
          </div>
        
          <div v-if="iconCategories.length != 0" class="category-side-bar-wrapper">
            <CategoryButton
              v-for="category in iconCategories"
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
      <div v-if="icons.length == 0 && searchValue.length == 0" class="content-area" style="min-height: 100%">
        <Skeleton v-for="n in 42" :key="n+'-placeholder'" class="mb-2 h-full w-full"/>
      </div>

      <div v-if="icons.length != 0" class="content-area">
        <IconCard
          v-for="icon in icons"
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
        v-if="icons.length == 0 && searchValue.length != 0"
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
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  export default {
    name: 'MainContentGrid',

    components:{
      IconCard: () => import('./IconCard.vue'),
      SearchBar: () => import('./SearchBar.vue'),
    },

    data(){
      return{
        is24px: true,
        size: "iconImage24px",
        sizes:[
          "18px", "24px"
        ],
        categories: [
          {
            categoryName: 'All Icons',
            icon: 'dashboard',
            icons: this.numberOfIcons
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

      setIconSize(){
        let size = this.size;
        this.iconSize = size;
      },
    },

    computed:{
      ...mapWritableState(useStore ,[
        'icons',
        'iconSize',
        'iconCategories',
        'selectedIcon',
        'selectedCategory',
        'searchValue',
        'numberOfIcons',
      ]),
    },
  }
</script>
