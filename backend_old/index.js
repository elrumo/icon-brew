require('dotenv').config();

const axios = require('axios');
const algoliasearch = require('algoliasearch');

const algoliaIndex = process.env.ALGOLIA_INDEX
const algoliaAppId = process.env.ALGOLIA_APP_ID
const algoliaAdminKey = process.env.ALGOLIA_AMDMIN_KEY

const client = algoliasearch(algoliaAppId, algoliaAdminKey);
const index = client.initIndex(algoliaIndex);

async function saveObjects(objects){
  return await index.saveObjects(objects)
}

async function getImg(imageSize, event){
  let icon = await axios.get(`https://api.macosicons.com/api/icon-brews/${event.params.where.id}?populate=*`)
  icon = icon.data.data.attributes
  let iconImage = 'https://api.macosicons.com'+icon[imageSize].data.attributes.url
  return iconImage
}

async function createObjects(event, isCreate){
  const objects =[{
    iconName: event.params.data.iconName,
    objectID: event.params.where.id,
    iconImage18px: await getImg('iconImage18px', event),
    iconImage24px: await getImg('iconImage24px', event),
    tags: event.params.data.tags,
    category: event.params.data.category,
    updatedBy: event.params.data.updatedBy,
    updatedAt: event.params.data.updatedAt,
  }];

  if(isCreate){
    objects[0].createdBy = event.params.data.createdBy
    objects[0].createdAat = event.params.data.createdAat
    objects[0].locale = event.params.data.locale
  }

  return objects
}

async function mainFunc(){

  let event = {params: {
    populate: {
      iconImage24px: true,
      iconImage18px: true,
      tags: ['elias', 'elias2'],
      category: true,
      createdBy: true,
      updatedBy: true,
      localizations: true
    },
    where: { id: 4 },
    data: {
      iconName: 'activityss',
      objectID: 'activity',
      iconImage24px: 25,
      iconImage18px: 26,
      tags: ['elias', 'elias2'],
      category: [],
      updatedBy: 1,
      updatedAt: new Date()
    }
  }}

  // let objects = await createObjects(event, true)
  createObjects(event, true).then((objects) => {
    saveObjects(objects)
  })

}
mainFunc()
