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

        <div v-if="iconCategories.length == 0" class="category-side-bar-wrapper">
            <USkeleton
              v-for="n in 17" :key="n+'-placeholder-sidebar'"
              class="h-8 mb-1 w-full"
              :ui="{ rounded: 'rounded-lg' }"
            />
        </div>

        <div v-if="iconCategories.length != 0" class="category-side-bar-wrapper">
          <CategoryButton
            v-for="category in iconCategories"
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
        
        <!-- Infinite scroll trigger - only show when conditions are met -->
        <div 
          ref="loadMoreTrigger" 
          v-if="shouldShowLoadMoreTrigger"
          class="load-more-trigger"
        >
          <div v-if="isLoadingMore" class="loading-more-container">
            <USkeleton
              v-for="n in 10" 
              :key="n+'-loading'"
              class="h-32 w-32 mb-1"
              :ui="{ rounded: 'rounded-lg' }"
            />
          </div>
          <div v-else class="load-more-sentinel">
            <!-- This invisible div triggers the intersection observer -->
          </div>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/myStore'
import { Icon } from '@iconify/vue'

const store = useStore()

// Initial load using store's searchAlgolia function
const { data } = await useLazyAsyncData(
  'searchResult',
  async () => {
    // Use store's searchAlgolia for consistency
    const searchResult = await store.searchAlgolia({
      immediate: true,
      searchValue: '',
      filters: '',
      page: 0,
      hitsPerPage: 80
    });

    console.log("Initial searchResult: ", searchResult);
    
    return { icons: searchResult.hits }
  },
  {
    server: false,
    default: () => ({ icons: [] })
  }
)

await store.fetchIconCategories()

// State for managing additional icons and loading
const isLoadingMore = ref(false)
const allIcons = ref([])
const currentPage = ref(0)
const hasMoreIcons = ref(true)
const heightSideBar = ref('calc(100vh - 12rem)')
const loadMoreTrigger = ref(null)
const observer = ref(null)

const {
  icons,
  selectedIcon,
  selectedCategory,
  searchValue,
  numberOfIcons,
  isFetchingData,
  iconCategories,
  nbPages,
  algoliaPage
} = storeToRefs(store)

// Computed property to determine when to show the load more trigger
const shouldShowLoadMoreTrigger = computed(() => {
  return (
    searchValue.value === '' && // No active search
    hasMoreIcons.value && // More icons available
    iconsToShow.value.length > 0 && // Has some icons to show
    !isFetchingData.value // Not currently fetching from search
  )
})

// Setup intersection observer
const setupIntersectionObserver = () => {
  if (!process.client || !loadMoreTrigger.value) return
  
  // Clean up existing observer
  if (observer.value) {
    observer.value.disconnect()
  }
  
  observer.value = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      // console.log('Intersection observed:', {
      //   isIntersecting: entry.isIntersecting,
      //   isLoadingMore: isLoadingMore.value,
      //   hasMoreIcons: hasMoreIcons.value,
      //   searchValue: searchValue.value,
      //   currentIconsCount: iconsToShow.value.length
      // })
      
      if (entry.isIntersecting && !isLoadingMore.value && hasMoreIcons.value && searchValue.value === '') {
        loadMoreIcons()
      }
    },
    { 
      threshold: 0.1,
      rootMargin: '100px' // Trigger 100px before the element comes into view
    }
  )
  
  observer.value.observe(loadMoreTrigger.value)
}

// Load more icons function
const loadMoreIcons = async () => {
  if (isLoadingMore.value || !hasMoreIcons.value || searchValue.value !== '') {
    console.log('Load more blocked:', {
      isLoadingMore: isLoadingMore.value,
      hasMoreIcons: hasMoreIcons.value,
      searchValue: searchValue.value
    })
    return
  }
  
  // console.log('Loading more icons...')
  isLoadingMore.value = true
  
  try {
    const nextPage = currentPage.value + 1
    const { dedupedFetch } = await import('~/utils/requestDeduplication')
    
    const searchResult = await dedupedFetch('/api/search', {
      method: 'POST',
      body: {
        searchValue: '',
        filters: selectedCategory.value === 'All Icons' ? '' : `categories.categoryName:${selectedCategory.value}`,
        page: nextPage,
        hitsPerPage: 50
      }
    })
    
    // console.log('Load more result:', searchResult)
    
    if (searchResult.hits && searchResult.hits.length > 0) {
      allIcons.value = [...allIcons.value, ...searchResult.hits]
      currentPage.value = nextPage
      // console.log(`Loaded ${searchResult.hits.length} more icons. Total: ${allIcons.value.length}`)
    } else {
      hasMoreIcons.value = false
      console.log('No more icons to load')
    }
  } catch (error) {
    console.error('Error loading more icons:', error)
  } finally {
    isLoadingMore.value = false
  }
}

// Watch for data changes and update allIcons
watch(data, (newData) => {
  if (newData?.icons) {
    allIcons.value = newData.icons
    // console.log('Initial icons loaded:', newData.icons.length)
  }
}, { immediate: true })

// Watch for search value changes to reset infinite scroll
watch(searchValue, async (newValue, oldValue) => {
  console.log('Search value changed:', { newValue, oldValue })
  
  if (newValue === '' && oldValue !== '') {
    // Search cleared - reload initial data using store
    currentPage.value = 0
    hasMoreIcons.value = true
    
    // Reload initial data
    const searchResult = await store.searchAlgolia({
      immediate: true,
      searchValue: '',
      filters: selectedCategory.value === 'All Icons' ? '' : `categories.categoryName:${selectedCategory.value}`,
      page: 0,
      hitsPerPage: 80
    })
    
    allIcons.value = searchResult.hits
  } else if (newValue !== '' && oldValue === '') {
    // Started searching - infinite scroll will be disabled by computed property
    console.log('Search started - infinite scroll disabled')
  }
})

// Watch for category changes to reset infinite scroll
watch(selectedCategory, async (newCategory, oldCategory) => {
  if (newCategory !== oldCategory) {
    console.log('Category changed:', { newCategory, oldCategory })
    currentPage.value = 0
    hasMoreIcons.value = true
    
    // Let the store handle category change, but also update local state
    // The store's setCategory method will call searchAlgolia
    nextTick(() => {
      // After store updates, sync with local state if not searching
      if (searchValue.value === '') {
        allIcons.value = icons.value
      }
    })
  }
})

// Setup intersection observer when the trigger element is available
watch(loadMoreTrigger, (newTrigger) => {
  if (newTrigger && process.client) {
    nextTick(() => {
      setupIntersectionObserver()
    })
  }
}, { immediate: true })

onMounted(() => {
  if (window) {
    let topArea = document.getElementById('topArea')
    if (topArea) {
      const topAreaHeight = topArea.getBoundingClientRect().height
      heightSideBar.value = `calc(100vh - ${topAreaHeight}px - 2rem)`
    }
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

// Data
const categories = computed(() => [
  {
    categoryName: 'All Icons',
    icon: 'dashboard',
    icons: numberOfIcons.value
  }
])

const iconsToShow = computed(() => {
  // console.log('iconsToShow computed - searchValue:', searchValue.value, 'icons.length:', icons.value.length, 'allIcons.length:', allIcons.value.length)
  
  // If there's an active search, show search results from store
  if (searchValue.value !== '') {
    // console.log('Showing search results from store:', icons.value.length)
    return icons.value
  }
  
  // For browsing (no search), always show allIcons which includes infinite scroll results
  // console.log('Showing all loaded icons (browse mode):', allIcons.value.length)
  return allIcons.value
})
</script>

<style scoped>
.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  width: 100%;
}

.load-more-trigger {
  width: 100%;
  padding: 2rem 0;
}

.loading-more-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
}

.load-more-sentinel {
  height: 20px;
  width: 100%;
  /* This is the invisible trigger element */
}
</style>