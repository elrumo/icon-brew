<!-- Please remove this file from your project -->
<template>
  <div>
    <button
      tabindex="0"
      @click="func"
      :id="category.categoryName"
      :class="{
          'category-item-wrapper': true,
          'category-item-selected': active
        }"
    >
      <div
        class="category-item-title"
      >
        <IconBrewIcon
          size="18"
          :icon="category.icon"
          />
        <p>
          {{ category.categoryName }}
        </p>
      </div>
      <p class="category-item-number">
        {{category.icons.data.length}}
      </p>
    </button>
  </div>
</template>

<script>
  import IconBrewIcon from '../components/IconBrewIcon.vue'

  export default {
    name: 'CategoryButton',

    components:{
    },

    props:{
      func:{
        type: Function,
        required: false,
      },
      active: {
        type: Boolean,
        default: false,
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

    data(){
      return{
      }
    }
  }
</script>
