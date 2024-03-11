const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const apiRouter = require('./routers/apiRouter')

const app = express()

app.use(express.json())
app.use('/api', apiRouter)

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()