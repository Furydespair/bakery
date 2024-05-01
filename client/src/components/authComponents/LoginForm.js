import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { HOMEROUTER, REGROUTER } from '../../utils/consts';
import { Context } from '../..';

const LoginForm = () => {
    const {worker} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = async () => {
        await worker.login(email, password).then(res => navigate(HOMEROUTER))
    }
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="button" onClick={login}>
          Войти
        </Button>
      </Form>
    );
};

export default LoginForm;