// Request deduplication utility
const pendingRequests = new Map();

export const dedupedFetch = async (url, options = {}) => {
  const key = `${url}-${JSON.stringify(options)}`;
  
  // If request is already pending, return the existing promise
  if (pendingRequests.has(key)) {
    return pendingRequests.get(key);
  }
  
  // Create new request promise
  const promise = $fetch(url, options);
  pendingRequests.set(key, promise);
  
  try {
    const result = await promise;
    return result;
  } catch (error) {
    throw error;
  } finally {
    // Clean up completed request
    pendingRequests.delete(key);
  }
};

// Clear all pending requests (useful for cleanup)
export const clearPendingRequests = () => {
  pendingRequests.clear();
};

// Get number of pending requests (useful for debugging)
export const getPendingRequestsCount = () => {
  return pendingRequests.size;
};