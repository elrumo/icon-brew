
<template>
    <div
      class="category-side-bar-wrapper"
      v-if="Object.keys(getSelectedIcon).length > 0"
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
        {{getSelectedIcon.name}}
      </h3>
      <p class="break-word">
        <img :src="getSelectedIcon.img" alt="">
      </p>
    </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

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
      ...mapActions({
        getState: 'store/getState'
      }),
    },

    computed:{
      ...mapGetters({
        getSelectedIcon: 'store/getSelectedIcon',
      }),
    }

  }
</script>
