const express = require('express')

const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('This is node..')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`)
})