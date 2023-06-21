<template>
  <div
    ref="searchBarWrapper"
    :class="{
      'search-bar-container': true,
      'sticky-shadow': isIntersectingElement,
    }"
  >
    <div
      :class="{
        'search-bar-wrapper': true,
      }"
    >
      <!-- Search bar -->
      <span class="p-input-icon-left p-float-label input-search">
        <label for="searchBar" class="hidden">Search icons</label>
        <i class="pi pi-search"/>

        <!-- v-if="icons != 0" -->
        <InputText
          class="p-inputtext-sm"
          type="text"
          id="searchBar"
          v-model="searchValue"
          @keyup="getFromAlgolia()"
          :placeholder="'Search ' + numberOfIcons + ' icons'"
        />
        <!-- <div class="h-full w-full" v-else>
          <Skeleton v-for="n in 1" :key="n+'-placeholder-sidebar'" class="h-full w-full"/>
        </div> -->

        <a
          href="https://www.algolia.com/"
          target="_blank"
          v-if="searchValue.length != 0"
          :class="{
            'searchByAlgolia': true,
            'movedBySearch': searchValue.length != 0
          }"
        >
          <img
            src="search-by-algolia.svg"
            alt="Search by Algolia"
          />
        </a>
        <span
          @click="searchValue = '', getFromAlgolia()"
        >
          <IconBrewIcon
            :size="24"
            icon="close"
            :filled="false"
            v-if="searchValue.length != 0"
            class="clear-search-btn"
          />
        </span>
      </span>

      <Divider class="desktop-only" layout="vertical" />
      <Divider class="mobile-only"/>

      <!-- Options wrapper -->
      <div class="options-wrapper">

        <!-- Color picker -->
        <div @dblclick="onColorPickerClick('icon')">
          <ColorPicker
            defaultColor="FFFFFF"
            id="colorPicker"
            v-model="iconColour"
          />
        </div>

        <!-- Color picker BG -->
        <div @dblclick="onColorPickerClick('bg')">
          <ColorPicker
            defaultColor="1F262F"
            id="colorPickerBG"
            v-model="bgColour"
          />
        </div>

        <!-- Size -->
        <Dropdown
          class="max-height-input"
          v-model="size"
          :options="sizes"
          optionLabel="name"
          placeholder="Select a size"
          @change="setIconSize()"
        />
        
        <!-- Download as -->
        <Dropdown
          class="max-height-input"
          v-model="downloadAs"
          :options="downloadOptions"
          optionLabel="name"
          placeholder="Download or copy"
          @change="setDownloadOption()"
        />

        <!--
          <InputText
            class="p-inputtext-sm weight-input-wrapper"
            type="number"
            id="iconWeight"
            v-model="iconWeight"
            @change="setIconWeight($event)"
          />
        -->
      </div>

    </div>
  </div>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  import IconBrewIcon from '../components/IconBrewIcon.vue'

  export default {
    name: 'SearchBar',

    components:{
      IconBrewIcon,
    },

    props:{
      icon: {}
    },

    data(){
      return{
        imgs:{
          searchByAlgolia: './search-by-algolia.svg'
        },
        color: '1976D2',
        is24px: true,
        isIntersectingElement: false,
        observer: null,
        searchResults: {},

        downloadOptions:[
          {name: 'Download .SVG', code: "downloadSVG"},
          {name: 'Copy SVG', code: "copySVG"},
          // {name: 'Download .PNG', code: "downloadPNG"},
        ],

        size:  { "name": "24px", "code": "iconImage24px" },
        sizes:[
          {name: "18px", code: "iconImage18px"},
          {name: "24px", code: "iconImage24px"}
        ],
      }
    },

    watch: {
    },

    async mounted(){
      if(process.client){
        this.scroll();
        this.keyboardEvent()
        try {
          await this.searchAlgolia({ appendIcons: false });
          await this.fetchIconCategories();
          await this.fetchTotalNoOfRecods();
          this.previousQuery = this.icons;
          // await this.setDataToState({ state: 'previousQuery', data: this.getIcons });
        } catch (error) {
          console.log(error);
        }
      }

    },

    // async fetch(){
    //   try {
    //     console.log("Gii");
    //     await this.searchAlgolia({appendIcons: false});
    //     await this.setDataToState({state: 'previousQuery', data: this.getIcons});
    //   } catch (error) {
    //     console.log("error loading searchbar: ", error);
    //   }
    // },

    watch:{
      iconColour:{
        handler() { // Reset toUpdate each time 'icon' changes.
          this.setIconColour()
        },
      },
      bgColour:{
        handler() { // Reset toUpdate each time 'icon' changes.
          this.setBgColour()
        },
      }
    },

    methods:{
      ...mapActions(useStore, [
        'scrollTo',
        'setIcons',
        'addIcons',
        'clearIcons',
        'setDataToState',
        'fetchTotalNoOfRecods',
        'fetchIconCategories',
        'addOneToPage',
        'searchAlgolia',
      ]),

      scroll() {
        let margin = 600
        window.onscroll = (e) => {
          if(! this.$refs.searchBarWrapper){
            return
          }
          let bottomOfWindow = Math.ceil(document.body.offsetHeight - (window.pageYOffset + window.innerHeight)) < margin;
          this.isIntersectingElement = this.$refs.searchBarWrapper.getBoundingClientRect().top <= 70;

          if (bottomOfWindow && !this.isFetchingData && this.previousQuery.length != 0) {
            this.fetchingData = true;
            this.addOneToPage()
            this.searchAlgolia({appendIcons: true})
          }
        }
      },

      setIconColour(){
        const colour = this.iconColour.replace('#', '')
        const contentArea = document.querySelector(".content-area");
        contentArea.style.color = '#'+colour;
        this.iconColour = colour;
      },

      setBgColour(){
        const colour = this.bgColour.replace('#', '');
        const contentArea = document.querySelectorAll(".icon-card-wrapper");
        contentArea.forEach((el) => {
          el.style.backgroundColor = '#'+colour;
        });
        this.bgColour = colour;
      },

      onColorPickerClick(picker){
        if (picker == 'bg') {
          this.bgColour = "#1F262F";
          this.setBgColour()
        } else{
          this.iconColour = "#FFFFFF";
          this.setIconColour()
        }
      },

      setIconWeight(e){
        const weight = e.target.value;
        this.iconWeight = weight;
      },

      setIconSize(){
        let size = this.size.code;
        this.iconSize = size;
      },

      setDownloadOption(){
        let downloadAs = this.downloadAs;
        this.downloadAs = downloadAs;
      },

      keyboardEvent(){
        document.addEventListener('keydown', (event) => {

          let isNotCmd = event.getModifierState('Meta')
                          || event.key == 'Alt'
                          || event.key == 'Control'
                          || event.key == 'CapsLock'
                          || event.key == 'Backspace'
                          || event.key == 'Shift'
                          || event.key == 'Enter'
                          || event.key == 'Tab'
                          || event.key == ' '
                          || document.activeElement.tagName == 'INPUT'
                          || this.$route.name != 'index'

          if(!isNotCmd){
            document.getElementById('searchBar').focus()
          }

        });
      },

      async getFromAlgolia(){
        // this.setDataToState({state: 'searchValue', data: this.searchValue});
        // this.setDataToState({state: 'algoliaPage', data: 0});
        this.algoliaPage = 0
        this.searchAlgolia({appendIcons: false});
      },

      handleIntersection(payload){
        const y = payload[0].boundingClientRect.y
        if(y < 120){
          this.isIntersectingElement = true
        } else{
          this.isIntersectingElement = false
        }
      },

      onFocus(e){
        // this.scrollTo(460)
        // this.$emit('focus')
      },
    },

    computed:{
      ...mapWritableState(useStore, [
        'searchValue', 
        'algoliaPage',
        'iconCategories',
        'icons',
        'previousQuery',
        'isFetchingData',
        'iconColour',
        'bgColour',
        'iconWeight',
        'iconSize',
        'downloadAs',
        'numberOfIcons'
      ]),
    },
  }
</script>
