import axios from 'axios'

async function getIconsFromStrapi() {
    let icons = await axios.get('https://api.macosicons.com/api/icon-brews?populate=*')
    let iconsArr = []

    for(let icon in icons.data.data){
      let iconImage = icons.data.data[icon].attributes

      icons.data.data[icon].attributes.iconImage24px = 'https://api.macosicons.com'+iconImage['iconImage24px'].data.attributes.url
      icons.data.data[icon].attributes.iconImage18px = 'https://api.macosicons.com'+iconImage['iconImage18px'].data.attributes.url

      iconsArr.push(icons.data.data[icon].attributes)
    }
    return iconsArr
}

async function getCategoriesFromStrapi() {
    let categories = await axios.get('https://api.macosicons.com/api/icon-brew-categories?populate[0]=icon')
    // let categories = await axios.get('https://api.macosicons.com/api/icon-brew-categories?fields=noOfIcons,categoryName')
    // let categories = await axios.get('https://api.macosicons.com/api/icon-brew-categories?populate=*')

    console.log('getCategoriesFromStrapi');

    let categoriesArr = []

    categories.data.data.sort((a, b) => {
      let fa = a.attributes.categoryName.toLowerCase(),
          fb = b.attributes.categoryName.toLowerCase();
      if (fa < fb) {
        return -1;
      } if (fa > fb) {
        return 1;
      }
    });


    for(let category in categories.data.data){
      category = categories.data.data[category]
      category.attributes.id = category.id;

      let icon = category.attributes.icon.data

      if (icon != null) {
        category.attributes.icon = icon.attributes.iconName;
      } else{
        category.attributes.icon = 'dashboard';
      }

      categoriesArr.push(category.attributes);
    }

    return categoriesArr;
}

async function getHomeData() {
  let homeData = await axios.get('https://api.macosicons.com/api/icon-brew-home?populate=*')
  return homeData.data.data.attributes;
}

async function getSuggestionsHero() {
  let suggestionsHome = await axios.get('https://api.macosicons.com/api/suggestions-home?populate=*')
  return suggestionsHome.data.data.attributes;
}

async function getSinglePage(id) {
    let singelPageData = await axios.get('https://api.macosicons.com/api/'+id+'?populate=*')
    return singelPageData.data.data.attributes;
}

async function getTagsFromStrapi() {

    let icons = await axios.get('https://api.macosicons.com/api/icon-brews?populate=*')
    let iconsArr = []

    for(let icon in icons.data.data){
      let iconImage = icons.data.data[icon].attributes

      icons.data.data[icon].attributes.iconImage24px = 'https://api.macosicons.com'+iconImage['iconImage24px'].data.attributes.url
      icons.data.data[icon].attributes.iconImage18px = 'https://api.macosicons.com'+iconImage['iconImage18px'].data.attributes.url

      iconsArr.push(icons.data.data[icon].attributes)
    }

    return iconsArr
}

export {
    getIconsFromStrapi,
    getCategoriesFromStrapi,
    getTagsFromStrapi,
    getHomeData,
    getSinglePage,
    getSuggestionsHero
}
