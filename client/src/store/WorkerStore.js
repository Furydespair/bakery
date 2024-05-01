import {makeAutoObservable} from "mobx";
import {jwtDecode} from "jwt-decode";
import WorkerService from "../service/WorkerService";

export default class WorkerStore {
    constructor() {
        this._isAuth = false
        this._worker = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setWorker(worker) {
        this._worker = worker
    }

    async registration(email, password, role){
        const {data}=await WorkerService.registration(email, password, role) 
        localStorage.setItem('token', data.token)
        const response = jwtDecode(data.token)
        this.setWorker(response)
        this.setIsAuth(true)
        return response
    }

    async login(email, password){
        try {
            const {data} = await WorkerService.login(email, password)
            localStorage.setItem('token', data.token)
            const response = jwtDecode(data.token)
            console.log(response)
            this.setWorker(response)
            this.setIsAuth(true)
            return response
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }


    async logout(id) {
        try {
            const {data} = await WorkerService.logout(id)
            localStorage.removeItem('token')
            this.setIsAuth(false)
            this.setWorker({})
            return true
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async checkAuth() {
        try {
            const {data} = await WorkerService.auth()
            localStorage.setItem('token', data.token)
            const response = jwtDecode(data.token)
            console.log(response, 'auth')
            this.setWorker(response)
            this.setIsAuth(true)
            return response
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async deleteWorker(id) {
        try {
            const {data} = await WorkerService.deleteWorker(id)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    get isAuth() {
        return this._isAuth
    }
    get worker() {
        return this._worker
    }
}