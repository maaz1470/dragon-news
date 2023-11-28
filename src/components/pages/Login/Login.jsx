import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { user, userSignIn } = useContext(AuthContext)
    const location = useLocation();

    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/category/0'

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then(response => {
                console.log(response.user)
                navigate(from,{
                    replace: true
                })
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login!!!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Don't Have and Account?<Link to={'/register'}>Register</Link>
                </Form.Text>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>


                <Form.Text className="text-success">
                    {success}
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Login;