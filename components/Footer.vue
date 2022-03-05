<!-- Please remove this file from your project -->
<template>
  <div class="nav-bar-footer">

    <div v-html="markItDown(footerText1)"></div>
    <hr class="vertical-hr"/>
    <div v-html="markItDown(footerText2)"></div>

  </div>
</template>

<script>
  import IconBrewLogo from './IconBrewLogo.vue'
  import IconBrewIcon from './IconBrewIcon.vue'

  var MarkdownIt = require('markdown-it'), md = new MarkdownIt();

  export default {
    name: 'Footer',

    components:{
      IconBrewLogo,
      IconBrewIcon
    },

    props:{
      footerText1: {
        type: String,
        default: 'Made with ❤️ by [Elias](https://eliasruiz.com/)',
      },
      footerText2: {
        type: String,
        default: '[Support the project](https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN)',
      }
    },

    data(){
      return{
      }
    },

    methods:{
      markItDown(markdown) {
        return md.render(markdown);
      }
    },

    computed: {
    }
  }
</script>
