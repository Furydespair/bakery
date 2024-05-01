import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../..';
import RegForm from '../../components/authComponents/RegForm';
import LoginForm from '../../components/authComponents/LoginForm';
import "./auth.css"

const Auth = () => {
    const {worker} = useContext(Context)
    

    return (
        <div className='authpage d-flex justify-content-center align-items-center'>
            {worker.isAuth ? <RegForm/> : <LoginForm/>}
        </div>
    );
};

export default Auth;