<!-- Please remove this file from your project -->
<template>
  <Toast
    position="bottom-center"
    group="iconDownload"
    class="icon-download-toast"
  >
    <template #message="slotProps">
        <div class="custom-toast">
          
          <Icon name="ib:check-24" size="24" />
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


  export default {
    name: 'CustomToast',

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
