<!-- Please remove this file from your project -->
<template>
  <div
    class="icon-card-wrapper"
    @click="downloadImage({url: {iconImage18px: icon.iconImage18px, iconImage24px: icon.iconImage24px}, name: icon.name, id: icon.objectID, target: $event})"
  >
    <!-- @click="selectIcon()" -->
    <div>
      <img
        :src="icon.iconImage24px"
        :class="{
          'icon-image-24': iconSize === 'iconImage24px',
          'icon-image-18': iconSize === 'iconImage18px',
        }"
        :id="icon.name"
        :alt="icon.name"
     />

      <!-- <div
        v-html="iconSize === 'iconImage24px'? iconImage24px : iconImage18px"
        :class="{
          'icon-image-24': iconSize === 'iconImage24px',
          'icon-image-18': iconSize === 'iconImage18px',
        }"
        :id="icon.name"
        :alt="icon.name"
      >
      </div> -->

    </div>

    <div>
      <p>
        {{icon.name}}
      </p>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';
  import axios from 'axios';

  import bookIcon from '@/assets/icons/24px/outline/academic-book-24px.svg'

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
      getIconColour:{
        handler(colour) { // Reset toUpdate each time 'icon' changes.
          this.changeIconColour(colour)
        },
      }
    },

    async fetch() {
      // const iconImage24px = await axios.get("http://localhost:3000/_nuxt/assets/icons/24px/outline/academic-book-24px.svg");
      // const iconImage18px = await axios.get("http://localhost:3000/_nuxt/assets/icons/18px/outline/academic-book-18px.svg");
      // const iconImage24px = await axios.get(this.icon.iconImage24px);
      // const iconImage18px = await axios.get(this.icon.iconImage18px);

      // this.iconImage18px = iconImage18px.data;
      // this.iconImage24px = iconImage24px.data;
    },

    mounted(){
      // this.changeIconColour("#FFFFFF")
    },

    methods:{
      ...mapActions({
        downloadImage: 'store/downloadImage',
        setDataToStore: 'store/setDataToStore',
      }),

      changeIconColour(colour){
        const icon = document.getElementById(this.icon.name).children[0]
        for(let el in icon.children){
          el = icon.children[el]
          if(typeof el == "object"){
            console.log(el.style.fill = colour);
          }
        }
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

    }

  }
</script>
