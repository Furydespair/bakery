import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '..';
import RegForm from '../components/RegForm';
import LoginForm from '../components/LoginForm';

const Auth = () => {
    const {worker} = useContext(Context)
    

    return (
        <div className='w-100 h-100 mt-5 pt-5 d-flex justify-content-center align-items-center'>
            {worker.isAuth ? <RegForm/> : <LoginForm/>}
        </div>
    );
};

export default Auth;