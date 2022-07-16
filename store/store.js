import axios from 'axios'

import {
  getIconsFromStrapi,
  getCategoriesFromStrapi,
  getHomeData,
  getSinglePage
} from '@/api/strapi';

export const state = () => ({
  icons: [],
  iconCategories: [],
  iconSize: 'iconImage24px',
  homeData: '',
  searchValue: '',
  singlePageData: '',
  aboutPageData: '',
  selectedIcon: {},
  iconWeight: 2,
  iconColour: '#FFFFFF',
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
    let data = await getHomeData();

    try {
      store.commit('setDataToState', {state: 'homeData', data: data});
    } catch (error) {
      console.log("Error fetching learning resources: ", error);
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
      window.scrollTo(0, target-50)
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
    // console.log(payload.target.path);

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

  getSelectedIcon(state) {
    return state.selectedIcon
  },

  getIconWeight(state) {
    return state.iconWeight
  },

  getIconColour(state) {
    return state.iconColour
  },

}
