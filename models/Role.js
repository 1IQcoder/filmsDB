const { Schema, model } = require('mongoose')

const Role = new Schema({
    firstname: {type: String, unique: false, required: true},
    lastname: {type: String, unique: false, required: true},
    birthday: {type: String, unique: false, required: true},
    img: {type: String, unique: true, required: false},
    biography: {type: String, unique: false, required: true},
})

module.exports = model('Role', Role)








