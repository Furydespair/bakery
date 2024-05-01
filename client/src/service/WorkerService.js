import { $authHost, $host } from "../http"

const WorkerService = {
    async registration(email, password, role){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/worker/reg", {email, password, role}))
        })
    },
    
    async login(email, password){
        return new Promise((resolve, reject) => {
            resolve($host.post("api/worker/login", {email, password}))
        })
    },

    async auth(){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/worker/auth"))
        })
    },

    async deleteWorker(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/worker/uvolitWorker", {id}))
        })
    },

    async logout(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/worker/logout", {id}))
        })
    }
}

export default WorkerService;