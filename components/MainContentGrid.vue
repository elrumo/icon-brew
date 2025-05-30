
<template>
  <div
    :class="{
      'main-layout-wrapper': true,
      'main-layout-wrapper-extended': Object.keys(selectedIcon).length > 0,
    }"
  >
    <!-- Sidebar -->
    <div class="sticky-side-bar">
      <div
        class="category-side-bar-wrapper-container gap-md"
        :style="{
          height: heightSideBar,
        }"
      >
          <CategoryButton
            v-for="category in categories"
            :key="category.categoryName"
            :category="category"
            :icons="numberOfIcons"
            :isStatic="true"
          />
        <div class="divider-horizontal w-80 m-all-a opacity-30 desktop-only">‎</div>

        <div v-if="categoriesData.length == 0" class="category-side-bar-wrapper">
            <USkeleton
              v-for="n in 17" :key="n+'-placeholder-sidebar'"
              class="h-8 mb-1 w-full"
              :ui="{ rounded: 'rounded-lg' }"
            />
        </div>

        <div v-if="categoriesData.length != 0" class="category-side-bar-wrapper">
          <CategoryButton
            v-for="category in categoriesData"
            :key="category.categoryName"
            :category="category"
            :active="category.categoryName == selectedCategory"
            :icons="category.noOfIcons != undefined ? category.noOfIcons : 0"
          />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div id="mainContentGrid" class="main-content-wrapper">

      <!-- Loading skeleton for initial load -->
      <div v-if="iconsToShow.length === 0 && searchValue === ''" class="content-area" style="min-height: 100%">
        <USkeleton
            v-for="n in 50" :key="n+'-placeholder'"
            class="h-32 w-32 mb-1"
            :ui="{ rounded: 'rounded-lg' }"
          />
      </div>
      
      <div v-if="iconsToShow.length > 0" class="content-area">
        <div class="icons-grid">
          <IconCard
            v-for="item in iconsToShow"
            :key="item.iconName"
            :icon="{
                name: item.iconName,
                iconImage18px: item.iconImage18px,
                iconImage24px: item.iconImage24px,
                objectID: item.objectID,
                icon: item
              }"
          />
        </div>
        
        <!-- Infinite scroll trigger -->
        <div 
          ref="loadMoreTrigger" 
          v-if="hasMoreIcons && searchValue === ''"
          class="load-more-trigger"
        >
          <USkeleton
            v-if="isLoadingMore"
            v-for="n in 10" 
            :key="n+'-loading'"
            class="h-32 w-32 mb-1"
            :ui="{ rounded: 'rounded-lg' }"
          />
        </div>
      </div>
      
      <!-- Skeleton loading during search -->
      <div 
        v-if="searchValue.length > 0 && isFetchingData && icons.length === 0"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 p-4"
      >
        <USkeleton
          v-for="n in 16" 
          :key="n+'-search-loading'"
          class="h-32 w-32"
          :ui="{ rounded: 'rounded-lg' }"
        />
      </div>
      
      <!-- No icons found message -->
      <p
        class="no-icons-msg"
        v-if="icons.length == 0 && searchValue.length != 0 && !isFetchingData"
      >
        No icons found
      </p>
    </div>

    <!-- Icon details -->
    <!-- <div class="">
      <div class="sticky-side-bar">
        <div class="category-side-bar-wrapper" >
          <IconOptions/>
        </div>
          <IconDetails/>
      </div>
    </div> -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/myStore'

// Use lazy fetch with caching for categories
const {data: categoriesData} = await useLazyFetch('/api/categories', {
  key: 'categories',
  server: false,
  default: () => []
})

// Initial load with smaller batch for faster rendering and caching
const { data } = await useLazyAsyncData(
  'searchResult',
  async () => {
    const { dedupedFetch } = await import('~/utils/requestDeduplication');
    const searchResult = await dedupedFetch('/api/search', {
        method: 'POST',
        body: {
          searchValue: '',
          filters: '',
          page: 0,
          hitsPerPage: 80 // Reduced from 500 to 50 for faster initial load
        }
      });

      console.log("searchResult: ", searchResult);

    // Return icons without base64 conversion for faster initial load
    return {icons: searchResult.hits}
  },
  {
    server: false,
    default: () => ({ icons: [] })
  }
)

// State for managing additional icons and loading
const isLoadingMore = ref(false)
const allIcons = ref([])
const currentPage = ref(0)
const hasMoreIcons = ref(true)
const heightSideBar = ref('calc(100vh - 12rem)')

// Watch for data changes and update allIcons
watch(data, (newData) => {
  if (newData?.icons) {
    allIcons.value = newData.icons
  }
}, { immediate: true })

// Function to convert SVG URL to base64 (moved outside and optimized)
const svgToBase64 = async (url, retries = 2) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const svgText = await response.text();
      return `data:image/svg+xml;base64,${btoa(svgText)}`;
    } catch (error) {
      if (i === retries - 1) {
        console.error(`Failed after ${retries} attempts: ${error} for url: ${url}`);
        return url; // Fallback to original URL
      }
      await new Promise(resolve => setTimeout(resolve, 500 * (i + 1)));
    }
  }
};

// Load more icons function
const loadMoreIcons = async () => {
  if (isLoadingMore.value || !hasMoreIcons.value) return;
  
  isLoadingMore.value = true;
  try {
    const nextPage = currentPage.value + 1;
    const { dedupedFetch } = await import('~/utils/requestDeduplication');
    const searchResult = await dedupedFetch('/api/search', {
      method: 'POST',
      body: {
        searchValue: '',
        filters: '',
        page: nextPage,
        hitsPerPage: 50
      }
    });
    
    if (searchResult.hits.length > 0) {
      allIcons.value = [...allIcons.value, ...searchResult.hits];
      currentPage.value = nextPage;
    } else {
      hasMoreIcons.value = false;
    }
  } catch (error) {
    console.error('Error loading more icons:', error);
  } finally {
    isLoadingMore.value = false;
  }
};

// Intersection observer for infinite scroll
const loadMoreTrigger = ref(null);
onMounted(() => {

  if(window){
    
    let topArea = document.getElementById('topArea')
    if(topArea){
      const topAreaHeight = topArea.getBoundingClientRect().height;
      heightSideBar.value = `calc(100vh - ${topAreaHeight}px - 2rem)`;
    }
  }

  if (process.client && loadMoreTrigger.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreIcons.value) {
          loadMoreIcons();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(loadMoreTrigger.value);
    
    onUnmounted(() => {
      observer.disconnect();
    });
  }
});

// Components
// const IconCard = defineAsyncComponent(() => import('./IconCard.vue'))

// Store
const store = useStore()
const {
  icons,
  selectedIcon,
  selectedCategory,
  searchValue,
  numberOfIcons,
  isFetchingData
} = storeToRefs(store)

// Data
const categories = computed(() => [
  {
    categoryName: 'All Icons',
    icon: 'dashboard',
    icons: numberOfIcons.value
  }
])

const iconsToShow = computed(() => {
  // If there's a search value, show search results from store
  if(searchValue.value != '' && icons.value.length == 0) return []
  if(icons.value.length > 0) return icons.value
  
  // Otherwise show all loaded icons (initial + lazy loaded)
  return allIcons.value
})
</script>

<style scoped>
/* .content-area {
  height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 18px;
} */

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  width: 100%;
}

.load-more-trigger {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
}
</style>
