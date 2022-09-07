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
  import { mapMutations, mapActions, mapGetters } from 'vuex'

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
      ...mapActions({
        scrollTo: 'store/scrollTo',
        setIcons: 'store/setIcons',
        setDataToState: 'store/setDataToState',
      }),


      setIconColour(e){
        const colour = this.iconColour
        this.setDataToState({state: 'iconColour', data: colour});
      },

      setIconWeight(e){
        const weight = e.target.value
        this.setDataToState({state: 'iconWeight', data: weight});
      },

      setIconSize(){
        let size = this.size.code;
        this.setDataToState({state: 'iconSize', data: size})
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
      ...mapGetters({
        getUsername: 'store/getUsername',
      }),
    },
  }
</script>
