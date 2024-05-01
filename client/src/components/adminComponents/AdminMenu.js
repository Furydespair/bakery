import React from 'react';
import '../styles/adminMenu.css'
const AdminMenu = ({switchTab}) => {
    

    return (
        <div className='h-75 w-25 d-flex flex-column ms-2 me-5 admin_menu'>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('products')}>Добавление товара</div>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('request')}>Создание заявки</div>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('changeRequest')}>Изменение статуса заявки</div>
            <div className='w-100 text-center admin_menu_item' onClick={() => switchTab('worker')}>Список работниц</div>
        </div>
    );
};

export default AdminMenu;