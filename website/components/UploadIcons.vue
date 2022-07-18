<!-- Please remove this file from your project -->
<template>
  <div
    class="icon-card-wrapper cursor-default"
  >
    <InputText type="text" v-model="dataToUpload" />

    <FileUpload
      name="demo[]"
      :customUpload="true"
      @uploader="uploadData($event)"
      :multiple="true"
    />

    <!-- <Button @click="uploadData()" label="Submit"/> -->

  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';
  import axios from 'axios';
  import { async } from 'q';

  export default {
    name: 'UploadIcons',

    components:{
    },

    props:{
    },

    data(){
      return{
        dataToUpload: '',
      }
    },

    watch:{
    },

    async fetch() {
    },

    mounted(){
    },

    methods:{
      ...mapActions({
        setDataToStore: 'store/setDataToStore',
      }),

      async uploadData(e){
        const name = this.dataToUpload

        async function createEntry(payload){

          // let data = {
          //   data:{
          //     iconName: payload.iconName,
          //     iconImage24px: payload.iconImage24px,
          //   }
          // }

          console.log(payload);

          const post = await axios.post('https://api.macosicons.com/api/icon-brews',
            payload,
            {
              headers: {
                Authorization:
                  '',
              },
            }
          )
          console.log(post);
        }

        async function uploadFiles(file){
          console.log("Uploading file...");

          let fileData = new FormData();
          fileData.append("files", file);

          const fileUpload = axios.post(
            "https://api.macosicons.com/api/upload",
            fileData,
            {
              headers: {
                Authorization: process.env.STRAPI_BEARER
              },
            }
          )

          return await fileUpload
        }

        try {

          const files = e.files;
          let newFiles = []

          async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
              await callback(array[index], index, array);
            }
          }

          const start = async () => {
            await asyncForEach(files, async (file) => {
              const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '')
              const fileInArray = newFiles.find(icon => icon.iconName === iconName)
              const uploadedFile = await uploadFiles(file);
              const fileId = uploadedFile.data[0].id;

              if(fileInArray){
                if (file.name.includes('-18px.svg')) {
                  fileInArray.iconImage18px = fileId
                }else{
                  fileInArray.iconImage24px = fileId
                }
              } else{
                let iconToAdd = { iconName: iconName }
                if(file.name.includes('-18px.svg')){
                  iconToAdd.iconImage18px= fileId,
                  newFiles.push(iconToAdd)
                }else{
                  iconToAdd.iconImage24px= fileId,
                  newFiles.push(iconToAdd)
                }
              }
              console.log(fileId);
            });
          }

          await start();

          newFiles.forEach(async (file) => {
            console.log(file.iconName);
            await createEntry(
              {
                data:{
                    iconName: file.iconName,
                    iconImage18px: file.iconImage18px,
                    iconImage24px: file.iconImage24px
                }
              }
            )
          })

        } catch (error) {
          console.log("error: ", error);
        }
      },

    },

    computed:{
      ...mapGetters({
      }),

    }

  }
</script>
