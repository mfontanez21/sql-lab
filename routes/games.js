const router = require('express').Router()
const gamesCtrl = require('../controllers/games.js')


router.post('/', gamesCtrl.create)
router.get('/', gamesCtrl.index)
router.put('/:gameId', gamesCtrl.update)

module.exports = router