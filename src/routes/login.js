/** 

import { LinkContainer } from 'react-router-bootstrap';
*/

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default function Login() {
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
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </Form.Group>
                </Col>
            </Container>
        </>
    )
}