const Router = require('express')
const router = new Router()
const ProductsRouter = require('./ProductsRouter')
const RequestRouter = require('./RequestRouter')
const WorkerRouter = require('./WorkerRouter')

router.use('/worker', WorkerRouter)
router.use('/products', ProductsRouter)
router.use('/request', RequestRouter)


module.exports = router