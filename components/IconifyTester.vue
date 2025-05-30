<template>
    <div class="dark">
        <!-- Trigger Button -->
        <UButton @click="isOpen = true" icon="i-heroicons-beaker" size="lg" square color="white" variant="solid" />

        <UModal class="dark" v-model="isOpen" :ui="{ width: 'w-full !max-w-[80vw]' }">
            <UCard class="max-w-[90vw] w-full max-h-[90vh]">
                <template #header>
                    <div class="flex flex-row gap-2 justify-between">
                        <div class="flex flex-col gap-2">
                            <h3 class="text-lg font-semibold">
                                IconifyJSON Tester
                            </h3>
                            <p class="opacity-70">
                                Test and validate your IconifyJSON file
                            </p>
                        </div>

                        <div v-if="testResults" class="flex justify-center h-fit">
                            <UButton @click="$refs.jsonInput.click()" variant="outline" size="sm" icon="i-heroicons-document-arrow-up">
                                Upload New File
                            </UButton>
                            <input ref="jsonInput" type="file" accept=".json" @change="handleFileSelect"
                                class="hidden" />
                        </div>
                    </div>
                </template>

                <!-- Upload JSON File -->
                <div class="space-y-4 overflow-auto">
                    <div class="space-y-2">
                        <!-- Show upload area when no file has been uploaded -->
                        <div v-if="!testResults" @drop="handleDrop" @dragover.prevent @dragenter.prevent
                            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                            <UIcon name="i-heroicons-document-arrow-up" class="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                Drop your iconify-icons.json file here or click to browse
                            </p>
                            <UButton @click="$refs.jsonInput.click()" variant="outline" size="sm">
                                Choose File
                            </UButton>
                            <input ref="jsonInput" type="file" accept=".json" @change="handleFileSelect"
                                class="hidden" />
                        </div>
                    </div>

                    <!-- Test Results -->
                    <div v-if="testResults" class="space-y-4">
                        <!-- Validation Status -->
                        <div class="flex items-center space-x-2">
                            <UIcon :name="testResults.isValid ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'"
                                :class="testResults.isValid ? 'text-green-500' : 'text-red-500'" class="h-5 w-5" />
                            <span
                                :class="testResults.isValid ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'"
                                class="font-medium">
                                {{ testResults.isValid ? 'Valid IconifyJSON!' : 'Invalid IconifyJSON' }}
                            </span>
                        </div>

                        <!-- JSON Info -->
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2">
                            <h4 class="font-medium text-gray-900 dark:text-white">JSON Information:</h4>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span class="text-gray-600 dark:text-gray-400">Prefix:</span>
                                    <span class="ml-2 font-mono">{{ testResults.info.prefix }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-600 dark:text-gray-400">Total Icons:</span>
                                    <span class="ml-2 font-mono">{{ testResults.info.iconCount }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-600 dark:text-gray-400">Aliases:</span>
                                    <span class="ml-2 font-mono">{{ testResults.info.aliasCount }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-600 dark:text-gray-400">File Size:</span>
                                    <span class="ml-2 font-mono">{{ formatFileSize(testResults.info.fileSize) }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Icon Organization Display -->
                        <!-- <div
                            v-if="iconGroups.single.length > 0 || iconGroups.multiple.length > 0"
                            class="max-h-[50vh] overflow-auto bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
                        >
                            <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-3">Icon Organization:</h4>
                            <div class="grid grid-cols-2 gap-6 text-sm">
                                <div v-if="iconGroups.single.length > 0">
                                    <div class="font-medium text-blue-700 dark:text-blue-300 mb-2">Single Size Icons:</div>
                                    <div class="space-y-1">
                                        <div v-for="group in iconGroups.single" :key="group.baseName" class="text-xs">
                                            <span class="font-mono text-blue-600 dark:text-blue-400">{{ group.baseName }}</span>
                                            <span class="text-gray-600 dark:text-gray-400"> ({{ group.size }}px)</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div v-if="iconGroups.multiple.length > 0">
                                    <div class="font-medium text-blue-700 dark:text-blue-300 mb-2">Multiple Size Icons:</div>
                                    <div class="space-y-1">
                                        <div v-for="group in iconGroups.multiple" :key="group.baseName" class="text-xs">
                                            <span class="font-medium">{{ group.baseName }}:</span>
                                            <span class="font-mono text-blue-600 dark:text-blue-400">{{ group.icons.join(', ') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="flex flex-row gap-4">
                            <!-- Icons List -->
                            <div v-if="testResults.icons.length > 0" class="space-y-2 w-full">
                                <h4 class="font-medium text-gray-900 dark:text-white">Icons Found ({{ testResults.icons.length }})</h4>
                                <div class="max-h-[34vh] bg-gray-50 dark:bg-gray-800 rounded-lg p-3 overflow-auto">
                                    <DynamicScroller
                                        class="scroller"
                                        :items="testResults.icons"
                                        :item-size="40"
                                        :key-field="(item, index) => item"
                                        v-slot="{ item }"
                                    >
                                        <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded px-2 py-1 border border-gray-200 dark:border-gray-600 mb-2 mr-2 inline-flex">
                                            <div class="w-4 h-4 flex-shrink-0" v-html="generateIconSvg(item)"></div>
                                            <span class="font-mono text-xs">{{ item }}</span>
                                            <span v-if="getIconSize(item)" class="text-xs text-gray-500 dark:text-gray-400">({{ getIconSize(item) }}px)</span>
                                        </div>
                                    </DynamicScroller>
                                </div>
                            </div>

                            <!-- Aliases List -->
                            <div v-if="testResults.aliases.length > 0" class="space-y-2 w-full h-ful">
                                <h4 class="font-medium text-gray-900 dark:text-white">Aliases Found ({{ testResults.aliases.length }})</h4>
                                <div class="max-h-[34vh] bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                    <RecycleScroller
                                        class="scroller"
                                        :items="testResults.aliases"
                                        :item-size="24"
                                        key-field="name"
                                        v-slot="{ item }"
                                    >
                                        <div class="text-gray-700 dark:text-gray-300 text-sm font-mono mb-1">
                                            <span class="text-blue-600 dark:text-blue-400">{{ item.name }}</span> → {{ item.parent }}
                                        </div>
                                    </RecycleScroller>
                                </div>
                            </div>
                        </div>

                        <!-- Errors -->
                        <div v-if="testResults.errors.length > 0" class="space-y-2">
                            <h4 class="font-medium text-red-700 dark:text-red-400">Validation Errors:</h4>
                            <div
                                class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                                <ul class="space-y-1 text-sm text-red-700 dark:text-red-400">
                                    <li v-for="(error, index) in testResults.errors" :key="index">
                                        • {{ error }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Test in Browser -->
                        <div v-if="testResults.isValid" class="space-y-4">
                            <h4 class="font-medium text-gray-900 dark:text-white">Test Icons in Browser:</h4>

                            <!-- Icon Preview -->
                            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex flex-row flex-wrap gap-4 justify-between">
                                <div class="flex items-center space-x-2">
                                    <label class="text-sm font-medium">Select icon to preview:</label>
                                    <USelectMenu
                                        v-model="selectedIcon"
                                        :options="iconOptions"
                                        placeholder="Choose an icon..."
                                        class="w-64"
                                    />
                                </div>

                                <!-- SVG Preview -->
                                <div v-if="selectedIcon && iconSvg" class="flex items-center space-x-4">
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm">16px:</span>
                                        <div class="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center"
                                            v-html="iconSvg"></div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm">24px:</span>
                                        <div class="w-6 h-6 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center"
                                            v-html="iconSvg"></div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm">32px:</span>
                                        <div class="w-8 h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center"
                                            v-html="iconSvg"></div>
                                    </div>
                                    <div v-if="selectedIconInfo" class="text-xs text-gray-500 dark:text-gray-400 ml-4">
                                        <div>Original: {{ selectedIconInfo.width }}×{{ selectedIconInfo.height }}px</div>
                                        <div v-if="selectedIconInfo.detectedSize">Detected size: {{ selectedIconInfo.detectedSize }}px</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <template #footer>
                    <div class="flex justify-end">
                        <UButton @click="isOpen = false" variant="solid" color="gray" size="sm">
                            Close
                        </UButton>
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const isOpen = ref(false)
const testResults = ref(null)
const selectedIcon = ref('')
const currentIconSet = ref(null)

const toast = useToast()

// Handle file drop
const handleDrop = (event) => {
    event.preventDefault()
    const files = Array.from(event.dataTransfer.files)
    processFile(files[0])
}

// Handle file selection
const handleFileSelect = (event) => {
    const file = event.target.files[0]
    processFile(file)
}

// Process uploaded JSON file
const processFile = async (file) => {
    if (!file) return

    if (!file.name.endsWith('.json')) {
        toast.add({
            title: 'Invalid file type',
            description: 'Please upload a JSON file',
            color: 'red'
        })
        return
    }

    try {
        const content = await file.text()
        const iconSet = JSON.parse(content)

        // Validate the IconifyJSON
        const results = await validateIconifyJSON(iconSet, file.size)
        testResults.value = results
        currentIconSet.value = iconSet

        if (results.isValid) {
            toast.add({
                title: 'Validation successful',
                description: `Valid IconifyJSON with ${results.info.iconCount} icons`,
                color: 'green'
            })
        } else {
            toast.add({
                title: 'Validation failed',
                description: `Found ${results.errors.length} errors`,
                color: 'red'
            })
        }

    } catch (error) {
        console.error('File processing error:', error)
        testResults.value = {
            isValid: false,
            errors: [`JSON parsing error: ${error.message}`],
            info: { iconCount: 0, aliasCount: 0, fileSize: file.size },
            icons: [],
            aliases: []
        }

        toast.add({
            title: 'File error',
            description: 'Invalid JSON file',
            color: 'red'
        })
    }
}

// Validate IconifyJSON structure
const validateIconifyJSON = async (iconSet, fileSize) => {
    const errors = []
    const icons = []
    const aliases = []

    try {
        // Check required properties
        if (!iconSet.prefix || typeof iconSet.prefix !== 'string') {
            errors.push('Missing or invalid prefix')
        }

        if (!iconSet.icons || typeof iconSet.icons !== 'object') {
            errors.push('Missing or invalid icons object')
        } else {
            // Validate each icon
            for (const [name, icon] of Object.entries(iconSet.icons)) {
                if (!icon.body || typeof icon.body !== 'string') {
                    errors.push(`Icon "${name}" missing or invalid body`)
                }
                if (typeof icon.width !== 'number' || typeof icon.height !== 'number') {
                    errors.push(`Icon "${name}" missing or invalid dimensions`)
                }
                icons.push(name)
            }
        }

        // Check aliases
        if (iconSet.aliases && typeof iconSet.aliases === 'object') {
            for (const [name, alias] of Object.entries(iconSet.aliases)) {
                if (!alias.parent || typeof alias.parent !== 'string') {
                    errors.push(`Alias "${name}" missing or invalid parent`)
                } else if (!iconSet.icons[alias.parent]) {
                    errors.push(`Alias "${name}" references non-existent parent "${alias.parent}"`)
                }
                aliases.push({ name, parent: alias.parent })
            }
        }

        return {
            isValid: errors.length === 0,
            errors,
            info: {
                prefix: iconSet.prefix || 'unknown',
                iconCount: icons.length,
                aliasCount: aliases.length,
                fileSize
            },
            icons,
            aliases
        }

    } catch (error) {
        return {
            isValid: false,
            errors: [`Validation error: ${error.message}`],
            info: { iconCount: 0, aliasCount: 0, fileSize },
            icons: [],
            aliases: []
        }
    }
}

// Analyze icon organization to understand single vs multiple size patterns
const iconGroups = computed(() => {
    if (!testResults.value || !testResults.value.icons) {
        return { single: [], multiple: [] }
    }

    const groups = new Map()
    const single = []
    const multiple = []

    // Group icons by base name (remove size suffix if present)
    testResults.value.icons.forEach(iconName => {
        // Check if icon name ends with size pattern like -18 or -24
        const match = iconName.match(/^(.+)-(18|24)$/)
        if (match) {
            const [, baseName, size] = match
            if (!groups.has(baseName)) {
                groups.set(baseName, [])
            }
            groups.get(baseName).push({ icon: iconName, size: parseInt(size) })
        } else {
            // No size suffix, treat as single size icon
            single.push({
                baseName: iconName,
                icon: iconName,
                size: getIconDimensions(iconName)?.width || 'unknown'
            })
        }
    })

    // Process grouped icons
    for (const [baseName, iconList] of groups.entries()) {
        if (iconList.length > 1) {
            // Multiple sizes
            multiple.push({
                baseName,
                icons: iconList.sort((a, b) => a.size - b.size).map(item => item.icon),
                sizes: iconList.map(item => item.size).sort((a, b) => a - b)
            })
        } else {
            // Single size (but with size suffix)
            const item = iconList[0]
            single.push({
                baseName: baseName,
                icon: item.icon,
                size: item.size
            })
        }
    }

    return { single, multiple }
})

// Get icon size from name pattern or dimensions
const getIconSize = (iconName) => {
    // Try to extract size from name pattern
    const match = iconName.match(/-(\d+)$/)
    if (match) {
        return parseInt(match[1])
    }
    
    // Fallback to actual dimensions
    const dimensions = getIconDimensions(iconName)
    return dimensions?.width || null
}

// Get icon dimensions
const getIconDimensions = (iconName) => {
    if (!currentIconSet.value?.icons?.[iconName]) return null
    const icon = currentIconSet.value.icons[iconName]
    return { width: icon.width, height: icon.height }
}

// Generate SVG for any icon
const generateIconSvg = (iconName) => {
    if (!iconName || !currentIconSet.value) return null

    try {
        const iconSet = currentIconSet.value
        let iconData = iconSet.icons[iconName]

        // If not found in icons, check aliases
        if (!iconData && iconSet.aliases && iconSet.aliases[iconName]) {
            const alias = iconSet.aliases[iconName]
            iconData = iconSet.icons[alias.parent]

            // Apply alias transformations if any
            if (iconData) {
                iconData = { ...iconData, ...alias }
                delete iconData.parent
            }
        }

        if (!iconData || !iconData.body) return null

        const width = iconData.width || 24
        const height = iconData.height || 24
        const viewBox = iconData.viewBox || `0 0 ${width} ${height}`

        return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="${viewBox}" fill="currentColor">${iconData.body}</svg>`

    } catch (error) {
        console.error('SVG generation error:', error)
        return null
    }
}

// Generate options for icon selector with size info
const iconOptions = computed(() => {
    if (!testResults.value) return [{ label: 'Choose an icon...', value: '' }]
    
    const options = [{ label: 'Choose an icon...', value: '' }]
    
    // Add icons with size info
    testResults.value.icons.forEach(iconName => {
        const size = getIconSize(iconName)
        const label = size ? `${iconName} (${size}px)` : iconName
        options.push({ label, value: iconName })
    })
    
    // Add aliases
    testResults.value.aliases.forEach(alias => {
        options.push({ 
            label: `${alias.name} → ${alias.parent} (alias)`, 
            value: alias.name 
        })
    })

    return options
})

// Get selected icon info
const selectedIconInfo = computed(() => {
    if (!selectedIcon.value || !currentIconSet.value) return null
    
    const dimensions = getIconDimensions(selectedIcon.value)
    const detectedSize = getIconSize(selectedIcon.value)
    
    return {
        ...dimensions,
        detectedSize
    }
})

// Generate SVG for selected icon
const iconSvg = computed(() => {
    return generateIconSvg(selectedIcon.value)
})

// Format file size
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Clear selection when test results change
watch(testResults, () => {
    selectedIcon.value = ''
})
</script>

<style scoped>
.scroller {
  height: 100%;
}

.vue-recycle-scroller__item-wrapper {
  box-sizing: border-box;
}
</style>