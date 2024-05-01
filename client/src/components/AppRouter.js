import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRouts, publicRouts } from '../Routs';
import Home from '../pages/home/Home';
import { Context } from '..';

const AppRouter = () => {
   const {worker} = useContext(Context)
    return (
        <Routes>
            {worker.isAuth && adminRouts.map(({path, element}) =>
            <Route key={path} path={path} element={element}/>)}
            {publicRouts.map(({path, element}) =>
            <Route key={path} path={path} element={element}/>)}
            <Route key='/' path='*' element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;