import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Context } from '../..';

const ProductList = () => {
    const {products} = useContext(Context)
    const [productsList, setProductsList] = useState([])
    const getProducts = async () => {
        await products.getAllProduts().then(res => setProductsList(products._productsList))
    }

    useEffect(() => {
        getProducts()
        console.log(productsList)
    }, [products._productsList.length])
    return (
        <div className='w-100 mb-5 d-flex justify-content-around'>
            {productsList.length > 0 && productsList.map(product => 
                    <ProductCard product={product}/>)}
        </div>
    );
};

export default ProductList;