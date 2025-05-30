<template>
  <div>
    <!-- Trigger Button -->
    <UButton @click="isOpen = true" icon="i-heroicons-arrow-up-tray" size="lg" square color="white" variant="solid" />

    <!-- Modal -->
    <!-- <UModal class="dark" v-model="isOpen" :ui="{ width: 'w-full max-w-2xl' }"> -->
    <UModal class="dark" v-model="isOpen" :ui="{ width: 'w-full !max-w-[90vw] md:!max-w-[80vw]' }">
      <UCard class="w-[90vw] md:w-[80vw] max-h-[97vh] md:max-h-[98vh] overflow-auto">
        <template #header>
          <div class="flex items-start justify-between">
            <div class="flex flex-col gap-2 w-full">
              <h3 class="text-lg font-semibold">
                Generate IconifyJSON
              </h3>
              <p class="opacity-70">
                Use this tool to upload SVG files and generate an IconifyJSON file for your icon library. Visit <a class="underline hover:text-blue-300" href="https://iconify.design/"> Iconify</a> to learn more.
              </p>
            </div>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
          </div>
        </template>

        <!-- Main Card Body -->
        <div class="flex flex-col md:!flex-row gap-6 max-h-[77vh] md:max-h-[77vh] overflow-auto pb-14">
          
          <!-- Info & options -->
          <div class="flex flex-col gap-4 w-full transition-all md:pr-3">
            <!-- Icon Set Configuration -->
            <div class="space-y-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="text-sm font-medium text-gray-900 dark:text-white">
                Icon Set Configuration
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Icon Set Name -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Icon Set Name
                  </label>
                  <UInput v-model="iconSetName" placeholder="My Custom Icons" :ui="{ base: 'text-sm' }" />
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Display name for your icon set
                  </p>
                </div>

                <!-- Prefix -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Prefix
                  </label>
                  <div class="relative">
                    <UInput v-model="iconSetPrefix" placeholder="my-icons" :ui="{ base: 'text-sm pr-8' }" />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <UIcon v-if="prefixCheckStatus === 'checking'" name="i-heroicons-arrow-path"
                        class="h-4 w-4 text-gray-400 animate-spin" />
                      <UIcon v-else-if="prefixCheckStatus === 'available'" name="i-heroicons-check-circle"
                        class="h-4 w-4 text-green-500" />
                      <UIcon v-else-if="prefixCheckStatus === 'taken'" name="i-heroicons-x-circle"
                        class="h-4 w-4 text-red-500" />
                    </div>
                  </div>
                  <div class="flex items-start space-x-1">
                    <p class="text-xs text-gray-500 dark:text-gray-400 flex-1">
                      Unique identifier for your icons (e.g., "my-icons" → "my-icons:home")
                    </p>
                  </div>
                  <div v-if="prefixCheckMessage" class="text-xs"
                    :class="prefixCheckStatus === 'taken' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'">
                    {{ prefixCheckMessage }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Upload Instructions -->
            <div
              class="flex flex-row gap-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full">
              <!-- <UIcon name="i-heroicons-information-circle" class="h-5 w-5 text-gray-400 mt-0.5" /> -->
              <div class="">
                <h4 class="text-sm font-medium text-gray-800 dark:text-gray-200">
                  File Format Requirements
                </h4>
                <div class="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Upload SVG files with this naming format: <code
                      class="bg-gray-100 dark:bg-gray-800 px-1 rounded">icon-name-24px.svg</code> or <code
                      class="bg-gray-100 dark:bg-gray-800 px-1 rounded">icon-name-18px.svg</code>
                  </p>
                  <div class="text-xs pt-1">
                    <p class="pb-1"><strong>Examples:</strong></p>
                    <ul class="list-inside ml-2 space-y-0.5">
                      <li><code class="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">home-24px.svg</code> → Creates
                        icon:
                        <code class="text-blue-600 dark:text-blue-400">home</code>
                      </li>
                      <li><code
                          class="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">home-18px.svg, home-24px.svg</code>
                        →
                        Creates: <code class="text-blue-600 dark:text-blue-400">home-18, home-24</code></li>
                      <li><code class="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">user-profile-24px.svg</code> →
                        Creates
                        icon: <code class="text-blue-600 dark:text-blue-400">user-profile</code></li>
                    </ul>

                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      <strong>Tip:</strong> Upload both sizes (18px & 24px) only if they have different visual designs.
                      Otherwise, one size is sufficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Processing Preview -->
            <div
              v-if="uploadedFiles.length > 0"
              class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 w-full"
            >
              <div class="flex flex-row gap-3">
                <UPopover mode="hover" :popper="{ placement: 'right-start' }">
                  <UIcon name="i-heroicons-information-circle" class="h-5 w-5 text-blue-400 mt-0.5 cursor-help" />

                  <template #panel>
                    <div class="flex flex-col gap-2 p-4 max-w-sm">
                      <h4 class="text-sm font-medium text-blue-800 dark:text-blue-200">
                        What does this mean?
                      </h4>
                      <p class="text-xs text-blue-700 dark:text-blue-300">
                        Icons with multiple sizes (e.g., home-18px.svg and home-24px.svg) become separate icons to
                        preserve unique geometries. Single size icons get a base name plus size alias.
                      </p>
                    </div>
                  </template>
                </UPopover>

                <div class="w-full">
                  <h4 class="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Processing Strategy
                  </h4>
                  <div class="mt-1 text-sm text-blue-700 dark:text-blue-300">
                    <div class="md:max-h-[23vh] overflow-auto grid grid-cols-2 gap-6 pt-1 w-full">
                      <!-- Single Size Icons Column -->
                      <div>
                        <div class="z-50 flex flex-row pb-2 gap-1 flex-wrap items-baseline leading-none w-full sticky -top-1 bg-[#121e3e]">
                          <p class="font-medium">
                            Single Size
                          </p>
                          <small class="font-regular">(base name + alias)</small>
                        </div>
                        <ul v-if="singleSizeIcons.length > 0" class="space-y-1">
                          <li v-for="icon in singleSizeIcons" :key="icon.iconName" class="text-xs">
                            <strong>{{ icon.iconName }}</strong>
                            <span class="opacity-50"> ·
                              {{ icon.iconName }}, {{ icon.alias }}
                            </span>
                          </li>
                        </ul>
                        <p v-else class="text-xs opacity-60">
                          No icons with single size found.
                        </p>
                      </div>

                      <!-- Multiple Size Icons Column -->
                      <div>
                        <div class="z-50 flex flex-row pb-2 gap-1 flex-wrap items-baseline leading-none w-full sticky -top-1 bg-[#121e3e]">
                          <p class="font-medium">
                            Multiple Sizes
                          </p>
                          <small class="font-regular"> (separate icons) </small>
                        </div>
                        <ul v-if="multipleSizeIcons.length > 0" class="space-y-1">
                          <li v-for="icon in multipleSizeIcons" :key="icon.iconName" class="text-xs">
                            <strong>{{ icon.iconName }}</strong>
                            <span class="opacity-50"> ·
                              {{ icon.separateIcons.join(', ') }}
                            </span>
                          </li>
                        </ul>
                        <p v-else class="text-xs opacity-60">
                          No icons with multiple sizes found.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Uploaded Files List -->
          <!-- <Transition name="files-list" mode="out-in"> -->
          <div class="flex flex-col w-full md:w-1/2">
            <!-- File Upload Area - Compact when files are uploaded -->
            <!-- <div class="flex h-full w-full"> -->
            <!-- Full upload area when no files -->
            <div v-if="uploadedFiles.length === 0" @drop="handleDrop" @dragover.prevent @dragenter.prevent
              class="h-full w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-primary-400 transition-colors"
              :class="{ 'border-primary-400 bg-primary-50 dark:bg-primary-900/20': isDragging }">
              <UIcon name="i-heroicons-cloud-arrow-up" class="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Drop SVG files here
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                or click to browse
              </p>
              <UButton @click="$refs.fileInput.click()" variant="outline" size="sm">
                Choose Files
              </UButton>
              <input ref="fileInput" type="file" multiple accept=".svg" @change="handleFileSelect" class="hidden" />
            </div>
            <!-- </div> -->

            <div v-if="uploadedFiles.length > 0" class="flex flex-col gap-6 w-full">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">
                  Uploaded Files ({{ uploadedFiles.length }})
                </h4>
                <UButton @click="clearFiles" variant="ghost" size="xs" color="red">
                  Clear All
                </UButton>
              </div>

              <!-- Compact upload area when files exist -->
              <div v-if="uploadedFiles.length > 0" @drop="handleDrop" @dragover.prevent @dragenter.prevent
                class="flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center hover:border-primary-400 transition-colors bg-gray-50 dark:bg-gray-800 w-full"
                :class="{ 'border-primary-400 bg-primary-50 dark:bg-primary-900/20': isDragging }">
                <div class="flex items-center justify-center space-x-3">
                  <UIcon name="i-heroicons-plus" class="h-5 w-5 text-gray-400" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    Drop more files or
                    <button @click="$refs.fileInput.click()"
                      class="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                      browse
                    </button>
                  </span>
                </div>
                <input ref="fileInput" type="file" multiple accept=".svg" @change="handleFileSelect" class="hidden" />
              </div>
              
              <!-- Virtual scrolled upload area -->
              <div class="h-full md:max-h-[58vh] md:pr-3 pt-2">
                <DynamicScroller
                  class="scroller"
                  :items="uploadedFiles"
                  :min-item-size="68"
                  key-field="name"
                  v-slot="{ item, index }"
                >
                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg mb-2">
                    <div class="flex items-center space-x-3">
                      <UIcon name="i-heroicons-document" class="h-5 w-5 text-gray-400" />
                      <div>
                        <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                          {{ item.name }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          {{ formatFileSize(item.size) }}
                        </p>
                      </div>
                    </div>
                    <UButton @click="removeFile(index)" variant="ghost" size="xs" color="red" icon="i-heroicons-trash" />
                  </div>
                </DynamicScroller>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="backdrop-blur-md rounded-b-xl bg-neutral-900/20 absolute bottom-0 left-0 p-4 flex justify-between w-full">
          <UButton @click="isOpen = false" variant="ghost" color="gray">
            Cancel
          </UButton>

          <UButton
            @click="generateIconifyJSON"
            :loading="isGenerating" 
            :disabled="uploadedFiles.length === 0 || iconSetName.length === 0 || iconSetPrefix.length === 0 && !isGenerating"
            color="primary" icon="i-heroicons-arrow-down-tray">
            Generate IconifyJSON
          </UButton>
        </div>
      </UCard>
    </UModal>

    <!-- Toast notifications will be handled by Nuxt UI automatically -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isDragging = ref(false)
const uploadedFiles = ref([])
const isGenerating = ref(false)
const iconSetName = ref('')
const iconSetPrefix = ref('')
const prefixCheckStatus = ref(null) // null, 'checking', 'available', 'taken'
const prefixCheckMessage = ref('')

const toast = useToast()

let prefixCheckTimeout = null

watch(iconSetPrefix, (newValue) => {
  checkPrefix(newValue)
})

const processingGroups = computed(() => {
  if (uploadedFiles.value.length === 0) return { single: [], multiple: [] }

  // Group files by base name
  const groups = new Map()

  uploadedFiles.value.forEach(file => {
    const match = file.name.match(/^(.+)-(18|24)px\.svg$/)
    if (match) {
      const [, iconName, size] = match
      if (!groups.has(iconName)) {
        groups.set(iconName, [])
      }
      groups.get(iconName).push(size)
    }
  })

  // Separate into single and multiple size groups
  const single = []
  const multiple = []

  for (const [iconName, sizes] of groups.entries()) {
    if (sizes.length > 1) {
      multiple.push({
        iconName,
        separateIcons: sizes.map(s => `${iconName}-${s}`)
      })
    } else {
      single.push({
        iconName,
        alias: `${iconName}-${sizes[0]}`
      })
    }
  }

  return { single, multiple }
})

const singleSizeIcons = computed(() => processingGroups.value.single)
const multipleSizeIcons = computed(() => processingGroups.value.multiple)

// Handle file drop
const handleDrop = (event) => {
  event.preventDefault()
  isDragging.value = false
  const files = Array.from(event.dataTransfer.files)
  processFiles(files)
}

// Handle file selection
const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  processFiles(files)
}

// Process and validate files
const processFiles = (files) => {

    
  // Filter out files that already exist in uploadedFiles
  const newFiles = files.filter(file => {
    const exists = uploadedFiles.value.some(existingFile => existingFile.name === file.name)
    if (exists) {
      toast.add({
        title: 'Duplicate file',
        description: `${file.name} already exists in the upload list`,
        color: 'yellow'
      })
      return false
    }
    return true
  })

  const svgFiles = newFiles.filter(file => {
    if (file.type !== 'image/svg+xml' && !file.name.endsWith('.svg')) {
      toast.add({
        title: 'Invalid file type',
        description: `${file.name} is not an SVG file`,
        color: 'red'
      })
      return false
    }

    // Check file name format
    const namePattern = /^.+-(18|24)px\.svg$/
    if (!namePattern.test(file.name)) {
      toast.add({
        title: 'Invalid file name format',
        description: `${file.name} should end with -18px.svg or -24px.svg`,
        color: 'red'
      })
      return false
    }

    return true
  })

  // Add valid files to the list
  uploadedFiles.value.push(...svgFiles)

  if (svgFiles.length > 0) {
    toast.add({
      title: 'Files added',
      description: `${svgFiles.length} SVG file(s) ready for upload`,
      color: 'green'
    })
  }
}

// Remove file from list
const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

// Clear all files
const clearFiles = () => {
  uploadedFiles.value = []
}

// Format file size
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Check if prefix is available
const checkPrefix = async (val) => {
  const prefix = val.trim()
  // const prefix = iconSetPrefix.value.trim()

  console.log(prefix, prefix.length)

  // Clear previous timeout
  if (prefixCheckTimeout) {
    clearTimeout(prefixCheckTimeout)
  }

  // Reset status if empty
  if (!prefix) {
    prefixCheckStatus.value = null
    prefixCheckMessage.value = ''
    return
  }

  // Validate prefix format
  if (!/^[a-z0-9-]+$/.test(prefix)) {
    prefixCheckStatus.value = 'taken'
    prefixCheckMessage.value = 'Prefix must only contain lowercase letters, numbers, and hyphens'
    return
  }

  // return

  // Debounce the API call
  prefixCheckTimeout = setTimeout(async () => {
    // Validate prefix length
    if (prefix.length < 2) {
      console.log('prefix.length: ', prefix.length)
      console.log('prefix.length: ', prefix)
      prefixCheckStatus.value = 'taken'
      prefixCheckMessage.value = 'Prefix must be at least 2 characters long'
      return
    } else {
      prefixCheckStatus.value = ''
      prefixCheckMessage.value = ''
      return
    }
  }, 500) // 500ms debounce
}

// Generate and download IconifyJSON directly from selected files
const generateIconifyJSON = async () => {
  if (uploadedFiles.value.length === 0) return

  const prefix = iconSetPrefix.value.trim()
  const name = iconSetName.value.trim()

  if (!prefix) {
    toast.add({
      title: 'Missing prefix',
      description: 'Please enter a prefix for your icon set',
      color: 'red'
    })
    return
  }

  isGenerating.value = true

  try {
    // Create FormData with the selected files and configuration
    const formData = new FormData()
    uploadedFiles.value.forEach((file, index) => {
      formData.append(`svg-${index}`, file)
    })

    // Add configuration
    formData.append('prefix', prefix)
    formData.append('name', name || 'Custom Icons')

    // Send files directly to the generate endpoint
    const response = await fetch('/api/generate-iconify', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to generate IconifyJSON')
    }

    const blob = await response.blob()

    // Create download link with custom filename
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${prefix}-icons.json`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)

    toast.add({
      title: 'Success!',
      description: `IconifyJSON "${name}" with ${uploadedFiles.value.length} icons has been downloaded`,
      color: 'green'
    })

    // Clear files and close modal after successful generation
    uploadedFiles.value = []
    isOpen.value = false

  } catch (error) {
    console.error('Generation error:', error)
    toast.add({
      title: 'Generation failed',
      description: error.message || 'Failed to generate IconifyJSON',
      color: 'red'
    })
  } finally {
    isGenerating.value = false
  }
}
</script>

<style scoped>
.scroller {
  height: 100%;
}

.vue-recycle-scroller__item-wrapper {
  box-sizing: border-box;
}

/* Files list transition animations */
.files-list-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.files-list-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.files-list-enter-from {
  opacity: 0;
  width: 0;
  transform: scaleX(0);
  transform-origin: left;
}

.files-list-leave-to {
  opacity: 0;
  width: 0;
  transform: scaleX(0);
  transform-origin: left;
}

.files-list-enter-to,
.files-list-leave-from {
  opacity: 1;
  width: 100%;
  transform: scaleX(1);
}
</style>