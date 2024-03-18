const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL
const mongoose = require('mongoose')
const apiRouter = require('./routers/apiRouter')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)

const start = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()