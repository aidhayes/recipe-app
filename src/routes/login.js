/** 

import { LinkContainer } from 'react-router-bootstrap';
*/

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Login() {
    return (
        <>
            <Container className="welcome">
                <p> Login </p>
                <InputGroup>
                    <Form.Control
                        placeholder="Username/Email"
                        aria-label="Username/Email"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Container>
        </>
    )
}