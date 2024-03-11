const Router = require('express')
const router = new Router()

const actorsRouter = require('../routers/actorsRouter')
const filmsRouter = require('../routers/filmsRouter')

router.use('/actors', actorsRouter)
router.use('/films', filmsRouter)

module.exports = router















