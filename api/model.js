const db = require('../data/db-config')

async function getRecipeById(recipe_id) {
    const result = await db('recipes as r')
        // .join('steps as s', 's.recipe_id', 'r.recipe_id')
        // .join('ingredients as i')
        // .join('recipe_ingredients as ri')
        .select('r.recipe_id', 'r.recipe_name', 'r.created_at')
        .where('r.recipe_id', recipe_id)
    return result
}

module.exports = {
    getRecipeById,
}