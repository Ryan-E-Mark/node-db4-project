const express = require('express')
const Recipes = require('./model')
const { getRecipeById } = require('./model')

const router = express.Router()

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipes = await Recipes.getRecipeById(req.params)
        res.send(recipes)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        prodMessage: "Whoops, something went wrong!"
    })
})

module.exports = router