import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import ChangeRequestFormItem from './ChangeRequestFormItem';
import Table from 'react-bootstrap/Table';
import {  observer } from 'mobx-react-lite';

const ChangeRequestForm = () => {
  const {request} = useContext(Context)
  const [requestList, setRequestList] = useState([])
  const getRequests = async () => {
      await request.getAllRequest().then(res => setRequestList(request._requestList))
  }
  useEffect(() => {
      getRequests()
  }, [requestList.length])
  return (
  <Table striped bordered hover size="sm" className='align-self-start'> 
    <thead>
      <tr>
        <th>ID</th>
        <th>Название продукта</th>
        <th>Количество</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      {requestList.length > 0 && requestList.map(request => 
          <ChangeRequestFormItem requestItem={request}/>)}
    </tbody>
  </Table>
  );
};

export default observer(ChangeRequestForm);