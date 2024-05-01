import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';

const Home = () => {
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
        <div>
            <h1>Наши булочки</h1>
            <div>
                {productsList.length > 0 && productsList.map(product => 
                    <div className='mb-3 me-2 ms-2' >
                        <img src={process.env.REACT_APP_API_URL + product.img} alt='img'/>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.quantity}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default Home;