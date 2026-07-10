<template>
  <div
    ref="searchBarWrapper"
    :class="{
      'search-bar-container': true,
      'shadow-xl': isIntersectingElement,
    }"
  >
    <div
      :class="{
        'search-bar-wrapper': true,
      }"
    >
      <!-- Search bar -->
      <span class="input-search">
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          id="searchBar"
          v-model="searchValue"
          :placeholder="'Search ' + numberOfIcons + ' icons'"
          class="w-full shadow-lg"
          :ui="{ base: 'bg-gray-200 dark:bg-gray-800/50 rounded-lg' }"
          size="lg"
        >
          <template #trailing>
            <a
              v-if="searchValue.length != 0"
              href="https://www.algolia.com/"
              target="_blank"
              :class="{
                'searchByAlgolia': true,
                'movedBySearch': searchValue.length != 0
              }"
            >
              <img
                :src="searchByAlgolia"
                alt="Search by Algolia"
              />
            </a>

            <UButton
              v-show="searchValue !== ''"
              color="neutral"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              size="lg"
              class="z-10 p-0"
              @click="searchValue = ''; getFromAlgolia()"
            />
          </template>
        </UInput>
      </span>

      <USeparator class="desktop-only h-8" orientation="vertical" />

      <!-- Desktop Options wrapper -->
      <div class="options-wrapper desktop-only">
        <!-- Color picker -->
        <div class="flex flex-row gap-2">
          <input
            type="color"
            id="colorPicker"
            v-model="iconColour"
            class="color-picker w-fit"
            @dblclick="onColorPickerClick('icon')"
          />

          <!-- Color picker BG -->
          <input
            type="color"
            id="colorPickerBG"
            v-model="bgColour"
            class="color-picker w-fit"
            @dblclick="onColorPickerClick('bg')"
          />
        </div>

        <!-- Size -->
        <USelectMenu
          :items="sizes"
          v-model="size"
          size="lg"
        />

        <!-- Download as -->
        <USelectMenu
          :items="downloadOptions"
          v-model="downloadAs"
          size="lg"
        />

        <div class="flex flex-row gap-2">
          <SvgUploader/>
          <IconifyTester/>
          <!-- <UploadIcons/> -->
        </div>
      </div>

      <!-- Mobile Options Popover -->
      <div class="mobile-only">
        <UPopover>
          <UButton
            color="neutral"
            variant="outline"
            label="Options"
            trailing-icon="i-heroicons-chevron-down-20-solid"
            size="lg"
          />

          <template #content>
            <div class="p-4 space-y-4 w-64">
              <!-- Color picker -->
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Colors</label>
                <div class="flex flex-row gap-2">
                  <div class="flex flex-col items-center gap-1">
                    <input
                      type="color"
                      id="colorPickerMobile"
                      v-model="iconColour"
                      class="color-picker w-8 h-8"
                      @dblclick="onColorPickerClick('icon')"
                    />
                    <span class="text-xs text-gray-500">Icon</span>
                  </div>
                  <div class="flex flex-col items-center gap-1">
                    <input
                      type="color"
                      id="colorPickerBGMobile"
                      v-model="bgColour"
                      class="color-picker w-8 h-8"
                      @dblclick="onColorPickerClick('bg')"
                    />
                    <span class="text-xs text-gray-500">Background</span>
                  </div>
                </div>
              </div>

              <!-- Size -->
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Size</label>
                <USelectMenu
                  :items="sizes"
                  v-model="size"
                  size="lg"
                  class="w-full"
                />
              </div>

              <!-- Download as -->
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Download Format</label>
                <USelectMenu
                  :items="downloadOptions"
                  v-model="downloadAs"
                  size="lg"
                  class="w-full"
                />
              </div>

              <!-- Additional Tools -->
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Tools</label>
                <div class="flex flex-col gap-2">
                  <SvgUploader showLabel/>
                  <IconifyTester showLabel/>
                </div>
              </div>
            </div>
          </template>
        </UPopover>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/myStore'

const route = useRoute()

// Props
defineProps({
  icon: {}
})

// Store setup
const store = useStore()
const {
  searchValue,
  algoliaPage,
  icons,
  previousQuery,
  isFetchingData,
  iconColour,
  bgColour,
  iconWeight,
  iconSize,
  downloadAs,
  numberOfIcons
} = storeToRefs(store)

const {
  fetchIconCategories,
  addOneToPage,
  searchAlgolia
} = store

// Reactive state
const searchByAlgolia = ref('search-by-algolia.svg')
const isIntersectingElement = ref(false)
const searchBarWrapper = ref(null)

const downloadOptions = ref([
  { label: 'Download .SVG', code: 'downloadSVG' },
  { label: 'Copy SVG', code: 'copySVG' },
  { label: 'Copy Name', code: 'copyName' }
])

const size = ref({ label: '24px', code: 'iconImage24px' })
const sizes = ref([
  { label: '18px', code: 'iconImage18px' },
  { label: '24px', code: 'iconImage24px' }
])

// Debounce utility function
const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// Watchers
watch(searchValue, debounce(() => {
  getFromAlgolia();
}, 100))

watch(iconColour, debounce(() => {
  setIconColour()
}, 20))

watch(bgColour, debounce(() => {
  setBgColour()
}, 20))

watch(size, () => {
  setIconSize()
})

// Methods
const scroll = () => {
  const margin = 600
  window.onscroll = (event) => {
    if (!searchBarWrapper.value) return
    
    const bottomOfWindow = Math.ceil(
      document.body.offsetHeight - (window.pageYOffset + window.innerHeight)
    ) < margin

    isIntersectingElement.value = (window.pageYOffset || document.documentElement.scrollTop) >= 70

    // Fix: Check if we have icons and are not currently searching
    // Only trigger infinite scroll when there's no active search (searchValue is empty)
    const hasIcons = icons.value.length > 0
    const noActiveSearch = searchValue.value === ''
    const notCurrentlyFetching = !isFetchingData.value
    
    if (bottomOfWindow && hasIcons && noActiveSearch && notCurrentlyFetching) {
      console.log('Triggering infinite scroll - loading more icons')
      isFetchingData.value = true
      addOneToPage()
      searchAlgolia({ appendIcons: true })
    }
  }
}

const setIconColour = () => {
  const colour = iconColour.value.replace('#', '')
  const contentArea = document.querySelector('.content-area')
  contentArea.style.color = '#' + colour
}

const setBgColour = () => {
  const colour = bgColour.value.replace('#', '')
  const contentArea = document.querySelectorAll('.icon-card-wrapper')
  contentArea.forEach((el) => {
    el.style.backgroundColor = '#' + colour
  })
}

const onColorPickerClick = (picker) => {
  if (picker == 'bg') {
    bgColour.value = '#1C00ff00'
    setBgColour()
  } else {
    iconColour.value = '#FFFFFF'
    setIconColour()
  }
}

const setIconWeight = (e) => {
  const weight = e.target.value
  iconWeight.value = weight
}

const setIconSize = () => {
  const newSize = size.value.code
  iconSize.value = newSize
}

const keyboardEvent = () => {
  document.addEventListener('keydown', (event) => {
    const isNotCmd =
      event.getModifierState('Meta') ||
      event.key == 'Alt' ||
      event.key == 'Control' ||
      event.key == 'CapsLock' ||
      event.key == 'Backspace' ||
      event.key == 'Shift' ||
      event.key == 'Enter' ||
      event.key == 'Tab' ||
      event.key == ' ' ||
      document.activeElement.tagName == 'INPUT' ||
      route.name != 'index'

    if (!isNotCmd) {
      document.getElementById('searchBar').focus()
    }
  })
}

const getFromAlgolia = async () => {
  // Reset pagination when starting a new search
  store.algoliaPage = 0
  
  // Use the store's searchAlgolia function with immediate flag for search
  await store.searchAlgolia({ 
    appendIcons: false,
    immediate: true // Don't debounce when user explicitly searches
  })
}

const handleIntersection = (payload) => {
  const y = payload[0].boundingClientRect.y
  isIntersectingElement.value = y < 120
}

// Lifecycle hooks
onMounted(async () => {
  if (import.meta.client) {
    keyboardEvent()
  }
})
</script>
