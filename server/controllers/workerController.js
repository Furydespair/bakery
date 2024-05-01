const ApiError = require("../error/ApiError")
const { Worker } = require("../models/models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class WorkerController {
    async registration(req, res, next){
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await Worker.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const employer = await Worker.create({email, role, password: hashPassword})
        const token = generateJwt(employer.id, employer.email, employer.role)
        return res.json({token})
    }

    async login (req, res, next){
        const {email, password} = req.body
        const worker = await Worker.findOne({where: {email}})
        if (!worker) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, worker.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(worker.id, worker.email, worker.role)
        return res.json({token})
    }

    async auth (req, res, next){
        const token = generateJwt(req.worker.id, req.worker.email, req.worker.role)
        return res.json({token})
    }

    async deleteWorker (req, res){
        const {id} = req.body
        const deleted = await Worker.destroy({
            where: {id: id} 
        })
        return res.json({message: 'Удаление произошло успешно!'})
    }

    async logout(req, res) {
        const {id} = req.body
        const deleteToken = await Worker.update ({token: null}, {where:{id: id}})
        return res.json('succes')
    }

    async getAllWorkers(req, res, next){
        const workers = await Worker.findAll()
        return res.json(workers) 
    }

}
module.exports = new WorkerController()