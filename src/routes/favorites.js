import React from 'react';
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Page that displays a users favorited recipes
export default function Favorites() {
    let recipes = [];
    let favorites = JSON.parse(window.localStorage.getItem("favorites"));
    if (favorites != null) {
    console.log(favorites)
        for (let i = 0; i < favorites.length; i++) {
            let recipe = <Link state={favorites[i]} to={"/recipe/" + favorites[i].name} key={favorites[i].name}>
                <Image src={favorites[i].picture} width="150" height="150" />
                <p>{favorites[i].name.substring(0, 30)}</p>
            </Link>

            recipes.push(recipe);
        }
    } else {
        recipes = <p>You have not favorited anything.</p>
    }

    return (
        <Container fluid className="recipeBody">
            <h1>Favorites</h1>
            <Row>
                    {recipes}
            </Row>
        </Container>
    )
}