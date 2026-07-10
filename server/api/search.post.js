import { Meilisearch } from 'meilisearch';

// Translates the one Algolia filter pattern this app ever sends
// ("categories.categoryName:<value>") into MeiliSearch filter syntax.
function toMeiliFilter(algoliaFilter) {
  if (!algoliaFilter) return undefined;
  const separatorIndex = algoliaFilter.indexOf(':');
  if (separatorIndex === -1) return undefined;
  const field = algoliaFilter.slice(0, separatorIndex);
  const value = algoliaFilter.slice(separatorIndex + 1);
  return `${field} = "${value.replace(/"/g, '\\"')}"`;
}

export default defineEventHandler(async (event) => {
  const MEILI_URL = import.meta.env.MEILI_URL;
  const MEILI_MASTER_KEY = import.meta.env.MEILI_MASTER_KEY;
  const MEILI_INDEX = import.meta.env.MEILI_INDEX;

  const client = new Meilisearch({ host: MEILI_URL, apiKey: MEILI_MASTER_KEY });
  const index = client.index(MEILI_INDEX);

  const query = await readBody(event);
  console.log('query: ', query)

  try {
    // Algolia's `page` is 0-indexed; MeiliSearch's finite pagination is 1-indexed.
    const meiliPage = (query.page ?? 0) + 1;

    const searchResult = await index.search(query.searchValue, {
      filter: toMeiliFilter(query.filters),
      page: meiliPage,
      hitsPerPage: query.hitsPerPage,
      attributesToRetrieve: ['iconName', 'iconImage18px', 'iconImage24px', 'objectID', 'category']
    });

    return {
      hits: searchResult.hits,
      nbHits: searchResult.totalHits,
      numberOfIcons: searchResult.totalHits,
      page: searchResult.page - 1,
      nbPages: searchResult.totalPages
    };
  } catch (error) {
    console.log('Error performing MeiliSearch search:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error performing MeiliSearch search',
      data: error
    });
  }
})