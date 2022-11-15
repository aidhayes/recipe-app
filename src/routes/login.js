//Imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState, useEffect } from 'react';
import {FaEye} from 'react-icons/fa';
import {
    Link,
    useNavigate
} from "react-router-dom";
import {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword
} from '../scripts/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';



// Login page
export default function Login() {

    //Variables
    const [inputs, setInputs] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    //Redirects user after getting authenticated
    useEffect(() => {
        if(loading) {
            return;
        }
        if(user) navigate("/recipe/search");
    }, [user, loading]);
    
    //Helper Fuctions
    //Grabs the email and password from the users input and stores them in an array.
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs);
    };

    //When submit is pressed by user, runs logInWithEmailAndPassword.
    const handleSubmit = (event) => {
        event.preventDefault();
        logInWithEmailAndPassword(inputs.email, inputs.password);
    };


    /**
     * Enable password hiding -- when eye icon is clicked the password is hidden if visible or made visible if hidden
     * adapted from https://codesandbox.io/s/showhide-password-on-toggle-in-react-hooks-95qcz?file=/src/App.js
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
                
                    <Form>
                        <Form.Group>
                            <Form.Control
                                name="email"
                                type="text"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                placeholder="Username/Email"
                                aria-label="Username/Email"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup>
                                <Form.Control
                                    name="password"
                                    type={showPassword ? "text": "password"}
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                <i onClick={toggleVisibility}><FaEye/></i>{""}
                                </Button>
                            
                            </InputGroup>
                            <Button 
                            variant="shadow-non" 
                            type="submit" 
                            className="login"
                            onClick={() => logInWithEmailAndPassword(inputs.email, inputs.password)}>
                                Login 
                            </Button>
                            <br></br>
                            <Button 
                            variant="shadow-non" 
                            type="submit" 
                            className="google_Login"
                            onClick={signInWithGoogle}>
                                Login with Google
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </>
    )
}