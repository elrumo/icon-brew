<template>
  <div class="">

    <TopNavBar/>

    <HeroSection class="page-wrapper"/>

    <SearchBar/>

    <MainContentGrid class="page-wrapper"/>

    <Footer/>

  </div>
</template>

<script>
  import HeroSection from '../components/HeroSection.vue'
  import MainContentGrid from '../components/MainContentGrid.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import Footer from '../components/Footer.vue'

  import allIcons from '../assets/icons/24px/all-icons.svg'

  export default {
    name: 'IndexPage',

    components:{
      MainContentGrid,
      HeroSection,
      TopNavBar,
      Footer,
    },

    data: function () {
      return {
        allIcons: allIcons,
      }
    }
  }
</script>
