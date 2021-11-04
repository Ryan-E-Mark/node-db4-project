const express = require('express')
const Recipes = require('./model')
const { getRecipeById } = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipes.getRecipeById(req.params)
        res.json(recipes)
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