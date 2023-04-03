<template>
  <div class="">
    <TopNavBar/>

    <Nuxt/>

    <Footer/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {

    mounted() {
      if(process.client){
        // this.fetchIconCategories();
      }
    },

    async fetch(){
      try {
        // await this.fetchIconCategories();
      } catch (error) {
        console.log('error loading categories: ', error);
      }
    },

    methods:{
      ...mapActions({
        fetchIconCategories: 'store/fetchIconCategories',
      }),
    }
  }
</script>

<style>

</style>
