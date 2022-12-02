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
                    <Route index exact path="/" element={<Root />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/recipe/:name" element={<Recipe/>}/>
                    <Route exact path="/favorites" element={<Favorites/>}/>
                </Routes>
            </Container>
        </>
    )
}