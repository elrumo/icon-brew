
<template>
  <div class="main-layout-wrapper">

      <!-- Sidebar -->
      <div>
        <div class="category-side-bar-wrapper mb-3">

          <!-- Size toggle -->
          <div class="contents" >
            <span class="side-bar-title">
              Size
            </span>

            <div class="switch-with-title-horizontal pl-2">
              <p class="text-sm">
                {{is24px ? '24px' : '18px'}}
              </p>
              <InputSwitch
                @change="setIconSize"
                v-model="is24px"
              />
            </div>
          </div>

        </div>

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

      <div class="content-card-secondary main-content-wrapper">
        <div class="content-area">

          <IconCard
            v-for="icon in getIcons"
            :key="icon.iconName"
            :icon="{name: icon.iconName, img: icon[iconSize]}"
          />
        </div>

      </div>

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
        ]
      }
    },

    mounted(){
    },

    async fetch() {
      await this.fetchIcons()
      await this.fetchIconCategories()
    },

    methods:{
      ...mapActions({
        scrollTo: 'store/scrollTo',
        setDataToState: 'store/setDataToState',
        fetchIcons: 'store/fetchIcons',
        fetchIconCategories: 'store/fetchIconCategories',
      }),

      setIconSize(){
        let size = this.is24px ? 'iconImage24px' : 'iconImage18px'
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
      }),
    }

  }
</script>
