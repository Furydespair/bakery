import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';

const Home = () => {
    const {products} = useContext(Context)
    const [productsList, setProductsList] = useState([])
    // const getProducts = async () => {
    //     await products.getAllProduts().then(res => setProductsList(products._productsList))
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [products._productsList.length])

    return (
        <div>
            <h1>Наши булочки</h1>
            <div>
                
            </div>
        </div>
    );
};

export default Home;