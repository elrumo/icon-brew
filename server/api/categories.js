import Parse from "parse/node.js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;

  Parse.initialize(config.PARSE_APP_ID, config.PARSE_KEY);
  Parse.serverURL = config.PARSE_SERVER_URL;

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
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch categories'
    });
  }
})
