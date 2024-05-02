import {makeAutoObservable} from "mobx";
import ProductsService from "../service/ProductsService";

export default class ProductsStore {
    constructor() {
        this._productDetails = {}
        this._productsList = []
        makeAutoObservable(this)
    }

    setProductDetails(details) {
        this._productDetails = details
    }
    setProductsList(list) {
        this._productsList = list
    }



    async addProducts(formData){
        try {
            const {data} = await ProductsService.addProducts(formData)
            this._productDetails(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getAllProduts() {
        try {
            const {data} = await ProductsService.getAllProducts()
            this.setProductsList(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }


    async changeProductCounts(name, quantity) {
        try {
            const {data} = await ProductsService.changeProductCounts(name, quantity)
            this.setProductDetails(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async delProducts(name) {
        try {
            const {data} = await ProductsService.delProducts(name)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

}