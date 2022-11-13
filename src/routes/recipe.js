import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image'


let favorites = []

export default function Recipe() {
    const recipe = useLocation().state
    console.log(recipe)



    // Map ingredients to a list
    var ingredients = recipe.ingredients.map((ingredient) =>
        <li>{ingredient}</li>
    )

    //localStorage.removeItem("data")

    return (
        <>
        <Container className="recipeBody">
            <Row>
                <h1>{recipe.name} <Favorite recipe={recipe}/></h1>
                <Col lg={4} sm={4} xs={4}>
                    <Image className="recipeImg" src={recipe.picture}/>
                </Col>
                <Col lg={6} sm={6} xs={6}>
                    <p>
                        Full recipe: <a href={recipe.link} target="_blank">{recipe.source}</a>
                    </p>
                    <p>
                        Total time: {recipe.time}
                    </p>
                        Ingredients: <ul>{ingredients}</ul>
            
                </Col>
            </Row>      
        </Container>
        </>
    )
}

function Favorite({recipe}) {

    const favoriteRecipe = () => {

        favorites.push(recipe)
        console.log("Favorites" , favorites)

    }

    return (
        <Button onClick={() => favoriteRecipe()}>Favorite</Button>
    )
};