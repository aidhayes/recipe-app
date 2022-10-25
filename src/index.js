import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
//import Recipe from './food';
import Filters from './scripts/sidebar.js';
import Navigator from './scripts/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Container fluid className="wave">
            <Row>
                <Navigator/>
            </Row>
            <br/>
            <Row>
                <Col xs={6} sm={6} md={6} lg={4} xl={4}>
                    <Filters/>
                </Col>
                <Col xs={6} sm={6} md={6} lg={8} xl={8}>
                    <Container>
                        <Row>
                            <Col className="welcome">
                                Welcome to Cooking Daddy, a site dedicated to helping those looking for a quick meal find recipes.
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

    </>
);