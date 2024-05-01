import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import Button from 'react-bootstrap/esm/Button';

const ChangeRequestForm = () => {
    const {request} = useContext(Context)
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    async function createRequest(){
        await request.updStatus(name, status)
    }
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Название продукта</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Название продукта" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Статус</Form.Label>
          <Form.Control type="text" value={status} onChange={e => setStatus(e.target.value)} placeholder="Статус" />
        </Form.Group>
        <Button type='button' onClick={createRequest}>
            Создать
        </Button>
      </Form>
    );
};

export default ChangeRequestForm;