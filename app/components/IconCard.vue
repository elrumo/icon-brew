<!-- Please remove this file from your project -->
<template>
  <div
    class="icon-card-wrapper"
    :title="replaceAllChar(icon.name, '-', ' ')"
    @click="downloadImage({url: {iconImage18px: icon.iconImage18px, iconImage24px: icon.iconImage24px}, name: icon.name, id: icon.objectID, target: $event})"
  >
    <div class="icon-card-container">
      <Icon :name="`ib:${icon.name}-${getSizeNumber}`" size="24" />
      <p>{{ replaceAllChar(icon.name, '-', ' ') }}</p>
    </div>
  </div>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

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
