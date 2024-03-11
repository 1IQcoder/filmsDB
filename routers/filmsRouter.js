const Router = require('express')
const router = new Router()
const Film = require('../models/Film')
const Actor = require('../models/Actor')

async function getFilm(req, res) {
    try {
        
    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

async function addFilm(req, res) {
    try {

        const { title, director, year, genre, duration, awards, actors } = req.body

        const newFilm = new Film({
            title: title,
            director: director,
            year: year,
            genre: genre,
            duration: duration,
            awards: awards,
            actors: actors
        })

        await newFilm.save()
        return res.status(200).json({ message: "Фильм успешно добавлен" })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

async function deleteFilm(req, res) {
    try {
        
    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

router.get('/get')
router.post('/add', addFilm)
router.post('/delete')

module.exports = router












