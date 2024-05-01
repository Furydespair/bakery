import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { HOMEROUTER, LOGINROUTER } from '../utils/consts';
import { Context } from '..';

const RegForm = () => {
    const {worker} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const navigate = useNavigate()
    const register = async () => {
        await worker.registration(email, password, role).then(res => navigate(HOMEROUTER))
    }
    return (
        <Form className='w-25'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Role" value={role} onChange={e => setRole(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="button" onClick={register}>
          Зарегистрировать сотрудницу
        </Button>
      </Form>
    );
};

export default RegForm;