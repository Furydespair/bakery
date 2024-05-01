import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import ProductList from '../../components/homeComponents/ProductList';
import './home.css'
const Home = () => {
    
    return (
        <div className='home_wrapper d-flex justify-content-center align-items-center flex-column '>
            <h1 className='text-center mt-3 mb-5 home_title'>Наши булочки</h1>
            <ProductList/>
        </div>
    );
};

export default Home;