import Parse from "parse/node.js";

// Cache implementation
let cachedCategories = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const VITE_PARSE_APP_ID = import.meta.env.VITE_PARSE_APP_ID;
const VITE_PARSE_KEY = import.meta.env.VITE_PARSE_KEY;
// Prefer the internal Docker network URL for server-to-server calls so this
// doesn't depend on the external domain/Traefik being reachable; falls back
// to the public URL for non-containerized setups (e.g. local `nuxt dev`).
const VITE_PARSE_SERVER_URL = import.meta.env.PARSE_SERVER_URL || import.meta.env.VITE_PARSE_SERVER_URL;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;
  const now = Date.now();
  
  // Return cached data if still valid
  if (cachedCategories && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedCategories;
  }

  Parse.initialize(VITE_PARSE_APP_ID, VITE_PARSE_KEY);
  Parse.serverURL = VITE_PARSE_SERVER_URL;

  let query = new Parse.Query('categories');
  let categories = [];

  try {
    const queryResults = await query.find();
    // console.log('queryResults: ', queryResults)
    queryResults.forEach((result) => {
      categories.push({
        categoryName: result.get('categoryName'),
        noOfIcons: result.get('count'),
        icon: result.get('icon'),
        id: result.id,
      });
    });
    
    // Cache the results
    cachedCategories = categories;
    cacheTimestamp = now;
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch categories'
    });
  }
})
