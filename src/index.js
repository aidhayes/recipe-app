import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
//import Navigator from './scripts/navbar.js';
//import ProfileDropdown from './scripts/dropdown';
//import Container from 'react-bootstrap/Container';
//import Image from 'react-bootstrap/Image';
import Filters from './scripts/sidebar.js';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <h1>Cooking Daddy</h1>
        <Filters/>
    </>
);