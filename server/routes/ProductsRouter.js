const Router = require('express')
const productsController = require('../controllers/productsController')
const router = new Router()



router.post('/addProducts', productsController.addProducts)
router.get('/getAllProducts', productsController.getAllProducts)
router.delete('/delProduct', productsController.delProduct)
router.put('/changeProductCount', productsController.changeProductCount)


module.exports = router