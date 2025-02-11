
<template>
  <div
    :class="{
      'main-layout-wrapper': true,
      'main-layout-wrapper-extended': Object.keys(selectedIcon).length > 0,
    }"
  >
    <!-- Sidebar -->
    <div class="">
      <div class="sticky-side-bar">
        <div class="category-side-bar-wrapper-container gap-md">
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
    </div>

    <!-- Main content -->
    <div id="mainContentGrid" class="content-card-secondary main-content-wrapper">

      <!-- Skeleton placeholder -->
      <!-- <div v-if="icons.length == 0 && searchValue.length == 0" class="content-area" style="min-height: 100%">
        <USkeleton
            v-for="n in 62" :key="n+'-placeholder'"
            class="h-full w-full max-w-32 max-h-32 mb-1"
            :ui="{ rounded: 'rounded-lg' }"
          />
      </div> -->
      <div v-if="data?.icons?.length > 0 || (icons.length > 0 && searchValue != '')" class="content-area">
      <!-- <div v-if="icons.length != 0" class="content-area">
        v-for="icon in icons.length != 0 ? icons : data.icons" -->
        <IconCard
          v-for="icon in iconsToShow"
          :key="icon.iconName"
          :icon="{
              name: icon.iconName,
              iconImage18px: icon.iconImage18px,
              iconImage24px: icon.iconImage24px,
              objectID: icon.objectID,
              icon: icon
            }"
        />
      </div>
      <p
        class="no-icons-msg"
        v-if="icons.length == 0 && searchValue.length != 0"
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
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/myStore'

const {data: categoriesData} = await useFetch('/api/categories')

const { data } = await useAsyncData(
  'searchResult',
  async () => {
    const searchResult = await $fetch('/api/search', {
        method: 'POST',
        body: {
          searchValue: '',
          filters: '',
          page: 0,
          hitsPerPage: 500
        }
      });

      // Function to convert SVG URL to base64
      const svgToBase64 = async (url, retries = 3) => {
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
              return url; // Fallback to original URL after all retries fail
            }
            // Wait before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
          }
        }
      };

      // Process each icon to add base64 versions of SVGs
      const processedHits = await Promise.all(
        searchResult.hits.map(async (hit) => {
          const base64_24px = await svgToBase64(hit.iconImage24px);
          const base64_18px = await svgToBase64(hit.iconImage18px);

          return {
            ...hit,
            base64_24px,
            base64_18px
          };
        })
      );

    searchResult.hits = processedHits;

    return {icons: searchResult.hits}
  }
)

// Components
// const IconCard = defineAsyncComponent(() => import('./IconCard.vue'))

// Store
const store = useStore()
const {
  icons,
  selectedIcon,
  selectedCategory,
  searchValue,
  numberOfIcons
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
  // const newIconArr = data.value?.icons?.length > 0 || (icons.value.length > 0 && searchValue.value != '') ? data.value?.icons : icons.value
  // let newIconArr;
  if(searchValue.value != '' && icons.value.length == 0  ) return []
  if(icons.value.length > 0 ) return icons.value
  if(data.value?.icons?.length > 0) return data.value?.icons
})
</script>
