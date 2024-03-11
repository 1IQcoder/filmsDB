const { Schema, model } = require('mongoose')

const Film = new Schema({
    title: {type: String, unique: true, required: true},
    director: {type: String, unique: false, required: true},
    year: {type: Number, unique: false, required: true},
    genre: {type: String, unique: false, required: true},
    duration: {type: Number, unique: false, required: true},
    awards: {type: Boolean, unique: false, required: true},
    actors: [{
        actor: { type: Schema.Types.ObjectId, ref: 'Actor' },
        role: {type: String, unique: false, required: true}
    }]
})

module.exports = model('Film', Film)








