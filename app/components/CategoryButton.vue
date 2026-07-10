<template>
  <button
    type="button"
    tabindex="0"
    @click="setCategoryAction(category.categoryName)"
    :id="category.categoryName"
    class="category-item-wrapper"
    :class="{
      'category-item-selected': active,
    }"
  >
    <span class="category-item-title">
      {{ getCategoryName }}
    </span>

    <span v-if="!isStatic || (isStatic && icons != 0)" class="category-item-number">
      {{ icons }}
    </span>
    <span class="w-4" v-else>
      <USkeleton class="h-4 w-6 rounded-md" />
    </span>
  </button>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  export default {
    name: 'CategoryButton',

    components:{
    },

    mounted(){
    },

    props:{
      func:{
        required: false,
      },
      isStatic: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Boolean,
        default: false,
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
      ...mapActions(useStore, [
        'setCategory',
      ]),

      async setCategoryAction(categoryName){
        this.setCategory({category: categoryName})
      }
    },

    computed: {
      ...mapWritableState(useStore, [
        'searchValue',
        'selectedCategory',
      ]),

      getCategoryName(){
        try {
          return this.category.categoryName.replaceAll('_', ' ')
        } catch (error) {
          return this.category.categoryName
        }
      }
    },

    data(){
      return{
      }
    }
  }
</script>
