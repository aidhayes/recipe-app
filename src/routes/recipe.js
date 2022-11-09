import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

export default function Recipe() {

    


    const recipe = {
        name: useLocation().state.name,
        picture: useLocation().state.picture,
        link: useLocation().state.link,
        ingredients: "ingredients",
        time: 0,
        favorite: false,
    };

    return (
        <>
            <h1>{recipe.name}</h1>
            <Image src={recipe.picture}/>
            <p>{recipe.link}</p>
        </>
    )
}

function Favorite({recipe}) {
    let favorite = recipe.favorite;
    return (
        <Form method="post">
            <Button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </Button>
        </Form>
    )
};