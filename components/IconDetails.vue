
<template>
    <div
      class="category-side-bar-wrapper"
      v-if="Object.keys(selectedIcon).length > 0"
    >

      <div class="top-card-action-wrapper-right">
        <label>Icon Info</label>
        <Button
          type="button"
          class="p-button-text fit-width p-button-sm"
        >
            <div class="ib-chevron-double-right-18"></div>
        </Button>
      </div>

      <h3>
        {{selectedIcon.name}}
      </h3>
      <p class="break-word">
        <img :src="selectedIcon.img" alt="">
      </p>
    </div>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  export default {
    name: 'IconDetails',

    components:{
    },

    data(){
      return{
      }
    },

    mounted(){
    },

    async fetch() {
    },

    methods:{
    },

    computed:{
      ...mapWritableState(useStore, [
        'selectedIcon'
      ]),
    }

  }
</script>
