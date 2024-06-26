import {makeAutoObservable} from "mobx";
import RequestService from "../service/RequestService";

export default class RequestStore {
    constructor() {
        this._requestDetails = {}
        this._requestList = []
        makeAutoObservable(this)
    }

    setRequestDetails(details) {
        this._requestDetails = details
    }
    setRequestList(list) {
        this._requestList = list
    }



    async createRequest(productName, quantity, status){
        try {
            const {data} = await RequestService.createRequest(productName, quantity, status)
            this.setRequestDetails(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async updStatus(productName, status) {
        try {
            const {data} = await RequestService.updStatus(productName, status)
            this.setRequestDetails(data)
            console.log(data)
            return data
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async getAllRequest() {
        try {
            const {data} = await RequestService.getAllRequest()
            this.setRequestList(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getRequestById(id) {
        try {
            const {data} = await RequestService.getRequestById(id)
            this.setRequestDetails(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async delOldRequest(id) {
        try {
            const {data} = await RequestService.delOldRequest(id)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}