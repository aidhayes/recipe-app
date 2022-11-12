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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = 
{
  apiKey: "AIzaSyB1x3qWn_69B738XXkH8oHEZQBxOBi17Tk",
  authDomain: "recipe-project-53755.firebaseapp.com",
  projectId: "recipe-project-53755",
  storageBucket: "recipe-project-53755.appspot.com",
  messagingSenderId: "491943591017",
  appId: "1:491943591017:web:f953538facd126aed9f6f8",
  measurementId: "G-8VQB9T2E0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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