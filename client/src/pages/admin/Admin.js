import React, { useState } from 'react';
import AdminMenu from '../../components/adminComponents/AdminMenu';
import AdminTab from '../../components/adminComponents/AdminTab';
import './admin.css'
const Admin = () => {
    const [currentrTab, setCurrentTab] = useState('products')
    const switchTab = (tab) => setCurrentTab(tab)
    return (
        <div className='w-100 d-flex align-items-center admin_page'>
            <AdminMenu switchTab={switchTab}/>
            <AdminTab currentTab={currentrTab}/>
        </div>
    );
};

export default Admin;