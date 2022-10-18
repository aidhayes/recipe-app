import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../index.css';

/**
 * Creates a navigation bar that will have links to the different
 * @returns Navbar for accessing different pages on site
 */
function Navigator() {
    return (
        <Container className="justify-content-left navbar" id="navbar-bottom">
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand className="brand">
                        <img
                            alt="Cooking Daddy Logo"
                            src={require("../logo.png")}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            />{' '}
                            Cooking Daddy
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Navigator;