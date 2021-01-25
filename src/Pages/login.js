import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import {Container, Col, Row, Form, Button, Image} from "react-bootstrap";

function Login(){
    const [validated, setValidated] = useState(false);
    const [credentials, setCredentials] = useState({ email: "dummyuser@acme.com", password: "welcome"})

    const history = useHistory();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if(credentials.email === 'dummyuser@acme.com' && credentials.password === "welcome"){
            history.push('/');
        }

    }

    return (
        <Container>
            <Row className="justify-content-sm-center">
                <Col sm="5" className="col-sm-auto">
                    <div className="login-container">
                        <div className="text-center mb-4"><Image src="/images/acme-logo.svg" height="34px" /></div>
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Form.Group>
                                <Form.Label htmlFor="Email"> Email</Form.Label>
                                <Form.Control id="Email" type="email" placeholder="Email address"
                                              defaultValue={credentials.email} required/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label htmlFor="Password">Password</Form.Label>
                                <Form.Control id="Password" type="password" placeholder="Password"
                                              onChange={event => {setCredentials({...credentials, password: event.target.value})}}
                                              defaultValue={credentials.password} min-length='7' required/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" variant="primary" className="mt-2" block>Sign In</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Login