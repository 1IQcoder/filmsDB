const Router = require('express')
const router = new Router()
const Actor = require('../models/Actor')

async function getActor(req, res) {
    try {
        const { firstname, lastname } = req.body

        const candidate = await Actor.findOne({ firstname: firstname, lastname: lastname })

        if (candidate) {
            return res.status(200).json({ id: candidate._id })
        } else{
            return res.status(404).json({ message: "Актер не найден" })
        }
        
    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

async function getAllActors(req, res) {
    try {

        const actors = await Actor.find()
        res.status(200).json({ actorsList: actors })

    } catch (err) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

async function addActor(req, res) {
    try {
        const { firstname, lastname, birthday, biography, imgPath } = req.body

        const newActor = new Actor({
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            biography: biography,
            img: imgPath
        })

        await newActor.save()
        return res.status(200).json({ message: "Актер успешно добавлен" })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

async function deleteActor(req, res) {
    try {
        const { firstname, lastname } = req.body

        await Actor.deleteOne({ firstname: firstname, lastname: lastname })
        return res.status(200).json({ message: "Актер успешно удален" })
        
    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }
}

router.get('/getall', getAllActors)
router.post('/get', getActor)
router.post('/add', addActor)
router.post('/delete', deleteActor)

module.exports = router









