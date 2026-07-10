import { algoliasearch } from 'algoliasearch';

export default defineEventHandler(async (event) => {
  const VITE_ALGOLIA_APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID;
  const VITE_ALGOLIA_SEARCH_KEY = import.meta.env.VITE_ALGOLIA_SEARCH_KEY;
  const VITE_ALGOLIA_INDEX = import.meta.env.VITE_ALGOLIA_INDEX;

  const searchClient = algoliasearch(VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_SEARCH_KEY);

  const query = await readBody(event);
  console.log('query: ', query)

  const getNumberOfIcons = query.getNumberOfIcons;
  let numberOfIcons = 0;

  // try {
  //   if(getNumberOfIcons) {
  //     const noOfRecords = await searchClient.searchSingleIndex({
  //       indexName: VITE_ALGOLIA_INDEX,
  //       searchParams: {
  //         query: '',
  //         hitsPerPage: 0,
  //         attributesToRetrieve: [],
  //         attributesToHighlight: [],
  //         analytics: false,
  //       }
  //     });
  //     numberOfIcons = noOfRecords.nbHits;
  //     console.log('numberOfIcons: ', numberOfIcons)
  //   }
  // } catch (error) {
  //   console.log('Error performing Algolia search:', error);
  //   throw createError({
  //     statusCode: 500,
  //     statusMessage: 'Error performing Algolia search count',
  //     data: error
  //   }); 
  // }

  try {
    const searchResult = await searchClient.searchSingleIndex({
      indexName: VITE_ALGOLIA_INDEX,
      searchParams: {
        query: query.searchValue,
        filters: query.filters,
        page: query.page,
        hitsPerPage: query.hitsPerPage,
        attributesToHighlight: [],
        attributesToRetrieve: ['iconName', 'iconImage18px', 'iconImage24px', 'objectID', 'category']
      }
    });
    
    return {
      hits: searchResult.hits,
      nbHits: searchResult.nbHits,
      numberOfIcons: numberOfIcons,
      page: searchResult.page,
      nbPages: searchResult.nbPages
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