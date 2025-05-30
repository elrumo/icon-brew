export default defineEventHandler(async (event) => {
    try {
      const query = getQuery(event)
      const prefix = query.prefix
      
      if (!prefix) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Prefix parameter is required'
        })
      }
  
      // Validate prefix format
      if (!/^[a-z0-9-]+$/.test(prefix)) {
        return {
          available: false,
          message: 'Prefix must only contain lowercase letters, numbers, and hyphens'
        }
      }
  
      // Check if prefix is too short
      if (prefix.length < 2) {
        return {
          available: false,
          message: 'Prefix must be at least 2 characters long'
        }
      }
  
      // Check if prefix is too long
      if (prefix.length > 50) {
        return {
          available: false,
          message: 'Prefix must be less than 50 characters long'
        }
      }
  
      // Reserved prefixes that shouldn't be used
      const reservedPrefixes = [
        'iconify',
        'icon',
        'icons',
        'svg',
        'mdi',
        'fa',
        'fas',
        'far',
        'fab',
        'fal',
        'fad',
        'material',
        'mat',
        'bootstrap',
        'bs',
        'heroicons',
        'feather',
        'lucide',
        'tabler',
        'carbon',
        'fluent',
        'ant',
        'octicon',
        'system',
        'custom',
        'test',
        'demo',
        'example'
      ]
  
      if (reservedPrefixes.includes(prefix.toLowerCase())) {
        return {
          available: false,
          message: 'This prefix is reserved or commonly used. Please choose a more unique prefix.'
        }
      }
  
      // Check against known Iconify icon sets
      const knownPrefixes = await checkIconifyPrefixes(prefix)
      
      if (!knownPrefixes.available) {
        return knownPrefixes
      }
  
      // If we get here, the prefix appears to be available
      return {
        available: true,
        message: 'Prefix appears to be available!'
      }
  
    } catch (error) {
      console.error('Prefix check error:', error)
      
      // Return as available if we can't check (don't block the user)
      return {
        available: true,
        message: 'Unable to verify prefix availability, but it should be fine to use.'
      }
    }
  })
  
  // Check against known Iconify prefixes
  async function checkIconifyPrefixes(prefix) {
    try {
      // Check against Iconify's API to see if the prefix exists
      const response = await fetch(`https://api.iconify.design/collections`)
      
      if (!response.ok) {
        // If API is down, allow the prefix
        return {
          available: true,
          message: 'Could not verify against Iconify collections, but should be safe to use.'
        }
      }
      
      const collections = await response.json()
      
      // Check if prefix exists in any collection
      if (collections[prefix]) {
        return {
          available: false,
          message: `Prefix "${prefix}" is already used by Iconify collection: ${collections[prefix].name}`
        }
      }
  
      // Also check some popular prefixes manually (in case API doesn't have them all)
      const popularPrefixes = [
        'mdi', 'fa', 'fas', 'far', 'fab', 'fal', 'fad', 'material', 'mat', 
        'bootstrap', 'bs', 'heroicons', 'hi', 'feather', 'lucide', 'tabler', 
        'carbon', 'fluent', 'ant', 'octicon', 'simple-icons', 'si', 'devicon', 
        'logos', 'flag', 'emojione', 'twemoji', 'noto', 'openmoji', 'bx', 
        'bxs', 'bxl', 'bi', 'codicon', 'vscode', 'ri', 'ion', 'eva', 'akar',
        'pajamas', 'solar', 'mingcute', 'hugeicons', 'phosphor', 'ph', 'iconamoon',
        'uil', 'uim', 'uis', 'uit', 'majesticons', 'pepicons', 'streamline'
      ]
  
      if (popularPrefixes.includes(prefix.toLowerCase())) {
        return {
          available: false,
          message: `Prefix "${prefix}" is used by a popular icon library. Consider using a more unique prefix.`
        }
      }
  
      return {
        available: true,
        message: 'Prefix is not found in Iconify collections!'
      }
      
    } catch (error) {
      console.error('Error checking Iconify prefixes:', error)
      
      // If there's an error, don't block the user
      return {
        available: true,
        message: 'Could not verify against Iconify collections, but should be safe to use.'
      }
    }
  }