import React, { useContext, useEffect, useMemo, useState } from 'react';
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
  const compareNum = (a, b) => a.id - b.id
  const dynamicRequestList = useMemo(() => {
    return requestList.slice().sort(compareNum)
  })
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
      {requestList.length > 0 && dynamicRequestList.map(request => 
          <ChangeRequestFormItem requestItem={request}/>)}
    </tbody>
  </Table>
  );
};

export default observer(ChangeRequestForm);