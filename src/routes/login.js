/** 

import { LinkContainer } from 'react-router-bootstrap';
*/

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import {FaEye} from 'react-icons/fa';

export default function Login() {


    /**
     * Password hiding adapted from https://codesandbox.io/s/showhide-password-on-toggle-in-react-hooks-95qcz?file=/src/App.js
     */

    const [showPassword, setVisibility] = useState(false);
    const toggleVisibility = () => {
        setVisibility(showPassword ? false : true);
    };

    return (
        <>
            <Container className="welcome">
                <Col>
                    Login
                
                    <Form.Group>
                        <Form.Control
                            placeholder="Username/Email"
                            aria-label="Username/Email"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup>
                            <Form.Control
                                placeholder="Password"
                                type={showPassword ? "text": "password"}
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                            <i onClick={toggleVisibility}><FaEye/></i>{""}
                            </Button>
                            
                        </InputGroup>
                        <Button variant="shadow-non" type="submit" className="submit">Login</Button>
                    </Form.Group>
                </Col>
            </Container>
        </>
    )
}