const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.send('Ey mate youre doin great!')
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