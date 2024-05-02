import { $authHost, $host } from "../http"

const ProductsService = {
    async addProducts(formData){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/products/addProducts", formData))
        })
    },

    async getAllProducts(){
        return new Promise((resolve, reject) => {
            resolve($host.get("api/products/getAllProducts"))
        })
    },


    async changeProductCount(name, quantity){
        return new Promise((resolve, reject) => {
            resolve($authHost.put("api/products/changeProductCount", {name, quantity}))
        })
    },

    async delProducts(name){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/products/delProducts",{name}))
        })
    },
}

export default ProductsService;