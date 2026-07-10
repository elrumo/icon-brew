// Client-side caching composable
export const useCache = () => {
  const CACHE_KEYS = {
    CATEGORIES: 'iconbrew_categories',
    CATEGORIES_EXPIRY: 'iconbrew_categories_expiry'
  }
  
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  
  const setCache = (key, data, customDuration = CACHE_DURATION) => {
    if (import.meta.client) {
      try {
        localStorage.setItem(key, JSON.stringify(data))
        localStorage.setItem(`${key}_expiry`, (Date.now() + customDuration).toString())
      } catch (error) {
        console.warn('Failed to set cache:', error)
      }
    }
  }
  
  const getCache = (key) => {
    if (!import.meta.client) return null
    
    try {
      const cached = localStorage.getItem(key)
      const expiry = localStorage.getItem(`${key}_expiry`)
      
      if (cached && expiry && Date.now() < parseInt(expiry)) {
        return JSON.parse(cached)
      }
      
      // Clean up expired cache
      localStorage.removeItem(key)
      localStorage.removeItem(`${key}_expiry`)
      return null
    } catch (error) {
      console.warn('Failed to get cache:', error)
      return null
    }
  }
  
  const clearCache = (key) => {
    if (import.meta.client) {
      localStorage.removeItem(key)
      localStorage.removeItem(`${key}_expiry`)
    }
  }
  
  const clearAllCache = () => {
    if (import.meta.client) {
      Object.values(CACHE_KEYS).forEach(key => {
        localStorage.removeItem(key)
        localStorage.removeItem(`${key}_expiry`)
      })
    }
  }
  
  return {
    CACHE_KEYS,
    setCache,
    getCache,
    clearCache,
    clearAllCache
  }
}