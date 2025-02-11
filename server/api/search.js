import algoliasearch from 'algoliasearch';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client = algoliasearch(config.public.ALGOLIA_APP_ID, config.public.ALGOLIA_SEARCH_KEY);
  const index = client.initIndex(config.public.ALGOLIA_INDEX);

  const query = await readBody(event);
  console.log('query: ', query)

  try {
    const searchResult = await index.search(query.searchValue, {
      filters: query.filters,
      page: query.page,
      hitsPerPage: query.hitsPerPage,
      attributesToHighlight: null,
    });
    // console.log('searchResult: ', searchResult)
    return searchResult;
    return {
      hits: searchResult.hits,
      nbHits: searchResult.nbHits,
      page: searchResult.page
    };
  } catch (error) {
    console.log('Error performing Algolia search:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error performing Algolia search',
      data: error
    });
  }
})
