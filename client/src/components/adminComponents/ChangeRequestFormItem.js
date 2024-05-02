import React, { useContext, useState } from 'react';
import { Context } from '../..';
import Button from 'react-bootstrap/Button';

const ChangeRequestFormItem = ({requestItem}) => {
const [status, setStatus] = useState(requestItem.status) 
const{request} = useContext(Context)
const [activ, setActiv] = useState(false)
const updStatus = async () => {
  await request.updStatus(requestItem.id, status)
  setActiv(false)
}
const changeStatus = (e) => {
  setStatus(e.target.value)
  setActiv(true)
}

    return (
        <tr>
          <td>{requestItem.id}</td>
          <td>{requestItem.productName}</td>
          <td>{requestItem.quantity}</td>
          <td><input type='text' value={status} onChange={changeStatus}/>
          </td>{
            activ && <Button onClick={updStatus}> 
              Ок
            </Button>
          }
        </tr>
    );
};

export default ChangeRequestFormItem;