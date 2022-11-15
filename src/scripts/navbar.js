import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import React, { useEffect, useState } from 'react';
import '../index.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
    auth,
    db,
    logout
} from "./firebase";
import {
    query,
    collection,
    getDocs,
    where
} from "firebase/firestore";

/**
 * Creates a navigation bar that will have links to the different
 * @returns Navbar for accessing different pages on site
 */
export default function Navigator() {
    //Variables
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err){
            console.error(err);
            alert("An error has occured while fetching user data.");
        }
    };

    useEffect(() => {
        var loggedoutdiv = document.getElementById("logged_out_div");
        var loggedindiv = document.getElementById("logged_in_div");

        if(loading) return;
        if(user){
            loggedoutdiv.style.display = "none";
            loggedindiv.style.display = "block";
        }
        if(!user){
            loggedindiv.style.display = "none";
            loggedoutdiv.style.display = "block";
            return navigate("/search");
        }
        fetchUserName();
    }, [user, loading]);

    return (
        <Container className="navbar" id="navbar-bottom">
            <Navbar className="justify-content-left navbar">
                <LinkContainer to="/">
                    <Navbar.Brand className="brand">
                        <img
                            alt="Cooking Daddy Logo"
                            src={require("../imgs/logo.png")}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        Cooking Daddy
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse>
                    <LinkContainer to="/recipe/search">
                        <Nav.Link>Recipe Search</Nav.Link>
                    </LinkContainer>
                </Navbar.Collapse>    
            </Navbar>

            <Navbar className="justify-content-right navbar">

                <LinkContainer to = "/login" 
                id="logged_out_div">
                    <button>Sign in</button>
                </LinkContainer>
                
                <div id = "logged_in_div"
                display = "none">
                    <h5>Logged in as </h5>
                    <div>{name}</div>
                    <br></br>
                    <div>{user?.email}</div>
                    <br></br>
                    <button 
                    className="logout_btn"
                    onClick={logout}> Logout </button>
                </div>
            </Navbar>

        </Container>
    );
}


