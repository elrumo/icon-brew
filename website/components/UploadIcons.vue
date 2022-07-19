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

    async mounted(){
      // await this.doesIconExist('iconName', 'academic-book', true);
    },

    methods:{
      ...mapActions({
        setDataToStore: 'store/setDataToStore',
      }),

      async deleteStrapiMedia(mediaId){
        let deleteMedia = await axios.delete(
          'https://api.macosicons.com/api/upload/files/'+mediaId,
          {
            headers: {
              Authorization: process.env.STRAPI_BEARER
            },
          })
        console.log(deleteMedia);
      },

      async doesIconExist(field, value, deleteMedia) {
          let icon = await axios.get('https://api.macosicons.com/api/icon-brews?filters['+field+'][$eq]='+value+'&&populate=*')
          let exists = icon.data.data.length > 0;

          if (deleteMedia && deleteMedia.delete && exists) {
            console.log("icon.data.data[0]: ", icon.data.data[0]);
            if (deleteMedia.media18px && icon.data.data[0].attributes.iconImage18px.data) {
              let mediaId18px = icon.data.data[0].attributes.iconImage18px.data.id
              this.deleteStrapiMedia(mediaId18px)
            }
            if (deleteMedia.media24px && icon.data.data[0].attributes.iconImage24px.data) {
              let mediaId24px = icon.data.data[0].attributes.iconImage24px.data.id
              this.deleteStrapiMedia(mediaId24px)
            }
          }

          return {
            exists: exists,
            icon: icon.data.data[0]
          };
      },

      async uploadData(e){
        const name = this.dataToUpload

        async function createEntry(payload){
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

        async function updateEntry(iconId, payload){
          console.log("iconId: ", iconId);
          const post = await axios.put('https://api.macosicons.com/api/icon-brews/'+iconId,
            payload,
            {
              headers: {
                Authorization: process.env.STRAPI_BEARER
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
            let iconName = file.iconName

            console.log(file.iconImage24px);

            let iconExists = await this.doesIconExist('iconName', iconName,
              {
                delete: file.iconImage24px != undefined || file.iconImage18px != undefined ? true : false,
                media24px: file.iconImage24px == undefined ? false : true,
                media18px: file.iconImage18px == undefined ? false : true
              }
            );

            if (iconExists) {
              let iconId = iconExists.icon.id;
              console.log("iconExists: ", iconExists);

              await updateEntry(iconId, {
                data:{
                  iconName: file.iconName,
                  iconImage18px: file.iconImage18px,
                  iconImage24px: file.iconImage24px
                }
              })

            } else{
              await createEntry({
                data:{
                  iconName: file.iconName,
                  iconImage18px: file.iconImage18px,
                  iconImage24px: file.iconImage24px
                }
              })
            }
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
