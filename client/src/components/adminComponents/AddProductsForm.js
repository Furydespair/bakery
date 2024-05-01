import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Context } from '../..';


const AddProductsForm = () => {
    const {products} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [img, setImg] = useState('')

    const createFormData = async () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', +price)
        formData.append('description', description)
        formData.append('quantity', +quantity)
        formData.append('img', img)
        
        await products.addProducts(formData)
    }

    const selectImg = (e) => {
        setImg(e.target.files[0])
        // console.log(img)
    }

    return (
        <Form className='w-75 '>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Название</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Название товара" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Цена</Form.Label>
          <Form.Control type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder="Цена товара" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Описание</Form.Label>
        <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Описание товара" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Количество товара</Form.Label>
        <Form.Control type="text" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Количество" />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Изображение</Form.Label>
        <Form.Control type='file'  onChange={selectImg}/>
      </Form.Group>

      <Button variant="primary" type="button" onClick={createFormData}>
        Добавить
      </Button>
    </Form>
    );
};

export default AddProductsForm;