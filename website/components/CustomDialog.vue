<!-- Please remove this file from your project -->
<template>
  <Dialog
      :closeOnEscape="true"
      :visible="showDialog && cookieShowDialog"
      :modal="true"
      :closable="false"
    >
      <template #header>
        <h3>
          {{ getHomeData.dialogTitle }}
        </h3>
      </template>

        <div
          class="dialog-content"
          v-if="getHomeData.dialogText"
          v-html="$md.render(getHomeData.dialogText)"
        ></div>

      <template #footer>
        <div class="p-t-md">
          <Button
            @click="closeDialog(false)"
            label="Close"
            class="p-button-text"
          />
          <Button
            @click="closeDialog(true)"
            autofocus
            label="Close & don't show again"
          />
        </div>
        </template>
    </Dialog>
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
      isVisible: false,
    },

    data(){
      return{
        showDialog: false,
      }
    },

    async mounted(){
      this.showDialog = this.getHomeData.showDialog;

      let cookie = this.str_obj(document.cookie);

      if (cookie.showDialog == undefined) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 30);
        document.cookie =  "showDialog="+true+ "; expires="+currentDate.toString();
        this.cookieShowDialog = 'true';
      } else{
        this.cookieShowDialog = cookie.showDialog;
      }
    },

    methods:{
      str_obj(str) {
          str = str.split(', ');
          var result = {};
          for (var i = 0; i < str.length; i++) {
              var cur = str[i].split('=');
              result[cur[0]] = cur[1] == 'true' ? true : false;
          }
          return result;
      },

      closeDialog(rememberChoice){
        this.showDialog = false;
        this.cookieShowDialog = false;
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 30);
        document.cookie =  "showDialog="+!rememberChoice+ "; expires="+currentDate.toString();
      }
    },

    computed: {
      ...mapGetters({
        getHomeData: 'store/getHomeData',
      }),
    },
  }
</script>
