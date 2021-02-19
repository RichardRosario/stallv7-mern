const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const userRoutes = require('./routes/user')

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(() => console.log('We are connected to DB'))

// app
const app = express()

// routes

app.use(userRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`)
})