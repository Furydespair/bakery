import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import Button from 'react-bootstrap/esm/Button';

const AddRequestForm = () => {
    const {request, products} = useContext(Context)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [currentQuantity, setCurrentQuantity] = useState('')
    const [status, setStatus] = useState('')

    async function createRequest(){
      await request.createRequest(name, quantity, status)
      // setTimeout(()=>{
        // products.getAllProduts().then(res => setCurrentQuantity(prevState => prevState + products._productsList.find(product => product.nameProduct === name)))
        // products.changeProductCounts(name, currentQuantity + quantity)
      // }, 30000)
    }
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Название продукта</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Название продукта" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Количество</Form.Label>
          <Form.Control type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Количество" />
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

export default AddRequestForm;