import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import TableWorkerItem from './TableWorkerItem';
import Table from 'react-bootstrap/Table';
const TableWorker = () => {
    const {worker} = useContext(Context)
    const [workerList, setWorkerList] = useState([])
    const getWorkers = async () => {
        await worker.getAllWorkers().then(res => setWorkerList(worker._workerList))
    }
    useEffect(() => {
        getWorkers()
    }, [worker._workerList.length])
    return (
    <Table striped bordered hover size="sm" className='align-self-start'> 
      <thead>
        <tr>
          <th>ID</th>
          <th>Почта</th>
          <th>Роль</th>
        </tr>
      </thead>
      <tbody>
        {workerList.length > 0 && workerList.map(worker => 
            <TableWorkerItem worker={worker}/>)}
      </tbody>
    </Table>
    );
};

export default TableWorker;