const Router = require('express')
const requestController = require('../controllers/requestController')
const router = new Router()


router.post('/createRequest', requestController.createRequest)
router.put('/updStatus', requestController.updStatus)
router.get('/getAllRequest', requestController.getAllRequest)
router.get('/:id', requestController.getRequestById)
router.delete('/delOldRequest', requestController.delOldRequest)


module.exports = router