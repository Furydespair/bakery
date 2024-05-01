import React, { useContext } from 'react';
import '../styles/adminMenu.css'
import { Context } from '../..';
const AdminMenu = ({switchTab}) => {
    const {worker} = useContext(Context)

    return (
        <div className='h-75 w-25 d-flex flex-column ms-2 me-5 admin_menu'>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('products')}>Добавление товара</div>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('request')}>Создание заявки</div>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('changeRequest')}>Изменение статуса заявки</div>
            {worker.worker.role === "Owner" &&<div className='w-100 text-center admin_menu_item' onClick={() => switchTab('worker')}>Список работниц</div>}
        </div>
    );
};

export default AdminMenu;