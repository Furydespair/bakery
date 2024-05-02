import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import ProductList from '../../components/homeComponents/ProductList';
import './home.css'
import Carousel from '../../components/CarouselComponents/Carousel';
import Container from 'react-bootstrap/Container';
const Home = () => {
    
    return (
        <Container className='home_wrapper'>
            <h1 className='text-center mt-3 mb-5 home_title'>Наши булочки</h1>
            <Container>
                <Carousel/>
            </Container>
        </Container>
    );
};

export default Home;