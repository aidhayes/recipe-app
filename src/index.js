import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
//import Recipe from './food';
import Filters from './scripts/sidebar.js';
import Navigator from './scripts/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Container fluid>
            <Row>
                <Navigator/>
            </Row>
            <br/>
              <Col className="welcome" id="welcome">
                 <b>Welcome to Cooking Daddy</b>, a site dedicated to helping those looking for a quick meal find recipes.
                 <Button variant="shadow-non" type="login_button" className="login_button">Get Started</Button>
                </Col>
                <Filters/>
                
        </Container>

    </>
);
