<!-- Please remove this file from your project -->
<template>
  <Toast
    position="bottom-center"
    group="iconDownload"
    class="icon-download-toast"
  >
    <template #message="slotProps">
        <div class="custom-toast">
          <IconBrewIcon
            size="24"
            icon="check"
            :filled="false"
          />
          <p>
            <b>
              '{{slotProps.message.summary}}'
            </b>
            {{slotProps.message.detail}}
          </p>
        </div>
    </template>
  </Toast>
</template>

<script>
  import { mapGetters } from 'vuex'

  import IconBrewIcon from './IconBrewIcon.vue'

  export default {
    name: 'CustomToast',

    components:{
      IconBrewIcon
    },

    props:{
      icon: {}
    },

    data(){
      return{
      }
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),
    },
  }
</script>
