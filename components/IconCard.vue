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
        <!-- <svg src="https://parsefiles.back4app.com/LJsRx6ZQQaHcy0CmDnrk60xk2kRl3RoJK4zWvgfw/dd7ee50573d54338850d0790b82f3014_pharmacy-24px.svg"></svg> -->
        <!-- <IconBrewIcon
          :size="18"
          :icon="category.icon"
        /> -->

        <IconBrewIcon
          :size="getSizeNumber"
          :icon="icon.name"
        />

        <!-- <svg
          :data-src="iconSize === 'iconImage24px'? icon.iconImage24px : icon.iconImage18px"
          :key="iconKey"
          :class="{
              'icon-image': true,
              'icon-image-24': iconSize === 'iconImage24px',
              'icon-image-18': iconSize === 'iconImage18px',
            }"
          :id="icon.name"
        ></svg> -->
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
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'
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
        iconData: '',
      }
    },

    watch:{
      // getIconColour:{
      //   handler(colour) { // Reset toUpdate each time 'icon' changes.
      //     this.changeIconColour(colour)
      //   },
      // }
    },

    mounted(){
      // this.fetchImage(this.icon.iconImage24px)
    },

    methods:{
      ...mapActions(useStore ,[
        'downloadImage'
      ]),

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
        this.iconData = img.data
        console.log(img.data);
      },

      selectIcon(){
        this.selectedIcon = this.icon;
      }

    },

    computed:{
      ...mapWritableState(useStore, [
        'iconSize',
        'iconWeight',
        'iconColour',
        'selectedIcon'
      ]),

      getSizeNumber(){
        return this.iconSize === 'iconImage24px'? 24 : 18
      },

      iconKey(){
        let icon = this.icon;
        let iconSize = this.iconSize;
        let key = icon.name+iconSize;
        return key
      },

    }

  }
</script>
