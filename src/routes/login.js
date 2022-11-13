/** 

import { LinkContainer } from 'react-router-bootstrap';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
*/

//Imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import {FaEye} from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    connectAuthEmulator, 
    signInWithEmailAndPassword} from 'firebase/auth';

// Login page
export default function Login() {


    /**
     * Enable password hiding -- when eye icon is clicked the password is hidden if visible or made visible if hidden
     * adapted from https://codesandbox.io/s/showhide-password-on-toggle-in-react-hooks-95qcz?file=/src/App.js
     */

    const [showPassword, setVisibility] = useState(false);
    const toggleVisibility = () => {
        setVisibility(showPassword ? false : true);
    };

    //Login Authentication using Firebase
    //Variables for Firebase
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyD4pNnT98nR04rDvKvLWcNqrnv3zdwOqX0",
        authDomain: "recipe-app-441d8.firebaseapp.com",
        projectId: "recipe-app-441d8",
        storageBucket: "recipe-app-441d8.appspot.com",
        messagingSenderId: "86988559479",
        appId: "1:86988559479:web:1f8a8ee3bb060674272272",
        measurementId: "G-VQ7XEJT7QW"
    });
    const auth = getAuth(firebaseApp);
    connectAuthEmulator(auth, 'http://localhost:3000');

    //Functions for Firebase
    const loginEmailPassword = async () => {
        const loginEmail = document.getElementById('txtEmail').value;
        const loginPassword = document.getElementById('txtPassword').value;

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
    }





    return (
        <>
            <Container className="welcome">
                <Col>
                    Login
                
                    <Form.Group>
                        <Form.Control
                            id = "txtEmail"
                            placeholder="Username/Email"
                            aria-label="Username/Email"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup>
                            <Form.Control
                                id = "txtPassword"
                                placeholder="Password"
                                type={showPassword ? "text": "password"}
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                            <i onClick={toggleVisibility}><FaEye/></i>{""}
                            </Button>
                            
                        </InputGroup>
                        <Button variant="shadow-non" type="submit" className="submit">Login
                        <i onClick={loginEmailPassword}></i>{''}
                        </Button>
                    </Form.Group>
                </Col>
            </Container>
        </>
    )
}