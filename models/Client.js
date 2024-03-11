const { Schema, model } = require('mongoose')

const Client = new Schema({
    title: {type: String, unique: true, required: true},
    
})

module.exports = model('Client', Client)