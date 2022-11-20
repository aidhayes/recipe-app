import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Navigator from './scripts/navbar';
import Favorites from './routes/favorites';
import {
    Route,
    Routes,
} from 'react-router-dom';
import Root from './routes/root';
import Search from './routes/search';
import Login from './routes/login';
import Recipe from "./routes/recipe";
import { Container } from 'react-bootstrap';
import Register from './routes/register';

// App function, mainly used for defining Routes
export default function App() {

    return (
        <>
            <Navigator />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Root />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recipe/:name" element={<Recipe/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                </Routes>
            </Container>
        </>
    )
}