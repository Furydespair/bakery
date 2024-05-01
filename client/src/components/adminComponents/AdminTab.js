import React, { useContext } from 'react';
import '../styles/admintab.css'
import AddProductsForm from './AddProductsForm';
import AddRequestForm from './AddRequestForm';
import ChangeRequestForm from './ChangeRequestForm';
import TableWorker from './TableWorker';
import { Context } from '../..';
const AdminTab = ({currentTab}) => {
    const {worker} = useContext(Context)
    const checkCurrentTab = () => {
        switch(currentTab) {
            case 'produts':
                return <AddProductsForm/>
                break;
            case 'request':
                return <AddRequestForm/>
                break;
            case 'changeRequest':
                return <ChangeRequestForm/>
                break;
            case 'worker': 
                return <TableWorker/>
                break;
            default:
                return <AddProductsForm/>
        }
    }
    return (
        <div className='w-50 h-75 admin_tab ms-4'>
            {
                checkCurrentTab()
            }
        </div>
    );
};

export default AdminTab;