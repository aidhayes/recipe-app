import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
//import Recipe from './food';
import Filters from './scripts/sidebar.js';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
