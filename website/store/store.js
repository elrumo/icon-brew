import axios from 'axios'
import algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

import {
  getIconsFromStrapi,
  getCategoriesFromStrapi,
  getHomeData,
  getSinglePage,
  getSuggestionsHero,
  getSuggestions
} from '@/api/strapi';

export const state = () => ({
  icons: [],
  iconCategories: [],
  totalNoOfIcons: 0,
  iconSize: 'iconImage24px',
  downloadAs: 'downloadSVG',
  homeData: {
    "title": "IconBrew", "subtitle": "A free and open source icon pack. With 280+ icons and new ones being added weekly.", "createdAt": "2022-03-13T15:52:01.596Z", "updatedAt": "2022-07-16T20:12:28.849Z", "publishedAt": "2022-03-13T15:52:02.867Z", "button": "Download all", "buttonUrl": "https://www.figma.com/community/file/1121752926262800605", "secondaryButton": "Donate", "secondaryButtonUrl": "https://www.paypal.com/donate/?hosted_button_id=SLDP6A7FLN6S6", "image": { "data": { "id": 47, "attributes": { "name": "IconBrew-large.png", "alternativeText": "IconBrew-large.png", "caption": "IconBrew-large.png", "width": 1024, "height": 1024, "formats": { "large": { "ext": ".png", "url": "/uploads/large_Icon_Brew_large_e7890b6e4f.png", "hash": "large_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "large_IconBrew-large.png", "path": null, "size": 846.09, "width": 1000, "height": 1000 }, "small": { "ext": ".png", "url": "/uploads/small_Icon_Brew_large_e7890b6e4f.png", "hash": "small_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "small_IconBrew-large.png", "path": null, "size": 239.08, "width": 500, "height": 500 }, "medium": { "ext": ".png", "url": "/uploads/medium_Icon_Brew_large_e7890b6e4f.png", "hash": "medium_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "medium_IconBrew-large.png", "path": null, "size": 515.29, "width": 750, "height": 750 }, "thumbnail": { "ext": ".png", "url": "/uploads/thumbnail_Icon_Brew_large_e7890b6e4f.png", "hash": "thumbnail_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "thumbnail_IconBrew-large.png", "path": null, "size": 32.27, "width": 156, "height": 156 } }, "hash": "Icon_Brew_large_e7890b6e4f", "ext": ".png", "mime": "image/png", "size": 168.11, "url": "/uploads/Icon_Brew_large_e7890b6e4f.png", "previewUrl": null, "provider": "local", "provider_metadata": null, "createdAt": "2022-03-13T15:52:45.146Z", "updatedAt": "2022-03-13T15:52:45.146Z" } } }
  },
  suggestionsHero: {
    "title": "Missing an icon?", "subtitle": "Is there an icon you’d like to see on the site? Suggest it, or if somoene already has, upvote it!.", "createdAt": "2022-03-13T15:52:01.596Z", "updatedAt": "2022-07-16T20:12:28.849Z", "publishedAt": "2022-03-13T15:52:02.867Z", "button": "Suggest an icon", "buttonUrl": "https://www.figma.com/community/file/1121752926262800605", "primaryButtonIcon": "pi-download", "primaryButtonIsOutline": false, "secondaryButton": "", "secondaryButtonUrl": "", "secondaryButtonIcon": "", "secondaryButtonIsOutline": true, "image": { "data": { "id": 47, "attributes": { "name": "IconBrew-large.png", "alternativeText": "IconBrew-large.png", "caption": "IconBrew-large.png", "width": 1024, "height": 1024, "formats": { "large": { "ext": ".png", "url": "/uploads/large_Icon_Brew_large_e7890b6e4f.png", "hash": "large_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "large_IconBrew-large.png", "path": null, "size": 846.09, "width": 1000, "height": 1000 }, "small": { "ext": ".png", "url": "/uploads/small_Icon_Brew_large_e7890b6e4f.png", "hash": "small_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "small_IconBrew-large.png", "path": null, "size": 239.08, "width": 500, "height": 500 }, "medium": { "ext": ".png", "url": "/uploads/medium_Icon_Brew_large_e7890b6e4f.png", "hash": "medium_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "medium_IconBrew-large.png", "path": null, "size": 515.29, "width": 750, "height": 750 }, "thumbnail": { "ext": ".png", "url": "/uploads/thumbnail_Icon_Brew_large_e7890b6e4f.png", "hash": "thumbnail_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "thumbnail_IconBrew-large.png", "path": null, "size": 32.27, "width": 156, "height": 156 } }, "hash": "Icon_Brew_large_e7890b6e4f", "ext": ".png", "mime": "image/png", "size": 168.11, "url": "/uploads/Icon_Brew_large_e7890b6e4f.png", "previewUrl": null, "provider": "local", "provider_metadata": null, "createdAt": "2022-03-13T15:52:45.146Z", "updatedAt": "2022-03-13T15:52:45.146Z" } } }
  },
  suggestions:{},
  selectedCategory: 'All Icons',

  searchValue: '',
  hitsPerPage: 40,
  algoliaPage: 0,
  searchFilters: '',
  isFetchingData: false,
  previousQuery: [],

  singlePageData: '',
  aboutPageData: '',
  selectedIcon: {},

  iconWeight: 2,
  iconColour: '#FFFFFF',
  bgColour: '#1F262F'
})

export const mutations = {

  setDataToState(store, payload){
    store[payload.state] = payload.data;
  },

  addDataToState(store, payload){
    payload.data.forEach(item => {
      store[payload.state].push(item);
    });
  },

}

export const actions = {

  setDataToStore(store, data){
    store.commit('setDataToState', {state: data.state, data: data.data});
  },


  setIcons(store, icons){
    store.commit('setDataToState', {state: 'icons', data: icons});
  },

  clearIcons(store, icons){
    store.commit('setDataToState', {state: 'icons', data: []});
  },

  addIcons(store, icons){
    store.commit('addDataToState', {state: 'icons', data: icons});
  },

  addOneToPage(store){
    let algoliaPage = store.state.algoliaPage;
    store.commit('setDataToState', {state: 'algoliaPage', data: algoliaPage+1});
  },

  async fetchIcons(store){
    let icons = await getIconsFromStrapi();

    console.log(icons);

    try {
      store.commit('setDataToState', {arr: 'icons', data: icons})
    } catch (error) {
      console.log("Error fetching learning resources: ", error);
    }
  },

  async fetchHomeData(store){
    try {
      let data = await getHomeData();
      store.commit('setDataToState', {state: 'homeData', data: data});
    } catch (error) {
      console.log("Error fetching learning resources: ", error);
    }
  },

  async fetchSuggestions(store){
    try {
      let data = await getSuggestions();
      store.commit('setDataToState', {state: 'suggestions', data: data});
    } catch (error) {
      console.log("Error fetching getSuggestions: ", error);
    }
  },

  async fetchSuggestionsHero(store){
    try {
      let data = await getSuggestionsHero();
      store.commit('setDataToState', {state: 'suggestionsHero', data: data});
    } catch (error) {
      console.log("Error fetching suggestionsHero: ", error);
    }
  },

  async fetchSinglePage(store, payload){
    let data = await getSinglePage(payload.id);
    console.log(payload.state);
    try {
      store.commit('setDataToState', {state: payload.state, data: data});
    } catch (error) {
      console.log("Error fetching learning resources: ", error);
    }
  },

  async setCategory(store, payload){
    let category = payload.category;
    let filters = 'categories.categoryName:' + category;
    let selectedCategory = store.state.selectedCategory;

    if(category === selectedCategory) return;
    if(category == "All Icons"){
      filters = '';
      store.dispatch('setDataToState', {state: 'hitsPerPage', data: 40});
    } else{
      store.dispatch('setDataToState', {state: 'hitsPerPage', data: 500});
    }

    let statesToChange = [
      {state: 'selectedCategory', data: category},
      {state: 'searchFilters', data: filters},
      {state: 'searchFilters', data: filters},
      {state: 'algoliaPage', data: 0}
    ]

    statesToChange.forEach(state => {
      store.dispatch('setDataToState', {state: state.state, data: state.data});
    });

    store.dispatch('searchAlgolia', {appendIcons: false});
    store.dispatch('scrollTo', 460);
  },

  async searchAlgolia(store, payload){
    store.dispatch('setDataToState', {state: 'isFetchingData', data: true});

    let appendIcons = payload.appendIcons;
    let query = store.state.searchValue;
    let filters = store.state.searchFilters;
    let hitsPerPage = store.state.hitsPerPage;
    let page = store.state.algoliaPage;
    let selectedCategory = store.state.selectedCategory;
    let iconCategories = store.state.iconCategories;
    let noOfIcons = store.state.totalNoOfIcons;

    if(selectedCategory != "All Icons"){
      noOfIcons = iconCategories.filter(category => {
        return category.categoryName === selectedCategory
      })[0].noOfIcons;
    }

    const searchResult = await index.search(query, {
      facetFilters: [filters],
      page: page,
      hitsPerPage: hitsPerPage,
      attributesToRetrieve: ['iconName', 'iconImage18px', 'iconImage24px', 'objectID', 'downloads'],
      attributesToHighlight: null,
    });

    store.dispatch('setDataToState', {state: 'isFetchingData', data: false});
    store.dispatch('setDataToState', {state: 'previousQuery', data: searchResult.hits});

    if(appendIcons) store.dispatch('addIcons', searchResult.hits);
    if(!appendIcons) store.dispatch('setIcons', searchResult.hits);
  },

  async fetchTotalNoOfRecods(store){
    const noOfRecords = await index.search('', {
      hitsPerPage: 0,
      attributesToRetrieve: null,
      attributesToHighlight: null,
      analytics: false
    });

    this.totalNoOfIcons = noOfRecords.nbHits;
    store.dispatch('setDataToState', {state: 'totalNoOfIcons', data: this.totalNoOfIcons});
  },

  async fetchIconCategories(store){
    let iconCategories = await getCategoriesFromStrapi();
    try {
      store.commit('setDataToState', {state: 'iconCategories', data: iconCategories})
    } catch (error) {
      console.log("Error fetching icon categories: ", error);
    }
  },

  setDataToState(store, payload){
    store.commit('setDataToState', {state: payload.state, data: payload.data})
  },

  scrollTo(store, target) {
    if (typeof target == 'number') {
      window.scrollTo(0, target-80)
    } else if (typeof target == 'object') {
      let y = target.getBoundingClientRect().y
      window.scrollTo(0, y-50)
    }
  },

  setSearchValue(store, value) {
    console.log('setSearchValue', value);
  },

  downloadImage(store, payload){
    const iconSize = store.state.iconSize
    let url = iconSize == 'iconImage18px' ? payload.url.iconImage18px : payload.url.iconImage24px
    let name = payload.name + store.state.iconSize +'.svg';;

    console.log(url);

    switch (store.state.downloadAs) {
      case 'downloadSVG':
        fetch(url)
          .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

                axios.get('https://api.macosicons.com/api/icon-brews/add-download-count/'+payload.id)
            })
            .catch(() => alert('An error sorry'));
        break

      case 'copySVG':
        let iconSvg = document.getElementById(payload.name)

        navigator.clipboard.writeText(iconSvg.outerHTML);

        let iconName = payload.name.replaceAll('-', ' ')
        iconName = iconName.replace(/^\w/, (c) => c.toUpperCase());

        this._vm.$toast.add({
          severity:'success',
          summary: iconName,
          detail: 'copied as SVG',
          group: 'iconDownload',
          life: 3000
        });

        break;

      case 'downloadPNG':
        // svgExport.downloadPng("<svg id=\"mysvg\"></svg>", "chart title name", {
        //   width: 200,
        //   height: 200,
        // });
        break

      default:
        break;
    }

  },

  getState(store, payload) {
    return store.state[payload.state]
  }

}

export const getters = {

  getIcons(state) {
    return state.icons;
  },

  getIconCategories(state) {
    return state.iconCategories;
  },

  iconSize(state) {
    return state.iconSize;
  },

  getHomeData(state) {
    return state.homeData
  },

  getSuggestionsHero(state) {
    return state.suggestionsHero
  },

  getIconSuggestions(state) {
    return state.suggestions
  },

  getSelectedIcon(state) {
    return state.selectedIcon
  },

  getIconWeight(state) {
    return state.iconWeight
  },

  getIconColour(state) {
    return state.iconColour;
  },

  getNumberOfIcons(state) {
    return state.totalNoOfIcons;
  },

  getSelectedCategory(state) {
    return state.selectedCategory;
  },

  getSearchValue(state) {
    return state.searchValue;
  },

  getIsFetchingData(state) {
    return state.isFetchingData;
  },

  getAlgoliaPage(state) {
    return state.algoliaPage;
  },

  getPreviousQuery(state) {
    return state.previousQuery;
  },

}
