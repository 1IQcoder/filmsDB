const { Schema, model } = require('mongoose')

const Actor = new Schema({
    firstname: {type: String, unique: false, required: true},
    lastname: {type: String, unique: false, required: true},
    birthday: {type: Date, unique: false, required: true},
    img: {type: String, unique: true, required: false},
    biography: {type: String, unique: false, required: true},
    // films: [{ 
    //     film: {ref: 'Film'},
    //     role: {ref: 'Role'}
    // }]
})

module.exports = model('Actor', Actor)











