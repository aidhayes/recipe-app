import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

/**
 * Creates a navigation bar that will have links to the different
 * @returns Navbar for accessing different pages on site
 */
function Navigator() {


    return (
        <Container className="justify-content-left navbar" id="navbar-bottom">
            <Navbar className="navbar">
                <LinkContainer to="/">
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
                    </LinkContainer>
                    <Navbar.Collapse>
                        <LinkContainer to="/recipe-search">
                            <Nav.Link>Recipe Search</Nav.Link>
                        </LinkContainer>   
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigator;