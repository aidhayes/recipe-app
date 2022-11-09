import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Recipe() {
    const recipe = {
        name: "Recipe Name",
        picture: "",
        link: "",
        ingredients: "ingredients",
        time: 0,
        favorite: false,
    };


    return (
        <Container id="recipe">
            <Row>
                <Col>
                    <img
                        key={recipe.picture}
                        src={recipe.picture || null}
                    />
                </Col>
                <Col>
                    <h1>
                        {recipe.name}
                        <Favorite recipe={recipe}/>
                    </h1>
                        {recipe.link}
                        <Col>
                            {recipe.ingredients}
                            {recipe.time}
                        </Col>
                </Col>
            </Row>
        </Container>
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