const db = require('../data/db-config')

async function getRecipeById() {
    const result = await db('recipes as r')
        .innerJoin('steps as s', 's.recipe_id', 'r.recipe_id')
        .innerJoin('ingredients as in')
        .innerJoin('steps_ingredients as si', 'si.step_id', 's.step_id')
        .select('r.recipe_id', 'r.recipe_name', 'r.created_at', 's.step_number', 's.step_instructions', 's.step_id', 'in.ingredient_name', 'in.ingredient_id', 'quantity')
    // return result    

    const recipe = { steps:[] }

    result.map(recipes => {
        recipe.recipe_name = recipes.recipe_name
        recipe.recipe_id = recipes.recipe_id
        recipe.created_at = recipes.created_at
        recipe.steps.push({
            step_number: recipes.step_number,
            step_instructions: recipes.step_instructions,
            step_id: recipes.step_id,
            ingredients: [{
                ingredient_name: recipes.ingredient_name,
                ingredient_id: recipes.ingredient_id,
                quantity: recipes.quantity
            }],
        })
    })
    return recipe
}

module.exports = {
    getRecipeById,
}