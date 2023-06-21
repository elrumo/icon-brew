<!-- Please remove this file from your project -->
<template>
     <div>
        <button
          tabindex="0"
          @click="setCategoryAction(category.categoryName)"
          :id="category.categoryName"
      :class="{
        'category-item-wrapper': true,
          'category-item-selected': selectedCategory == category.categoryName,
                        }"
        >
          <div
            class="category-item-title font-size-0-9"
          >
            <IconBrewIcon
              :size="18"
              :icon="category.icon"
            />
            <p>
          
              {{ getCategoryName }}
            </p>
          </div>

          <p v-if="!isStatic || (isStatic && icons != 0)" class="category-item-number font-size-0-8">
            {{ icons }}
          </p>
          <div class="w-1rem" v-else>
              <Skeleton class="w-1rem h-1rem"/>
          </div>

        </button>
      </div>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  import IconBrewIcon from '../components/IconBrewIcon.vue'

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
