const Router = require('express')
const workerController = require('../controllers/workerController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware')
const router = new Router()


router.post('/login', workerController.login)
router.post('/reg', checkRoleMiddleware('Owner'), workerController.registration)
router.get('/auth', checkAuthMiddleware, workerController.auth)
router.delete('/uvolitWorker', workerController.deleteWorker)
router.post('/logout', workerController.logout)

module.exports = router