import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../index.css';

function Navigator() {
    return (
        <Container className="justify-content-center">
            <Navbar className="navbar">
                <Container>
                    <Nav.Link className="links" href="#">Home</Nav.Link>
                    <Nav.Link className="links" href="#">Cookbook</Nav.Link>
                    <Nav.Link className="links" href="#">Social</Nav.Link>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Navigator;