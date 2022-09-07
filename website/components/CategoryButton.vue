<!-- Please remove this file from your project -->
<template>
  <div>
    <button
      tabindex="0"
      @click="setCategoryAction(category.categoryName)"
      :id="category.categoryName"
      :class="{
          'category-item-wrapper': true,
          'category-item-selected': getSelectedCategory == category.categoryName,
        }"
    >
      <div
        class="category-item-title font-size-0-9"
      >
        <IconBrewIcon
          size="18"
          :icon="category.icon"
          />
        <p>
          {{ category.categoryName }}
        </p>
      </div>
      <p class="category-item-number font-size-0-8">
        {{ icons }}
      </p>
    </button>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import IconBrewIcon from '../components/IconBrewIcon.vue'

  export default {
    name: 'CategoryButton',

    components:{
    },

    props:{
      func:{
        required: false,
      },

      icons: {
        type: Number,
        default: 0,
      },

      category:{
        type: Object,
        required: true,
        default: {
          name: 'All Icons',
          code: 'dashboard'
        }
     }
    },

    methods: {
      ...mapActions({
        setDataToState: 'store/setDataToState',
        setCategory: 'store/setCategory',
      }),

      async setCategoryAction(categoryName){
        this.setCategory({category: categoryName})
      }
    },

    computed: {
      ...mapGetters({
        getSearchValue: 'store/getSearchValue',
        getSelectedCategory: 'store/getSelectedCategory',
      })
    },

    data(){
      return{
      }
    }
  }
</script>
