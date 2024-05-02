import React, { useContext, useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductList from '../homeComponents/ProductList';

import { Context } from '../..';
import ProductCard from '../homeComponents/ProductCard';
const Carousel = () => {
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
        <OwlCarousel 
        className='owl-theme' 
        margin={50}
        loop
        items={3}
        dots={false}
        >
           {productsList.length > 0 && productsList.map(product => 
                    <ProductCard product={product}/>)}
        </OwlCarousel>
    );
};

export default Carousel;