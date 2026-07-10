import { defineStore } from 'pinia';

// Debounce timeout for search
let searchTimeout;

const VITE_ALGOLIA_APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID;
const VITE_ALGOLIA_SEARCH_KEY = import.meta.env.VITE_ALGOLIA_SEARCH_KEY;
const VITE_ALGOLIA_INDEX = import.meta.env.VITE_ALGOLIA_INDEX;

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    icons: [],
    iconCategories: [],
    jsonData: '',
    numberOfIcons: 0,
    iconSize: 'iconImage24px',
    downloadAs: { label: 'Download .SVG', code: "downloadSVG" },
    homeData: {
      "title": "IconBrew", "subtitle": "A free and open source icon pack. With 280+ icons and new ones being added weekly.", "createdAt": "2022-03-13T15:52:01.596Z", "updatedAt": "2022-07-16T20:12:28.849Z", "publishedAt": "2022-03-13T15:52:02.867Z", "button": "Download all", "primaryButtonIsOutline": true, "buttonUrl": "https://www.figma.com/community/file/1121752926262800605", "secondaryButton": "Donate", "secondaryButtonIsOutline": false, "secondaryButtonUrl": "https://www.paypal.com/donate/?hosted_button_id=SLDP6A7FLN6S6", "image": { "data": { "id": 47, "attributes": { "name": "IconBrew-large.png", "alternativeText": "IconBrew-large.png", "caption": "IconBrew-large.png", "width": 1024, "height": 1024, "formats": { "large": { "ext": ".png", "url": "/uploads/large_Icon_Brew_large_e7890b6e4f.png", "hash": "large_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "large_IconBrew-large.png", "path": null, "size": 846.09, "width": 1000, "height": 1000 }, "small": { "ext": ".png", "url": "/uploads/small_Icon_Brew_large_e7890b6e4f.png", "hash": "small_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "small_IconBrew-large.png", "path": null, "size": 239.08, "width": 500, "height": 500 }, "medium": { "ext": ".png", "url": "/uploads/medium_Icon_Brew_large_e7890b6e4f.png", "hash": "medium_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "medium_IconBrew-large.png", "path": null, "size": 515.29, "width": 750, "height": 750 }, "thumbnail": { "ext": ".png", "url": "/uploads/thumbnail_Icon_Brew_large_e7890b6e4f.png", "hash": "thumbnail_Icon_Brew_large_e7890b6e4f", "mime": "image/png", "name": "thumbnail_IconBrew-large.png", "path": null, "size": 32.27, "width": 156, "height": 156 } }, "hash": "Icon_Brew_large_e7890b6e4f", "ext": ".png", "mime": "image/png", "size": 168.11, "url": "/uploads/Icon_Brew_large_e7890b6e4f.png", "previewUrl": null, "provider": "local", "provider_metadata": null, "createdAt": "2022-03-13T15:52:45.146Z", "updatedAt": "2022-03-13T15:52:45.146Z" } } }
    },
    suggestionsHero: {},
    suggestions: {},
    selectedCategory: 'All Icons',
    searchValue: '',
    searchFilters: '',
    isFetchingData: false,
    previousQuery: [],
    singlePageData: '',
    aboutPageData: '',

    hitsPerPage: 40,
    algoliaPage: 0,
    nbPages: 0,

    selectedIcon: {},
    iconSuggestionForm: {
      isValid: false,
      formData: {},
    },
    suggestedIconName: '',
    suggestedIconCategory: '',
    suggestedIconUserName: '',
    suggestedIconEmail: '',
    suggestedIconNotes: '',
    iconWeight: 2,
    iconColour: "#FFFFFF",
    bgColour: "#1F262F",
  }),

  actions: {
    setIcons(icons) {
      this.icons = icons;
    },
    clearIcons(icons) {
      this.icons = [];
    },
    addIcons(icons) {
      icons.forEach((item) => {
        this.icons.push(item);
      });
    },
    addOneToPage() {
      let algoliaPage = this.algoliaPage;
      this.algoliaPage = algoliaPage + 1;
    },
    
    async fetchIcons() {
      let icons = await getIconsFromStrapi();
      try {
        this.icons = icons;
      } catch (error) {
        console.log('Error fetching learning resources: ', error);
      }
    },
    async fetchHomeData() {
      return
      try {
        let data = await getHomeData();
        this.homeData = data;
      } catch (error) {
        console.log('Error fetching learning resources: ', error);
      }
    },
    async fetchSuggestions() {
      try {
        let data = await getSuggestions();
        this.suggestions = data;
      } catch (error) {
        console.log('Error fetching getSuggestions: ', error);
      }
    },
    async fetchSuggestionsHero() {
      try {
        let data = await getSuggestionsHero();
        this.suggestionsHero = data;
      } catch (error) {
        console.log('Error fetching suggestionsHero: ', error);
      }
    },

    async fetchSinglePage(payload) {
      let data = await getSinglePage(payload.id);
      console.log(payload.state);
      try {
        this[payload.state] = data;
      } catch (error) {
        console.log('Error fetching learning resources: ', error);
      }
    },

    async setCategory(payload) {
      let category = payload.category;
      let filters = 'categories.categoryName:' + category;
      let selectedCategory = this.selectedCategory;
      if (category === selectedCategory) {
        return;
      }
      if (category == 'All Icons') {
        filters = '';
        this.hitsPerPage = 40;
      } else {
        this.hitsPerPage = 500;
      }
      let statesToChange = [
        { state: 'selectedCategory', data: category },
        { state: 'searchFilters', data: filters },
        { state: 'algoliaPage', data: 0 },
      ];
      statesToChange.forEach((state) => {
        this[state.state] = state.data;
      });
      this.searchAlgolia({ appendIcons: false, immediate: true });
      this.scrollTo(460);
    },

    async searchAlgolia(payload = {}) {
      // For immediate actions like category changes or infinite scroll, don't debounce
      const shouldDebounce = !payload.immediate;
      const delay = shouldDebounce ? 300 : 0;
      
      console.log('searchAlgolia called with:', payload);
    
      // Clear previous timeout only if we're debouncing
      if (shouldDebounce) {
        clearTimeout(searchTimeout);
      }
      
      // Set fetching state immediately to prevent "No icons found" message
      this.isFetchingData = true;
    
      const executeSearch = async () => {
        const {
          appendIcons = false,
          page = null, // Allow override of page
          hitsPerPage = null, // Allow override of hitsPerPage
          searchValue = null, // Allow override of search value
          filters = null // Allow override of filters
        } = payload;
    
        // Use provided values or fall back to store state
        const query = searchValue !== null ? searchValue : this.searchValue;
        const searchFilters = filters !== null ? filters : this.searchFilters;
        const searchPage = page !== null ? page : this.algoliaPage;
        const getNumberOfIcons = payload.getNumberOfIcons !== null? payload.getNumberOfIcons : false;
        
        // Determine hitsPerPage based on context
        let searchHitsPerPage;
        if (hitsPerPage !== null) {
          searchHitsPerPage = hitsPerPage;
        } else if (this.selectedCategory !== 'All Icons') {
          searchHitsPerPage = 500;
        } else {
          searchHitsPerPage = query ? 10 : 80; // Different defaults for search vs browse
        }
    
        const selectedCategory = this.selectedCategory;
        const iconCategories = this.iconCategories;
        let noOfIcons = this.numberOfIcons;
    
        // Fetch categories if not loaded
        if (iconCategories.length === 0) {
          await this.fetchIconCategories();
        }
    
        // Update icon count for specific category
        if (selectedCategory !== 'All Icons') {
          const categoryData = iconCategories.find(category => 
            category.categoryName === selectedCategory
          );
          if (categoryData) {
            noOfIcons = categoryData.noOfIcons;
          }
        }
    
        try {
          const { dedupedFetch } = await import('~/utils/requestDeduplication');

          const body = {
            searchValue: query,
            filters: searchFilters,
            page: searchPage,
            getNumberOfIcons, 
            hitsPerPage: searchHitsPerPage
          };

          console.log('body: ', body)
          
          // console.log('searchAlgolia request body:', body);
          
          const searchResult = await dedupedFetch('/api/search', {
            method: 'POST',
            body
          });
    
          // console.log('searchAlgolia response:', searchResult);
    
          // Update store state
          this.algoliaPage = searchResult.page || searchPage;
          this.nbPages = searchResult.nbPages || 0;
          this.previousQuery = searchResult.hits || [];
    
          // Handle icons based on append mode
          if (appendIcons && searchResult.hits) {
            this.addIcons(searchResult.hits);
          } else if (searchResult.hits) {
            this.icons = searchResult.hits;
          }
    
          // Return the result for external use
          return {
            hits: searchResult.hits || [],
            page: searchResult.page || searchPage,
            nbPages: searchResult.nbPages || 0,
            nbHits: searchResult.nbHits || 0
          };
          
        } catch (error) {
          console.error('Error searching icons:', error);
          this.icons = [];
          return {
            hits: [],
            page: 0,
            nbPages: 0,
            nbHits: 0
          };
        } finally {
          this.isFetchingData = false;
        }
      };
    
      // If immediate, execute right away
      if (!shouldDebounce) {
        return await executeSearch();
      }
    
      // Otherwise, use debounced execution
      return new Promise((resolve, reject) => {
        searchTimeout = setTimeout(async () => {
          try {
            const result = await executeSearch();
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, delay);
      });
    },

    async fetchIconCategories() {
      try {

        console.log('fetchIconCategories called');

        // Only fetch if not already loaded in store
        if (this.iconCategories.length > 0) {
          return this.iconCategories;
        }
        
        // Check localStorage cache first
        const { getCache, setCache, CACHE_KEYS } = useCache();
        const cached = getCache(CACHE_KEYS.CATEGORIES);
        
        if (cached) {
          this.iconCategories = cached;
          return cached;
        }
        
        try {
          const { dedupedFetch } = await import('~/utils/requestDeduplication');
          const categories = await dedupedFetch('/api/categories');
          this.iconCategories = categories;
          
          // Cache the results
          setCache(CACHE_KEYS.CATEGORIES, categories);
          
          return categories;
        } catch (error) {
          console.error('Error fetching categories:', error);
          return [];
        }
      } catch (error) {
        console.error('Error fetching icon categories:', error);
        return []; 
      }
    },

    // async addSuggestion(payload) {
    //   let iconName = this.suggestedIconName + '/';
    //   let suggestedBy = this.suggestedIconUserName + '/';
    //   let email = this.suggestedIconEmail + '/';
    //   let notes =
    //     this.suggestedIconNotes.length == 0 ? '-/' : this.suggestedIconNotes + '/';
    //   let category = this.suggestedIconCategory.code;
    //   try {
    //     let postUrl =
    //       'https://api.macosicons.com/api/icon-suggestions/create-suggestion/' +
    //       iconName +
    //       notes +
    //       suggestedBy +
    //       email +
    //       category;
    //     console.log('postUrl: ', postUrl);
    //     await axios.post(postUrl);
    //     await axios.post(
    //       'https://api.macosicons.com/api/email/elrumo97@me.com/1/elias'
    //     );
    //   } catch (error) {
    //     console.log('Error adding suggestion: ', error);
    //   }
    // },

    // async addVote(payload) {
    //   let suggestions = this.suggestions;
    //   let suggestion = suggestions.filter((suggestion) => {
    //     return suggestion.id === payload.id;
    //   })[0];
    //   let suggestionIndex = suggestions.indexOf(suggestion);
    //   let votes;
    //   if (payload.operation === 'add') {
    //     votes = suggestions[suggestionIndex].attributes.votes + 1;
    //   } else {
    //     votes = suggestions[suggestionIndex].attributes.votes - 1;
    //   }
    //   localStorage.setItem('iconVoted-' + payload.id, JSON.stringify({ id: payload.id, vote: payload.localStorage }));
    //   await axios.get('https://api.macosicons.com/api/icon-suggestions/' + payload.operation + '-vote-count/' + payload.id);
    //   let selectedSuggestion = JSON.parse(JSON.stringify(suggestions));
    //   selectedSuggestion[suggestionIndex].attributes.votes = votes;

    //   this.suggestions = selectedSuggestion;
    // },

    scrollTo(target) {
      if (typeof target == 'number') {
        window.scrollTo(0, target - 80);
      } else if (typeof target == 'object') {
        let y = target.getBoundingClientRect().y;
        window.scrollTo(0, y - 50);
      }
    },

    setSearchValue(value) {
      console.log('setSearchValue', value);
    },

    async downloadImage(payload) {
      const iconSize = this.iconSize;
      // this.selectedIcon = payload.id;
      let url =
        iconSize == 'iconImage18px'
          ? payload.url.iconImage18px
          : payload.url.iconImage24px;
      let name = payload.name + this.iconSize + '.svg';
      console.log(url);

      console.log(this.downloadAs.code);

      switch (this.downloadAs.code) {
        case 'downloadSVG':
          fetch(url)
            .then((resp) => resp.blob())
            .then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              a.download = name;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
              console.log(payload.id);
              // axios.get(
              //   'https://api.macosicons.com/api/icon-brews/add-download-count/' +
              //   payload.id
              // );
            })
            .catch(() => alert('An error sorry'));
          break;
          
        case 'copyName':
          navigator.clipboard.writeText(payload.name);
          // const { $toast } = useNuxtApp();
          // $toast.add({
          //   severity: 'success',
          //   summary: 'Copied!',
          //   detail: `Icon name "${payload.name}" copied to clipboard`,
          //   life: 3000
          // });
          break;

        case 'copySVG':
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const svgText = await response.text();
          console.log('svgText: ', svgText)
          navigator.clipboard.writeText(svgText);
          // let iconSvg = document.getElementById(payload.name);
          // console.log(payload.name);
          // console.log('iconSvg: ', iconSvg)
          // let iconName = payload.name.replaceAll('-', ' ');
          // iconName = iconName.replace(/^\w/, (c) => c.toUpperCase());
          break;
        case 'downloadPNG':
          break;
        default:
          break;
      }
    },
  },
});
