import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMINROUTER, HOMEROUTER, LOGINROUTER, REGROUTER } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { Context } from '..';
import './styles/header.css'
const Header = () => {
    const {worker} = useContext(Context)
    const navigate = useNavigate()
    const logout = async () => {
        await worker.logout(worker.worker.id)
    }
    return (
        <div className='w-100 header'>
            <div className='w-75 me-auto ms-auto header_nav_bar'>
                <div className={`header_nav_section ${worker.worker.role === 'Owner' ? 'w-50' : 'w-25'}`}>
                    <div className='header_logo' onClick={()=> navigate(HOMEROUTER)}>

                    </div>
                    <NavLink className='text-decoration-none text-black fs-3' to={HOMEROUTER}>Главная</NavLink>
                    <NavLink className='text-decoration-none text-black fs-3' to={ADMINROUTER}>Авантюры</NavLink>
                    {worker.worker.role === 'Owner' && <NavLink className='text-decoration-none text-black fs-3' to={REGROUTER}>Добавить работницу</NavLink>}
                </div>
                {worker.isAuth ? <Button variant="dark" onClick={logout}>Выйти</Button> : <Button variant="dark" onClick={() => navigate(LOGINROUTER)}>Войти</Button>}
            </div>
        </div>
    );
};

export default Header;