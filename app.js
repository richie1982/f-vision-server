const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const homeRoute = require('./routes/home')

mongoose.connect(process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("DB connected")
)

app.use(express.json())

app.use('/', homeRoute)

const port = process.env.port || 3001
app.listen(port, () => {
    console.log(`Port ${port} connected...`)
})