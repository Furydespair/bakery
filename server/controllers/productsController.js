const { Products } = require("../models/models")
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')

class ProductController {
    async addProducts(req, res, next) {

        try {
            let {name, description, quantity, price,} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Products.create({name, description, quantity, price, img: fileName});
        
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAllProducts (req, res){
        const product = await Products.findAll()
        return res.json(product) 

    }


    async delProduct (req, res){
        const {name} = req.body
        const deleted = await Products.destroy({
            where: {name: name} 
        })
        return res.json({message: 'Удаление произолшло успешно!'})

    }

    async changeProductCount (req, res){
        const {name, quantity} = req.body
        const updated = await Products.update({quantity: quantity},{where: {name: name}})
        return res.json(updated)

    }
}
module.exports = new ProductController()