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
          :label="'Search ' + numberOfIcons + ' icons'"
          class="w-full shadow-lg"
          :ui="{rounded:'rounded-lg', icon: { trailing: { pointer: '' } } }"
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
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              size="lg"
              class="z-10"
              :padded="false"
              @click="searchValue = ''; getFromAlgolia()"
            />
          </template>
        </UInput>
      </span>

      <UDivider class="desktop-only h-8" orientation="vertical" />

      <!-- Options wrapper -->
      <div class="options-wrapper">
        
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
            class="color-picker  w-fit"
            @dblclick="onColorPickerClick('bg')"
          />
        </div>

        <!-- Size -->
        <USelectMenu
          :options="sizes"
          v-model="size"
          size="lg"
          @change="setIconSize()"
        />

        <!-- Download as -->
        <USelectMenu
          :options="downloadOptions"
          v-model="downloadAs"
          size="lg"
        />

        <div class="flex flex-row gap-2">
          <SvgUploader/>
          <IconifyTester/>
        </div>
        <!-- @change="setDownloadOption()" -->


          <!-- <InputText
            class="p-inputtext-sm weight-input-wrapper"
            type="number"
            id="iconWeight"
            v-model="iconWeight"
            @change="setIconWeight($event)"
          /> -->

      </div>

      <!-- <UDivider class="mobile-only w-8"/> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/myStore'
import IconBrewIcon from '../components/IconBrewIcon.vue'

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
  fetchTotalNoOfRecods,
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
  { label: 'Copy SVG', code: 'copySVG' }
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

// Methods
const scroll = () => {
  const margin = 600
  window.onscroll = (event) => {
    if (!searchBarWrapper.value) return
    
    const bottomOfWindow = Math.ceil(
      document.body.offsetHeight - (window.pageYOffset + window.innerHeight)
    ) < margin

    
    isIntersectingElement.value = (window.pageYOffset || document.documentElement.scrollTop) >= 70
    // console.log("isIntersectingElement.value: ", isIntersectingElement.value)

    console.log("bottomOfWindow: ", bottomOfWindow)
    if (bottomOfWindow && !isFetchingData.value && previousQuery.value.length != 0) {
      store.fetchingData = true
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
  algoliaPage.value = 0
  await searchAlgolia({ appendIcons: false })
}

const handleIntersection = (payload) => {
  const y = payload[0].boundingClientRect.y
  isIntersectingElement.value = y < 120
}

// Lifecycle hooks
onMounted(async () => {
  if (process.client) {
    scroll()
    keyboardEvent()
    try {
      // await searchAlgolia({ appendIcons: false })
      // await fetchIconCategories()
      await fetchTotalNoOfRecods()
      previousQuery.value = icons.value
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
