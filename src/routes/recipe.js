import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image'


let favoriteRecipes = []

// Dynamic pages that display a recipe from recipe search. User will be able to see ingredients, image, and an option to favorite. 
// For full recipe, user can go to external site that is linked
// Aidan
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
                        Full recipe: <a href={recipe.link} target="_blank" rel="noreferrer">{recipe.source}</a>
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

        if (!favoriteRecipes.includes(recipe))
            favoriteRecipes.push(recipe)
        console.log("Favorites" , favoriteRecipes)
        window.localStorage.setItem("favorites", JSON.stringify(favoriteRecipes))

    }

    return (
      <Button className="favorite" onClick={() => favoriteRecipe()}>♥ Favorite</Button>
    )
};
