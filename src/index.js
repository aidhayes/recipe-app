import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Navigator from './scripts/navbar.js';
import ProfileDropdown from './scripts/dropdown';
import Container from 'react-bootstrap/Container';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Container className="container">
            <h4>Recipe App</h4>
            <Navigator/>
            <ProfileDropdown/>
        </Container>
        
    </>
);