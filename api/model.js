const db = require('../data/db-config')

async function getRecipeById() {
    const result = await db('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .join('ingredients as in')
    return result
}

module.exports = {
    getRecipeById,
}