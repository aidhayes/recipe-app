import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import websiteLogo from './logo.png';
import Recipe from './food';
import Filters from './scripts/sidebar.js';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <div className='logo'>
            <img src={websiteLogo} class='websiteLogo'></img>
            <h1 className="title mb-3">Cooking Daddy</h1>
        </div>
        
        <button className="addRecipe" onClick={null}>Upload Recipe</button>
        <br></br>
        <div className="container">
        <div className="filterDiv">
            <Filters/>
        </div>
        <div className="recipes">
            <Recipe/>
        </div>
        </div>
    </>
);