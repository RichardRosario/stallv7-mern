const express = require('express')

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Hello, this is from routes/user')
})

module.exports = router