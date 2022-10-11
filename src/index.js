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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Container fluid>
            <Row>
                <Navigator/>
            </Row>
            <Row>
                <Col className="col-md">
                    <Filters/>
                </Col>
                <Col className="col-lg">
                    <Container>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </>
);