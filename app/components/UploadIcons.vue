<template>
  <!-- Upload Modal -->
  <UModal v-model:open="isModalOpen" class="dark">
    <!-- Trigger Button -->
    <UButton
      icon="i-heroicons-cloud-arrow-up"
      square
      size="lg"
      color="neutral"
    />

      <template #header>
        <div class="flex items-center justify-between w-full">
          <h3 class="text-base font-semibold leading-6 text-white">
            Upload Icon Files
          </h3>
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isModalOpen = false"
          />
        </div>
      </template>

      <template #body>
      <div class="space-y-4">
        <div class="flex flex-row gap-4">
          <UFormField label="Data to Upload" description="Optional metadata for the upload" class="w-full">
            <UInput
              v-model="dataToUpload"
              placeholder="Enter data to upload"
            />
          </UFormField>

          <div class="flex flex-col gap-2">
            <p class="text-sm opacity-90">Update if Duplicate</p>
            <USwitch v-model="updateIfDuplicate" />
          </div>
        </div>

        <div class="flex flex-col w-full">
          <!-- Full upload area when no files -->
          <div v-if="uploadedFiles.length === 0" 
                @drop="handleDrop" 
                @dragover.prevent 
                @dragenter.prevent
                @dragleave="isDragging = false"
                class="h-64 w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary-400 transition-colors"
                :class="{ 'border-primary-400 bg-primary-900/20': isDragging }">
            <UIcon name="i-heroicons-cloud-arrow-up" class="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p class="text-lg font-medium text-white mb-2">
              Drop SVG files here
            </p>
            <p class="text-sm text-gray-400 mb-4">
              or click to browse
            </p>
            <UButton @click="$refs.fileInput.click()" variant="outline" size="sm">
              Choose Files
            </UButton>
            <input ref="fileInput" type="file" multiple accept=".svg" @change="handleFileSelect" class="hidden" />
          </div>

          <div v-if="uploadedFiles.length > 0" class="flex flex-col gap-6 w-full">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <h4 class="text-sm font-semibold text-white">
                  {{ Object.keys(groupedIcons).length }} Unique Icons ({{ uploadedFiles.length }} files)
                </h4>
                <p class="font-normal text-xs opacity-90">
                  {{ completeIcons.length }} complete • {{ incompleteIcons.length }} incomplete
                </p>
              </div>
              <UButton @click="clearFiles" variant="ghost" size="xs" color="error">
                Clear All
              </UButton>
            </div>

            <!-- Compact upload area when files exist -->
            <div @drop="handleDrop" 
                  @dragover.prevent 
                  @dragenter.prevent
                  @dragleave="isDragging = false"
                  class="flex items-center justify-center border border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-primary-400 transition-colors bg-gray-800 w-full"
                  :class="{ 'border-primary-400 bg-primary-900/20': isDragging }">
              <div class="flex items-center justify-center space-x-3">
                <UIcon name="i-heroicons-plus" class="h-5 w-5 text-gray-400" />
                <span class="text-sm text-gray-400">
                  Drop more files or
                  <button @click="$refs.fileInput.click()"
                          class="text-primary-400 hover:underline font-medium">
                    browse
                  </button>
                </span>
              </div>
              <input ref="fileInput" type="file" multiple accept=".svg" @change="handleFileSelect" class="hidden" />
            </div>
            
            <!-- Icon list grouped by icon name -->
            <div v-bind="containerProps" class="max-h-64 pr-2 overflow-auto">
              <div v-bind="wrapperProps">
                <div v-for="item in iconGroupsList" :key="item.index" class="mb-4" style="min-height: 100px">
                  <div v-for="(iconGroup, iconName) in { [item.data[0]]: item.data[1] }" 
                    :key="iconName"
                    class="p-4 bg-gray-800 rounded-lg border border-gray-700">
                
                    <!-- Icon header -->
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-3">
                          <div class="flex items-center space-x-2">
                            <div class="h-5 w-5 text-gray-300 flex items-center justify-center">
                              <div v-if="getIconSvgContent(iconGroup)" v-html="getIconSvgContent(iconGroup)" class="h-5 w-5"></div>
                              <UIcon v-else name="i-heroicons-squares-2x2" class="h-5 w-5" />
                            </div>
                            <h5 class="text-sm font-semibold text-white">
                              {{ iconName }}
                            </h5>
                          </div>
                        
                        <!-- Status badge -->
                        <UBadge 
                          :color="iconGroup.isComplete ? 'success' : 'warning'" 
                          variant="soft" 
                          size="xs"
                        >
                          {{ iconGroup.isComplete ? 'Complete' : 'Incomplete' }}
                        </UBadge>
                      </div>
                      
                      <!-- Remove entire icon group -->
                      <UButton 
                        @click="removeIconGroup(iconName)" 
                        variant="ghost" 
                        size="xs" 
                        color="error" 
                        icon="i-heroicons-trash"
                      />
                    </div>

                    <!-- Files for this icon -->
                    <div class="flex flex-row gap-2">
                      <div
                        v-for="(file, fileIndex) in iconGroup.files" 
                        :key="file.name"
                        class="flex items-center justify-between p-2 bg-gray-700 rounded-lg border border-gray-600 w-full"
                      >
                        
                        <div class="flex items-center space-x-3">
                          <div class="flex items-center space-x-2">
                            <UIcon name="i-heroicons-document" class="h-4 w-4 text-gray-400" />
                            <!-- <div> -->
                              <!-- <p class="text-xs font-medium text-white">
                                {{ getFileDisplayName(file.name) }}
                              </p> -->
                              <div class="flex items-center space-x-2">
                                <UBadge 
                                  color="neutral"
                                  size="sm"
                                >
                                  {{ getFileSizeLabel(file.name) }}
                                </UBadge>

                                <span class="text-xs text-gray-400">
                                  {{ formatFileSize(file.size) }}
                                </span>
                                <!-- Size indicator -->
                                <!-- :color="getFileSizeColor(file.name)"  -->
                              </div>
                            <!-- </div> -->
                          </div>
                        </div>
                        
                        <!-- Remove individual file -->
                        <UButton 
                          @click="removeFileFromIcon(iconName, fileIndex)" 
                          variant="ghost" 
                          size="xs" 
                          color="error" 
                          icon="i-heroicons-x-mark"
                        />
                      </div>
                      
                      <!-- Missing sizes indicator -->
                      <div
                        v-if="!iconGroup.isComplete" 
                        class="flex items-center justify-center space-x-2 text-xs text-amber-400 mt-2 w-full"
                      >
                        <UIcon name="i-heroicons-exclamation-triangle" class="h-4 w-4" />
                        <span>Missing: {{ getMissingSizes(iconGroup).join(', ') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </template>

      <template #footer>
        <div class="flex justify-between gap-3 w-full">
          <UButton
            color="neutral"
            variant="ghost"
            @click="isModalOpen = false"
          >
            Cancel
          </UButton>
          <UButton
            @click="handleUpload"
            :disabled="uploadedFiles.length === 0"
            :loading="isUploading"
          >
            {{ isUploading ? `Uploading... ${uploadProgress.total - uploadProgress.processed} of ${uploadProgress.total} icons remaining` : `Upload ${Object.keys(groupedIcons).length} Icons (${uploadedFiles.length} files)` }}
          </UButton>
        </div>
      </template>
  </UModal>
</template>

<script setup>
import Parse from 'parse/dist/parse.min.js'
import { useVirtualList } from '@vueuse/core'

// Props
const props = defineProps({
  // Add any props you need here
})

// Get toast instance
const toast = useToast()

// Reactive data
const dataToUpload = ref('')
const selectedFiles = ref([])
const uploadedFiles = ref([])
const isModalOpen = ref(false)
const isUploading = ref(false)
const isDragging = ref(false)
const fileInput = ref(null)
const uploadProgress = ref({ processed: 0, total: 0 })
const svgContents = ref({})
const updateIfDuplicate = ref(false)

// Initialize Parse
Parse.initialize(import.meta.env.VITE_PARSE_APP_ID, import.meta.env.VITE_PARSE_KEY)
Parse.serverURL = import.meta.env.VITE_PARSE_SERVER_URL;

// Cache for optimization
const iconCache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
const CONCURRENT_UPLOADS = 3 // Adjust based on your server capacity

// Simple LRU cache implementation
class LRUCache {
  constructor(maxSize = 50) {
    this.maxSize = maxSize
    this.cache = new Map()
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
    return null
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    this.cache.set(key, value)
  }

  has(key) {
    return this.cache.has(key)
  }

  clear() {
    this.cache.clear()
  }
}

const svgContentCache = new LRUCache(50)

// Utility functions
const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

// OPTIMIZED METHODS

// 1. Batch existence checking
const checkMultipleIconsExist = async (iconNames) => {
  if (!iconNames || iconNames.length === 0) return new Map()
  
  const Icon = Parse.Object.extend('icons')
  const query = new Parse.Query(Icon)
  query.containedIn('iconName', iconNames)
  query.include('iconImage18px')
  query.include('iconImage24px')
  query.limit(1000) // Adjust based on your needs
  
  try {
    const existingIcons = await query.find()
    
    // Create a map for O(1) lookups
    const existingIconsMap = new Map()
    existingIcons.forEach(icon => {
      existingIconsMap.set(icon.get('iconName'), icon)
    })
    
    return existingIconsMap
  } catch (error) {
    console.error('Error checking existing icons:', error)
    return new Map()
  }
}

// 2. Optimized file upload with deduplication
const uploadFilesToParseServer = async (files) => {
  const filesToUpload = []
  const existingFiles = new Map()
  
  // Group files by icon name first
  const filesByIcon = new Map()
  files.forEach(file => {
    const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
    if (!filesByIcon.has(iconName)) {
      filesByIcon.set(iconName, [])
    }
    filesByIcon.set(iconName, [...filesByIcon.get(iconName), file])
  })
  
  // Check which icons already exist
  const iconNames = Array.from(filesByIcon.keys())
  const existingIconsMap = await checkMultipleIconsExist(iconNames)
  
  // Determine which files actually need uploading
  for (const [iconName, iconFiles] of filesByIcon) {
    const existingIcon = existingIconsMap.get(iconName)
    
    for (const file of iconFiles) {
      let needsUpload = true
      
      if (existingIcon) {
        // Check if this specific size already exists
        if (file.name.includes('-18px.svg') && existingIcon.get('iconImage18px')) {
          existingFiles.set(`${iconName}-18px`, existingIcon.get('iconImage18px'))
          needsUpload = false
          console.log(`Reusing existing 18px file for ${iconName}`)
        } else if (file.name.includes('-24px.svg') && existingIcon.get('iconImage24px')) {
          existingFiles.set(`${iconName}-24px`, existingIcon.get('iconImage24px'))
          needsUpload = false
          console.log(`Reusing existing 24px file for ${iconName}`)
        }
      }
      
      if (needsUpload) {
        filesToUpload.push(file)
      }
    }
  }
  
  console.log(`Files to upload: ${filesToUpload.length}, Files being reused: ${existingFiles.size}`)
  
  // Upload only new files in parallel (with concurrency limit)
  const uploadedFiles = new Map()
  
  for (let i = 0; i < filesToUpload.length; i += CONCURRENT_UPLOADS) {
    const batch = filesToUpload.slice(i, i + CONCURRENT_UPLOADS)
    const uploadPromises = batch.map(async (file) => {
      try {
        console.log(`Uploading ${file.name}...`)
        const parseFile = new Parse.File(file.name, file)
        const result = await parseFile.save()
        const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
        const sizeKey = file.name.includes('-18px.svg') ? '18px' : '24px'
        uploadedFiles.set(`${iconName}-${sizeKey}`, result)
        console.log(`Successfully uploaded ${file.name}`)
        return { success: true, file: file.name }
      } catch (error) {
        console.error(`Failed to upload ${file.name}:`, error)
        return { success: false, file: file.name, error }
      }
    })
    
    await Promise.allSettled(uploadPromises)
  }
  
  // Combine existing and newly uploaded files
  return new Map([...existingFiles, ...uploadedFiles])
}

// 3. Batch icon creation/update
const batchCreateOrUpdateIcons = async (iconEntries, existingIconsMap) => {
  const toCreate = []
  const toUpdate = []
  
  // Separate creation vs updates
  Object.entries(iconEntries).forEach(([iconName, iconData]) => {
    if (existingIconsMap.has(iconName)) {
      if(updateIfDuplicate.value) {
        toUpdate.push({
          icon: existingIconsMap.get(iconName),
          data: iconData
        })
      }
    } else {
      toCreate.push(iconData)
    }
  })
  
  const results = { created: [], updated: [], errors: [] }
  
  console.log(`toUpdate: `, toUpdate)

  // Batch create new icons
  if (toCreate.length > 0) {
    try {
      console.log(`Creating ${toCreate.length} new icons...`)
      const Icon = Parse.Object.extend('icons')
      const createPromises = toCreate.map(iconData => {
        const icon = new Icon()
        icon.set('iconName', iconData.iconName)
        if (iconData.iconImage18px) icon.set('iconImage18px', iconData.iconImage18px)
        if (iconData.iconImage24px) icon.set('iconImage24px', iconData.iconImage24px)
        return icon
      })
      
      const createdIcons = await Parse.Object.saveAll(createPromises)
      results.created = createdIcons.map(icon => icon.get('iconName'))
      console.log(`Successfully created ${results.created.length} icons`)
    } catch (error) {
      console.error('Batch create failed:', error)
      results.errors.push({ operation: 'create', error })
    }
  }
  
  // Batch update existing icons
  if (toUpdate.length > 0) {
    try {
      console.log(`Updating ${toUpdate.length} existing icons...`)
      const updatePromises = toUpdate.map(({ icon, data }) => {
        if (data.iconImage18px) icon.set('iconImage18px', data.iconImage18px)
        if (data.iconImage24px) icon.set('iconImage24px', data.iconImage24px)
        return icon
      })
      
      const updatedIcons = await Parse.Object.saveAll(updatePromises)
      results.updated = updatedIcons.map(icon => icon.get('iconName'))
      console.log(`Successfully updated ${results.updated.length} icons`)
    } catch (error) {
      console.error('Batch update failed:', error)
      results.errors.push({ operation: 'update', error })
    }
  }
  
  return results
}

// 4. Main optimized upload function
const uploadData = async (files) => {
  if (!files || files.length === 0) return

  try {
    console.log(`Starting optimized upload for ${files.length} files...`)
    
    // Step 1: Group files by icon name
    const iconEntries = {}
    files.forEach(file => {
      const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
      if (!iconEntries[iconName]) {
        iconEntries[iconName] = { iconName }
      }
    })
    
    // Step 2: Check existing icons in batch
    const iconNames = Object.keys(iconEntries)
    uploadProgress.value.total = iconNames.length
    console.log(`Checking existence for ${iconNames.length} unique icons...`)
    const existingIconsMap = await checkMultipleIconsExist(iconNames)
    console.log(`Found ${existingIconsMap.size} existing icons`)
    
    // Step 3: Upload files (only new ones) with deduplication
    console.log('Uploading files with deduplication...')
    const uploadedFilesMap = await uploadFilesToParseServer(files)
    
    // Step 4: Build icon entries with uploaded files
    files.forEach(file => {
      const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
      const sizeKey = file.name.includes('-18px.svg') ? '18px' : '24px'
      const fileKey = `${iconName}-${sizeKey}`
      
      if (uploadedFilesMap.has(fileKey)) {
        const field = sizeKey === '18px' ? 'iconImage18px' : 'iconImage24px'
        iconEntries[iconName][field] = uploadedFilesMap.get(fileKey)
      }
    })
    
    // Step 5: Batch create/update icons
    console.log('Performing batch create/update operations...')
    const results = await batchCreateOrUpdateIcons(iconEntries, existingIconsMap)
    
    // Update progress
    uploadProgress.value.processed = uploadProgress.value.total
    
    // Log detailed summary
    console.log('=== UPLOAD SUMMARY ===')
    console.log(`Total files processed: ${files.length}`)
    console.log(`Unique icons: ${iconNames.length}`)
    if (results.created.length > 0) {
      console.log(`Created icons (${results.created.length}):`, results.created)
    }
    if (results.updated.length > 0) {
      console.log(`Updated icons (${results.updated.length}):`, results.updated)
    }
    if (results.errors.length > 0) {
      console.log(`Errors (${results.errors.length}):`, results.errors)
    }
    console.log('=======================')
    
    return results
    
  } catch (error) {
    console.error("Optimized upload error:", error)
    uploadProgress.value = { processed: 0, total: 0 }
    throw error
  }
}

// Legacy method for backward compatibility (now optimized with caching)
const doesIconExist = async (field, value, deleteMedia) => {
  const cacheKey = `icon_${value}`
  const cached = iconCache.get(cacheKey)
  
  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    return cached.data
  }
  
  const Icon = Parse.Object.extend('icons')
  const query = new Parse.Query(Icon)
  query.equalTo(field, value)
  query.include('iconImage18px')
  query.include('iconImage24px')

  try {
    const icon = await query.first()
    const exists = icon != undefined
    
    const result = { exists, icon }
    
    iconCache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    })

    return result
  } catch (error) {
    console.error('Error checking icon existence:', error)
    return { exists: false, icon: null }
  }
}

// Legacy methods for backward compatibility
const createIconEntry = async (iconData) => {
  console.log("Creating icon entry: ", iconData)

  const Icon = Parse.Object.extend('icons')
  const icon = new Icon()

  icon.set('iconName', iconData.iconName)
  
  if (iconData.iconImage18px) {
    icon.set('iconImage18px', iconData.iconImage18px)
  }
  
  if (iconData.iconImage24px) {
    icon.set('iconImage24px', iconData.iconImage24px)
  }

  try {
    const result = await icon.save()
    console.log('Icon created successfully:', result)
    return result
  } catch (error) {
    console.error('Error creating icon:', error)
    throw error
  }
}

const updateIconEntry = async (existingIcon, iconData) => {
  console.log("Updating icon entry: ", iconData)

  if (iconData.iconImage18px) {
    existingIcon.set('iconImage18px', iconData.iconImage18px)
  }
  
  if (iconData.iconImage24px) {
    existingIcon.set('iconImage24px', iconData.iconImage24px)
  }

  try {
    const result = await existingIcon.save()
    console.log('Icon updated successfully:', result)
    return result
  } catch (error) {
    console.error('Error updating icon:', error)
    throw error
  }
}

const uploadFileToParseServer = async (file) => {
  console.log("Uploading file to Parse server...")

  try {
    // Check if file already exists by checking for icons with this file
    const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
    const existingIconResult = await doesIconExist('iconName', iconName, { delete: false })
    
    if (existingIconResult.exists && existingIconResult.icon) {
      const existingIcon = existingIconResult.icon
      
      // Check if the specific file size already exists
      if (file.name.includes('-18px.svg') && existingIcon.get('iconImage18px')) {
        console.log('18px file already exists for icon:', iconName, 'Reusing existing file.')
        return existingIcon.get('iconImage18px')
      } else if (file.name.includes('-24px.svg') && existingIcon.get('iconImage24px')) {
        console.log('24px file already exists for icon:', iconName, 'Reusing existing file.')
        return existingIcon.get('iconImage24px')
      }
    }
    
    // File doesn't exist, upload new one
    const parseFile = new Parse.File(file.name, file)
    const result = await parseFile.save()
    console.log('File uploaded successfully:', result)
    return result
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

// UI Event Handlers
const handleDrop = (event) => {
  event.preventDefault()
  isDragging.value = false
  
  const files = Array.from(event.dataTransfer.files)
  const svgFiles = files.filter(file => file.name.toLowerCase().endsWith('.svg'))
  const nonSvgFiles = files.filter(file => !file.name.toLowerCase().endsWith('.svg'))
  
  if (svgFiles.length > 0) {
    uploadedFiles.value = [...uploadedFiles.value, ...svgFiles]
    selectedFiles.value = [...selectedFiles.value, ...svgFiles]
    
    toast.add({
      title: 'Files Added',
      description: `Added ${svgFiles.length} SVG file${svgFiles.length > 1 ? 's' : ''}`,
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })
  }
  
  if (nonSvgFiles.length > 0) {
    toast.add({
      title: 'Invalid Files Skipped',
      description: `${nonSvgFiles.length} non-SVG file${nonSvgFiles.length > 1 ? 's were' : ' was'} skipped. Only SVG files are supported.`,
      color: 'warning',
      icon: 'i-heroicons-exclamation-triangle'
    })
  }
  
  if (files.length > 0 && svgFiles.length === 0) {
    toast.add({
      title: 'No Valid Files',
      description: 'Please drop SVG files only.',
      color: 'error',
      icon: 'i-heroicons-x-circle'
    })
  }
}

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  const svgFiles = files.filter(file => file.name.toLowerCase().endsWith('.svg'))
  const nonSvgFiles = files.filter(file => !file.name.toLowerCase().endsWith('.svg'))
  
  if (svgFiles.length > 0) {
    uploadedFiles.value = [...uploadedFiles.value, ...svgFiles]
    selectedFiles.value = [...selectedFiles.value, ...svgFiles]
    
    toast.add({
      title: 'Files Selected',
      description: `Selected ${svgFiles.length} SVG file${svgFiles.length > 1 ? 's' : ''}`,
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })
  }
  
  if (nonSvgFiles.length > 0) {
    toast.add({
      title: 'Invalid Files Ignored',
      description: `${nonSvgFiles.length} non-SVG file${nonSvgFiles.length > 1 ? 's were' : ' was'} ignored. Only SVG files are supported.`,
      color: 'warning',
      icon: 'i-heroicons-exclamation-triangle'
    })
  }
  
  event.target.value = ''
}

const removeFileFromIcon = (iconName, fileIndex) => {
  const iconGroup = groupedIcons.value[iconName]
  const fileToRemove = iconGroup.files[fileIndex]
  
  const mainIndex = uploadedFiles.value.findIndex(f => f.name === fileToRemove.name)
  if (mainIndex !== -1) {
    uploadedFiles.value.splice(mainIndex, 1)
    selectedFiles.value.splice(mainIndex, 1)
    
    toast.add({
      title: 'File Removed',
      description: `Removed ${fileToRemove.name}`,
      color: 'neutral',
      icon: 'i-heroicons-trash'
    })
  }
}

const removeIconGroup = (iconName) => {
  const iconGroup = groupedIcons.value[iconName]
  const fileCount = iconGroup.files.length
  
  iconGroup.files.forEach(file => {
    const mainIndex = uploadedFiles.value.findIndex(f => f.name === file.name)
    if (mainIndex !== -1) {
      uploadedFiles.value.splice(mainIndex, 1)
      selectedFiles.value.splice(mainIndex, 1)
    }
  })
  
  toast.add({
    title: 'Icon Removed',
    description: `Removed "${iconName}" and ${fileCount} associated file${fileCount > 1 ? 's' : ''}`,
    color: 'neutral',
    icon: 'i-heroicons-trash'
  })
}

const clearFiles = () => {
  const fileCount = uploadedFiles.value.length
  uploadedFiles.value = []
  selectedFiles.value = []
  
  toast.add({
    title: 'All Files Cleared',
    description: `Removed ${fileCount} file${fileCount > 1 ? 's' : ''}`,
    color: 'neutral',
    icon: 'i-heroicons-trash'
  })
}

const handleUpload = async () => {
  if (selectedFiles.value.length === 0) return
  
  isUploading.value = true
  
  toast.add({
    title: 'Upload Started',
    description: `Uploading ${Object.keys(groupedIcons.value).length} icon${Object.keys(groupedIcons.value).length > 1 ? 's' : ''} (${uploadedFiles.value.length} files)`,
    color: 'info',
    icon: 'i-heroicons-cloud-arrow-up'
  })
  
  try {
    const results = await uploadData(selectedFiles.value)
    
    // Success toast with detailed info
    let summaryText = []
    if (results.created.length > 0) summaryText.push(`${results.created.length} created`)
    if (results.updated.length > 0) summaryText.push(`${results.updated.length} updated`)
    
    toast.add({
      title: 'Upload Successful',
      description: summaryText.length > 0 ? summaryText.join(', ') : `Successfully processed ${Object.keys(groupedIcons.value).length} icons`,
      color: 'success',
      icon: 'i-heroicons-check-circle'
    })
    
    // Reset form and close modal on success
    selectedFiles.value = []
    uploadedFiles.value = []
    dataToUpload.value = ''
    uploadProgress.value = { processed: 0, total: 0 }
    isModalOpen.value = false
    
  } catch (error) {
    toast.add({
      title: 'Upload Failed',
      description: error.message || 'An error occurred during upload. Please try again.',
      color: 'error',
      icon: 'i-heroicons-x-circle'
    })
    console.error('Upload error:', error)
  } finally {
    isUploading.value = false
  }
}

// Utility functions
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getFileSizeLabel = (fileName) => {
  if (fileName.includes('-18px.svg')) return '18px'
  if (fileName.includes('-24px.svg')) return '24px'
  return 'Default'
}

const getMissingSizes = (iconGroup) => {
  const missing = []
  const hasFiles = iconGroup.files.map(f => f.name)
  
  const has18px = hasFiles.some(name => name.includes('-18px.svg'))
  const has24px = hasFiles.some(name => name.includes('-24px.svg'))
  
  if (!has18px) missing.push('18px')
  if (!has24px) missing.push('24px')
  
  return missing
}

// Optimized SVG content getter
const getIconSvgContent = (iconGroup) => {
  if (!iconGroup?.files?.length) return null
  
  const cacheKey = iconGroup.iconName
  if (svgContentCache.has(cacheKey)) {
    return svgContentCache.get(cacheKey)
  }
  
  return svgContents.value[iconGroup.iconName] || null
}

// Computed properties
const groupedIcons = computed(() => {
  const groups = {}
  
  uploadedFiles.value.forEach(file => {
    const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
    
    if (!groups[iconName]) {
      groups[iconName] = {
        iconName,
        files: [],
        isComplete: false
      }
    }
    
    groups[iconName].files.push(file)
  })
  
  // Check completeness for each icon
  Object.keys(groups).forEach(iconName => {
    const files = groups[iconName].files
    const has18px = files.some(f => f.name.includes('-18px.svg'))
    const has24px = files.some(f => f.name.includes('-24px.svg'))
    
    groups[iconName].isComplete = has18px && has24px
  })
  
  return groups
})

const completeIcons = computed(() => {
  return Object.values(groupedIcons.value).filter(icon => icon.isComplete)
})

const incompleteIcons = computed(() => {
  return Object.values(groupedIcons.value).filter(icon => !icon.isComplete)
})

// Virtual list setup
const groupedIconsEntries = computed(() => Object.entries(groupedIcons.value))
const { list: iconGroupsList, containerProps, wrapperProps } = useVirtualList(
  groupedIconsEntries,
  {
    itemHeight: 100,
  }
)

// Legacy computed properties for backward compatibility
const singleSizeIcons = computed(() => {
  return incompleteIcons.value.map(icon => icon.iconName)
})

const multipleSizeIcons = computed(() => {
  return completeIcons.value.map(icon => icon.iconName)
})

// Debounced file processing
const debouncedProcessFiles = debounce((files) => {
  // Update SVG contents when files change
  svgContents.value = {}
  
  files.forEach(file => {
    if (file.type === 'image/svg+xml') {
      const iconName = file.name.replace('-18px.svg', '').replace('-24px.svg', '').replace('.svg', '')
      const reader = new FileReader()
      reader.onload = (e) => {
        svgContents.value[iconName] = e.target.result
        svgContentCache.set(iconName, e.target.result)
      }
      reader.readAsText(file)
    }
  })
}, 300)

// Watch for file changes to update SVG contents
watch(uploadedFiles, (newFiles) => {
  debouncedProcessFiles(newFiles)
}, { immediate: true })

// Progress tracker
const createProgressTracker = () => {
  let current = 0
  let total = 0
  const callbacks = new Set()
  
  return {
    setTotal: (newTotal) => {
      total = newTotal
      uploadProgress.value.total = total
      callbacks.forEach(cb => cb({ current, total }))
    },
    increment: () => {
      current++
      uploadProgress.value.processed = current
      callbacks.forEach(cb => cb({ current, total }))
    },
    onProgress: (callback) => {
      callbacks.add(callback)
      return () => callbacks.delete(callback)
    },
    reset: () => {
      current = 0
      total = 0
      uploadProgress.value = { processed: 0, total: 0 }
      callbacks.forEach(cb => cb({ current, total }))
    }
  }
}

// Initialize progress tracker
const progressTracker = createProgressTracker()

// Clean up cache on modal close
watch(isModalOpen, (newValue) => {
  if (!newValue) {
    // Clear caches when modal closes to free memory
    iconCache.clear()
    svgContentCache.clear()
    svgContents.value = {}
  }
})

// Lifecycle hooks
onMounted(() => {
  console.log('Upload component mounted - optimized version')
})

onUnmounted(() => {
  // Clean up
  iconCache.clear()
  svgContentCache.clear()
})
</script>