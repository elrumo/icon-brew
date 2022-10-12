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
      this.fetchIconCategories();
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
