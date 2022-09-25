<!-- Please remove this file from your project -->
<template>
  <div
    class="icon-card-wrapper"
    @click="downloadImage({url: {iconImage18px: icon.iconImage18px, iconImage24px: icon.iconImage24px}, name: icon.name, id: icon.objectID, target: $event})"
  >
    <div class="icon-card-container">
      <!-- @click="selectIcon()" -->
      <div>
          <!-- {{iconSize === 'iconImage24px'? 'iconImage24px' : 'iconImage18px'}} -->
        <svg
          :key="iconKey"
          :data-src="iconSize === 'iconImage24px'? icon.iconImage24px : icon.iconImage18px"
          :class="{
              'icon-image': true,
              'icon-image-24': iconSize === 'iconImage24px',
              'icon-image-18': iconSize === 'iconImage18px',
            }"
          :id="icon.name"
        ></svg>
          <!-- fill="none" -->

      </div>

      <div>
        <p>
          {{replaceAllChar(icon.name, '-', ' ')}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';
  import axios from 'axios';

  export default {
    name: 'IconCard',

    components:{
    },

    props:{
      icon: {
        type: Object,
        required: true,
        default: {
          name: 'icon',
          iconImage24px: "https://i.imgur.com/rUHk33L.png",
          iconImage18px: "https://i.imgur.com/rUHk33L.png",
        }
      }
    },

    data(){
      return{
        iconImage24px: '',
        iconImage18px: '',
      }
    },

    watch:{
      // getIconColour:{
      //   handler(colour) { // Reset toUpdate each time 'icon' changes.
      //     this.changeIconColour(colour)
      //   },
      // }
    },

    async fetch() {
    },

    mounted(){
    },

    methods:{
      ...mapActions({
        downloadImage: 'store/downloadImage',
        setDataToStore: 'store/setDataToStore',
      }),

      replaceAllChar(str, toReplace, replacement){
        try {
          return str.replaceAll(toReplace, replacement)
        } catch (error) {
          return str
        }
      },

      changeIconColour(colour){
        // const icon = document.getElementById(this.icon.name).children[0]
        // for(let el in icon.children){
        //   el = icon.children[el]
        //   if(typeof el == "object"){
        //     console.log(el.style.color = colour);
        //   }
        // }
      },

      changeIconWeight(colour){
        const icon = document.getElementById(this.icon.name).children[0]
        for(let el in icon.children){
          el = icon.children[el]
          if(typeof el == "object"){
            console.log(el.style.fill = colour);
          }
        }
      },

      async fetchImage(url){
        let img = await axios.get(url)
        console.log(img.data);
        this.iconData = img.data
        return img.data
      },

      selectIcon(){
        console.log(this.icon);
        this.setDataToStore({
          state: 'selectedIcon',
          data: this.icon
        });
      }

    },

    computed:{
      ...mapGetters({
        iconSize: 'store/iconSize',
        getIconWeight: 'store/getIconWeight',
        getIconColour: 'store/getIconColour',
      }),

      iconKey(){
        let icon = this.icon;
        let iconSize = this.iconSize;
        let key = icon.name+iconSize;
        return key
      }

    }

  }
</script>
