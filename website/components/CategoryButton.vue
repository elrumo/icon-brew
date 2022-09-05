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

    data(){
      return{
      }
    }
  }
</script>
