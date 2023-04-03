<!-- Please remove this file from your project -->
<template>
  <div
    class="icon-brew-icon"
    @mouseover="mouseOver"
    @mouseleave="mouseOut"
  >
    <!-- {{icon}} -->
    <svg
      v-if="iconOnHover.length == 0 || !isHovering"
      :class="'icon-image-' + size"
      :data-src="getIcon"
    ></svg>

    <svg
      v-if="iconOnHover.length != 0 && isHovering"
      :class="'icon-image-' + size"
      :data-src="getHoverIcon"
      class="cursor-pointer"
    ></svg>

  </div>
  <!-- <div></div> -->
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
      iconOnHover: {
        type: String,
        default: '',
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
        isHovering: false,
        // iconToShow: this.getIcon,
      }
    },

    watch:{
      icon: {
        handler: function (val, oldVal) {
        },
        deep: true
      },
    },

    methods:{
      mouseOver(){
        if (!this.isHovering && this.iconOnHover.length != 0) {
          this.isHovering = true;
        }
      },

      mouseOut(){
        if (this.isHovering && this.iconOnHover.length != 0) {
          this.isHovering = false;
        }
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
          // console.log('error: ', error);
          return ''
        }
      },

      getHoverIcon(){
        let size = this.size;

        if (size != '24' || size != '18') {
          size = '24';
        }

        try {
          let icon = require('@/assets/icons/' + this.size + 'px/' + this.iconOnHover + '-' + this.size + 'px.svg');
          return icon
        } catch (error) {
          console.log('error hover: ', error);
          return ''
        }
      }
    }
  }
</script>
