import { $authHost } from "../http"

const RequestService = {
    async createRequest(productName, quantity, status){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/request/createRequest", {productName, quantity, status}))
        })
    },

    async updStatus(id, status){
        return new Promise((resolve, reject) => {
            resolve($authHost.put("api/request/updStatus", {id, status}))
        })
    },

    async getAllRequest(){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/request/getAllRequest"))
        })
    },

    async getRequestById(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/request/" + id))
        })
    },

    async delOldRequest(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/request/delOldRequest",{id}))
        })
    }
}

export default RequestService;