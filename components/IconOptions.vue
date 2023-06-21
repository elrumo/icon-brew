<!-- Please remove this file from your project -->
<template>
  <div>
      <Dropdown
        v-model="size"
        :options="sizes"
        optionLabel="name"
        placeholder="Select a size"
        @change="setIconSize()"
      />

      <InputText
        class="p-inputtext-sm weight-input-wrapper"
        type="number"
        id="iconWeight"
        v-model="iconWeight"
        @change="setIconWeight($event)"
      />

      <input
        @change="setIconColour()"
        v-model="iconColour"
        type="color"
      >
  </div>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { useStore } from '~/stores/myStore'

  export default {
    name: 'IconOptions',

    components:{
    },

    props:{
      icon: {}
    },

    data(){
      return{
        iconWeight: 2,
        iconColour: "#FFFFFF",
        size:  { "name": "24px", "code": "iconImage24px" },
        sizes:[
          {name: "18px", code: "iconImage18px"},
          {name: "24px", code: "iconImage24px"}
        ],
      }
    },

    watch: {
    },

    mounted(){
    },

    async fetch(){
    },

    methods:{
      ...mapActions(useStore, [
        'scrollTo',
        'setIcons',
        'setDataToState',
      ]),


      setIconColour(e){
        const colour = this.iconColour
        this.iconColour = colour;
      },

      setIconWeight(e){
        const weight = e.target.value
        this.iconWeight = weight;
      },

      setIconSize(){
        let size = this.size.code;
        this.iconSize = size
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

      handleIntersection(payload){
        const y = payload[0].boundingClientRect.y

        if(y < 120){
          this.isIntersectingElement = true
        } else{
          this.isIntersectingElement = false
        }
      },

      onFocus(e){
        this.scrollTo(460)
        this.$emit('focus')
      },
    },

    computed:{
      ...mapWritableState(useStore, [
        'iconColour',
        'iconWeight',
        'iconSize',
      ]),
    },
  }
</script>
