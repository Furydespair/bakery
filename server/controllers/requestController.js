const { Request } = require("../models/models")

class RequestController {
    async createRequest(req, res){
        const {productName, quantity, status} = req.body
        const request = await Request.create({
            productName, quantity, status
        })
        return res.json(request)
    }

    async updStatus (req, res){
        const {id, status} = req.body
        const updated = await Request.update({status: status},{where: {id: id}})
        const request = await Request.findOne({where: {id: id}})
        return res.json(request)

    }

    async getAllRequest (req, res, next){
        const request = await Request.findAll()
        return res.json(request) 
    }

    async getRequestById (req, res){
        const {id} = req.params
        const request = await Request.findOne(
            {
                where: {id},
            },
        )
        return res.json(request)

    }

    async delOldRequest (req, res) {
        const {id} = req.body
        const deleted = await Request.destroy({
            where: {id: id} 
        })
        return res.json({message: 'Удаление произолшло успешно!'})
    }
}
module.exports = new RequestController()