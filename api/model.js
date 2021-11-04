const db = require('../data/db-config')

async function getRecipeById() {
    const result = await db('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .join('ingredients as in')
        .join('steps_ingredients as si')
        .select('r.recipe_id', 'r.recipe_name', 'r.created_at', 's.step_number', 's.step_instructions', 's.step_id', 'in.ingredient_name', 'in.ingredient_id', 'quantity')
    // return result

    const recipe = { steps:[] }

    result.map(recipes => {
        recipe.recipe_name = recipes.recipe_name
        recipe.recipe_id = recipes.recipe_id
        recipe.created_at = recipes.created_at
    })
    return recipe
}

module.exports = {
    getRecipeById,
}