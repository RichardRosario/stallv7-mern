const express = require('express')

const app = express()
require('dotenv').config()

app.get('/', (req,res)=>{
    res.send('hello this is from node')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})