import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Navigator from './scripts/navbar';

import {
    Route,
    Routes,
} from "react-router-dom";
import Root from "./routes/root";
import Search from "./routes/search";
import { Container } from 'react-bootstrap';

export default function App() {

    return (
        <>
            <Navigator/>
            <Container>
                <Routes>
                    <Route exact path="/" element={<Root/>}/>
                    <Route path="/recipe-search" element={<Search/>}/>
                </Routes>
            </Container>
        </>
    )
}