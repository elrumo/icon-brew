<!-- Please remove this file from your project -->
<template>
  <div class="icon-brew-icon">
    <svg
      :class="'icon-image-' + size"
      :data-src="getIcon"
    ></svg>
  </div>
  <!-- <svg xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 18 18"
    :aria-labelledby="icon"
    role="presentation"
  >
    <title
      :id="icon"
      lang="en"
    >{{ icon }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg> -->
</template>

<script>

  export default {
    name: 'IconBrewIcon',

    components:{
    },

    props:{
      icon: {
        type: String,
        default: 'dashboard',
      },
      size: {
        type: String,
        default: '24',
      },
      iconColor: {
        type: String,
        default: 'currentColor',
      },
      filled: {
        type: Boolean,
        default: false,
      },
    },

    data(){
      return{
      }
    },

    computed:{
      getIcon(){
        let size = this.size;

        if (size != '24' || size != '18') {
          size = '24';
        }

        try {
          let icon = require('@/assets/icons/' + this.size + 'px/' + this.icon + '-' + this.size + 'px.svg');
          return icon
        } catch (error) {
          console.log(error);
          return ''
        }
      }
    }
  }
</script>
