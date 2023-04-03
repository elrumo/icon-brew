<!-- Please remove this file from your project -->
<template>
     <div>
      <h1>
        {{ user.name }}
      </h1>
      <h3>
        {{ user.age }} years
      </h3>
      <h4>
        {{yearsLeft}}
      </h4>
    </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  export default {
    name: 'IconCard',

    components:{
    },

    props:{
      icon: {}
    },

    data(){
      return{
        user : {
          name: 'Alex',
          age: 19,
        },
        yearsLeft: 4
      }
    },

    watch: {
    },

    mounted(){
    },

    methods:{
    }
  }
</script>
