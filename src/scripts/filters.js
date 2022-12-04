import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { Link } from 'react-router-dom'


var searched = false;

// Search for recipes using Edamam API. 
// Input ingredients and return first 10 results
export default function Filters() {

    const [recipeArray, setRecipeArray] = useState(["", ""]);
    const [recipeArray1, setRecipeArray1] = useState(["", ""]);
    const [recipeArray2, setRecipeArray2] = useState(["", ""]);
    const [recipeArray3, setRecipeArray3] = useState(["", ""]);
    const [recipeArray4, setRecipeArray4] = useState(["", "",]);

    
     // Adapted from https://stackoverflow.com/questions/63182107/how-can-i-get-a-value-from-a-react-bootstrap-form-on-submit
    let onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries()),
            // Store form input into array
            ingredientArray = Object.keys(formDataObj)

        var ingredients = ingredientArray.toString()

        const axios = require("axios");

        // API information
        const options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: { q: ingredients }, //input ingredients here {these are filler ingredients}
            headers: {
                'X-RapidAPI-Key': '1c01bfdfbcmsh477ce97a09c9667p14eef1jsne64d4135f9a5',
                'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);

            //Make temp arrays to store recipe data
            var tempImgs = [];
            var tempTxts = [];
            var tempUrls = [];
            var tempSrc = [];
            var tempIngredients = [];
            var tempTime = [];
            for (let i = 0; i < 10; i++) { // Fill the arrays (10 hits)
                tempImgs[i] = response.data.hits[i].recipe.image;
                tempTxts[i] = response.data.hits[i].recipe.label;
                tempUrls[i] = response.data.hits[i].recipe.url;
                tempIngredients[i] = response.data.hits[i].recipe.ingredientLines;
                tempTime[i] = response.data.hits[i].recipe.totalTime;
                tempSrc[i] = response.data.hits[i].recipe.source;
                
            }
       
            for (let i = 0; i < 5; i++) {
                var tempArray = []
                for (let j = 0; j < 2; j++) {
                    var name = tempTxts[(i * 2) + j];
                    var picture = tempImgs[(i * 2) + j]
                    var url = tempUrls[(i * 2) + j]
                    var ingredients = tempIngredients[(i * 2) + j];
                    var source = tempSrc[(i * 2) + j];
                    var time = tempTime[(i * 2) + j];
                    var link = "/recipe/" + name;

                    var data = {
                        name: name,
                        picture: picture,
                        link: url,
                        ingredients: ingredients,
                        source: source,
                        time: time
                    }
                    
                    var recipe = 
                        <Link state={data} to={link} key={name}>
                            <Image className="recipeImg" src={picture} width="150" height="150" />
                            <p>{name.substring(0, 30)}</p>
                        </Link>;
                    tempArray.push(recipe);
                }
                switch (i) {
                    case 0:
                        setRecipeArray(tempArray); break;
                    case 1:
                        setRecipeArray1(tempArray); break;
                    case 2:
                        setRecipeArray2(tempArray); break;
                    case 3:
                        setRecipeArray3(tempArray); break;
                    case 4:
                        setRecipeArray4(tempArray); break;
                    default: break;
                }
            }

            searched = true;

        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <SidebarMenu className="mx-4 sidebar">
                            <SidebarMenu.Header>
                                <p className="mx-4 my-4 pt-3">Select which ingredients you have, then press search to get recipes you can make!</p>
                            </SidebarMenu.Header>
                            <SidebarMenu.Body>
                                <Form className="mx-4 filters" onSubmit={onFormSubmit}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Protein</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group controlId="protein">
                                                        <Form.Check type="checkbox" name="Chicken" label="Chicken" />
                                                        <Form.Check type="checkbox" name="Beef Steak" label="Beef Steak" />
                                                        <Form.Check type="checkbox" name="Bison" label="Bison" />
                                                        <Form.Check type="checkbox" name="Egg" label="Egg" />
                                                        <Form.Check type="checkbox" name="Ground Beef" label="Ground Beef" />
                                                        <Form.Check type="checkbox" name="Pork" label="Pork" />
                                                        <Form.Check type="checkbox" name="Veal" label="Veal" />
                                                        <Form.Check type="checkbox" name="Venison" label="Venison" />

                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Sea Food</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group controlId='seafood'>
                                                        <Form.Check type="checkbox" name="Catfish" label="Catfish" />
                                                        <Form.Check type="checkbox" name="Cod" label="Cod" />
                                                        <Form.Check type="checkbox" name="Crab" label="Crab" />
                                                        <Form.Check type="checkbox" name="Lobster" label="Lobster" />
                                                        <Form.Check type="checkbox" name="Mackerel" label="Mackerel" />
                                                        <Form.Check type="checkbox" name="Shrimp" label="Shrimp" />
                                                        <Form.Check type="checkbox" name="Salmon" label="Salmon" />
                                                        <Form.Check type="checkbox" name="Tilapia" label="Tilapia" />
                                                        <Form.Check type="checkbox" name="Trout" label="Trout" />
                                                        <Form.Check type="checkbox" name="Tuna" label="Tuna" />
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Vegetables</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group controlId="vegetables">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>A</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Artichokes" label="Artichokes" />
                                                                    <Form.Check type="checkbox" name="Asparagus" label="Asparagus" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>B</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Baked Beans" label="Baked Beans" />
                                                                    <Form.Check type="checkbox" name="Beetroot" label="Beetroot" />
                                                                    <Form.Check type="checkbox" name="Black Beans" label="Black Beans" />
                                                                    <Form.Check type="checkbox" name="Broccoli" label="Broccoli" />
                                                                    <Form.Check type="checkbox" name="Brussel Sprouts" label="Brussel Sprouts" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>B</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Carrots" label="Carrots" />
                                                                    <Form.Check type="checkbox" name="Celery" label="Celery" />
                                                                    <Form.Check type="checkbox" name="Chilli Peppers" label="Chilli Peppers" />
                                                                    <Form.Check type="checkbox" name="Corn" label="Corn" />
                                                                    <Form.Check type="checkbox" name="Cucumbers" label="Cucumbers" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5">
                                                            <Accordion.Header>E</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Eggplant" label="Eggplant" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="6">
                                                            <Accordion.Header>F</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="French Beans" label="French Beans" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="7">
                                                            <Accordion.Header>G</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Green Beans" label="Green Beans" />
                                                                    <Form.Check type="checkbox" name="Green Onions" label="Green Onions" />
                                                                    <Form.Check type="checkbox" name="Green Pepper" label="Green Pepper" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="11">
                                                            <Accordion.Header>K</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Kale" label="Kale" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="12">
                                                            <Accordion.Header>L</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Leeks" label="Leeks" />
                                                                    <Form.Check type="checkbox" name="Lettuce" label="Lettuce" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="13">
                                                            <Accordion.Header>M</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Mushrooms" label="Mushrooms" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="16">
                                                            <Accordion.Header>P</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Pinto Beans" label="Pinto Beans" />
                                                                    <Form.Check type="checkbox" name="Potatoes" label="Potatoes" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="18">
                                                            <Accordion.Header>R</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Radish" label="Radish" />
                                                                    <Form.Check type="checkbox" name="Red Pepper" label="Red Pepper" />
                                                                    <Form.Check type="checkbox" name="Red Onions" label="Red Onions" />
                                                                    <Form.Check type="checkbox" name="Rhubarb" label="Rhubarb" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="19">
                                                            <Accordion.Header>S</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Salad Mix" label="Salad Mix" />
                                                                    <Form.Check type="checkbox" name="Shallots" label="Shallots" />
                                                                    <Form.Check type="checkbox" name="Spinach" label="Spinach" />
                                                                    <Form.Check type="checkbox" name="Spring Onions" label="Spring Onions" />
                                                                    <Form.Check type="checkbox" name="Sweet Corn" label="Sweet Corn" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="20">
                                                            <Accordion.Header>T</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Tomatoes" label="Tomatoes" />
                                                                    <Form.Check type="checkbox" name="Turnips" label="Turnips" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="25">
                                                            <Accordion.Header>Y</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Yams" label="Yams" />
                                                                    <Form.Check type="checkbox" name="Yellow Onions" label="Yellow Onions" />
                                                                    <Form.Check type="checkbox" name="Yellow Pepper" label="Yellow Pepper" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        </Accordion>
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Spices</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group controlId='spices'>
                                                        <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>A</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Allspice" label="Allspice" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>B</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Basil" label="Basil" />
                                                                    <Form.Check type="checkbox" name="Bay Leaves" label="Bay Leaves" />
                                                                    <Form.Check type="checkbox" name="Black Pepper" label="Black Pepper" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header>C</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Cardamon" label="Cardamom" />
                                                                    <Form.Check type="checkbox" name="Cayenne Pepper" label="Cayenne Pepper" />
                                                                    <Form.Check type="checkbox" name="Celery Salt" label="Celery Salt" />
                                                                    <Form.Check type="checkbox" name="Celery Seeds" label="Celery Seeds" />
                                                                    <Form.Check type="checkbox" name="Chili Powder" label="Chili Powder" />
                                                                    <Form.Check type="checkbox" name="Chives" label="Chives" />
                                                                    <Form.Check type="checkbox" name="Cilantro" label="Cilantro" />
                                                                    <Form.Check type="checkbox" name="Cinnamon" label="Cinnamon" />
                                                                    <Form.Check type="checkbox" name="Curry Powder" label="Curry Powder" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="6">
                                                            <Accordion.Header>F</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Fennel Seeds" label="Fennel Seeds" />
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="7">
                                                            <Accordion.Header>G</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Garlic" label="Garlic" />
                                                                    <Form.Check type="checkbox" name="Garlic Powder" label="Garlic Powder" />
                                                                    <Form.Check type="checkbox" name="Garlic Salt" label="Garlic Salt" />
                                                                    <Form.Check type="checkbox" name="Ginger" label="Ginger" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="8">
                                                            <Accordion.Header>H</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Horseradish" label="Horseradish" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="12">
                                                            <Accordion.Header>L</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Lemon Extract" label="Lemon Extract" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="13">
                                                            <Accordion.Header>M</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Marjoram Leaves" label="Marjoram Leaves" /> 
                                                                    <Form.Check type="checkbox" name="Mustard Powder" label="Mustard Powder" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="14">
                                                            <Accordion.Header>N</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Nutmeg" label="Nutmeg" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="15">
                                                            <Accordion.Header>O</Accordion.Header>
                                                                <Accordion.Body>
                                                                <Form.Check type="checkbox" name="Onion Powder" label="Onion Powder" />
                                                                <Form.Check type="checkbox" name="Oregano" label="Oregano" />
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="16">
                                                            <Accordion.Header>P</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Paprika" label="Paprika" />
                                                                    <Form.Check type="checkbox" name="Smoked Paprika" label="Smoked Paprika" />
                                                                    <Form.Check type="checkbox" name="Poppy Seeds" label="Poppy Seeds" />
                                                                    <Form.Check type="checkbox" name="Pumpkin Spice" label="Pumpkin Spice" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="18">
                                                            <Accordion.Header>R</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Red Pepper Flakes" label="Red Pepper Flakes" />
                                                                    <Form.Check type="checkbox" name="Rosemary" label="Rosemary" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="19">
                                                            <Accordion.Header>S</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Form.Check type="checkbox" name="Salt" label="Salt" />
                                                                    <Form.Check type="checkbox" name="Saffron" label="Saffron" />
                                                                    <Form.Check type="checkbox" name="Sesame Seeds" label="Sesame Seeds" />
                                                                    <Form.Check type="checkbox" name="Shallots" label="Shallots" />
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        <Accordion.Item eventKey="20">
                                                            <Accordion.Header>T</Accordion.Header>
                                                                <Accordion.Body> 
                                                                    <Form.Check type="checkbox" name="Thyme" label="Thyme" />
                                                                    <Form.Check type="checkbox" name="Turmeric Powder" label="Turmeric Powder" />
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        </Accordion>
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Liquid Ingredients</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group controlId='liquids'>
                                                        <Form.Label>Liquid Ingredients</Form.Label>
                                                        <Form.Check type="checkbox" name="Apple Cidar Vinegar" label="Apple Cidar Vinegar" />
                                                        <Form.Check type="checkbox" name="Balsamic Vinegar" label="Balsamic Vinegar" />
                                                        <Form.Check type="checkbox" name="Barbecue Sauce" label="Barbecue Sauce" />
                                                        <Form.Check type="checkbox" name="Canola Oil" label="Canola Oil" />
                                                        <Form.Check type="checkbox" name="Chicken Broth" label="Chicken Broth" />
                                                        <Form.Check type="checkbox" name="Corn Syrup" label="Corn Syrup" />
                                                        <Form.Check type="checkbox" name="Cream of Mushroom" label="Cream of Mushroom" />
                                                        <Form.Check type="checkbox" name="Beef Broth" label="Beef Broth" />
                                                        <Form.Check type="checkbox" name="Buttermilk" label="Buttermilk" />
                                                        <Form.Check type="checkbox" name="Half and Half" label="Half and Half" />
                                                        <Form.Check type="checkbox" name="Heavy Cream" label="Heavy Cream" />
                                                        <Form.Check type="checkbox" name="Honey" label="Honey" />
                                                        <Form.Check type="checkbox" name="Hot Sauce" label="Hot Sauce" />
                                                        <Form.Check type="checkbox" name="Lemon Juice" label="Lemon Juice" />
                                                        <Form.Check type="checkbox" name="Malt Vinegar" label="Malt Vinegar" />
                                                        <Form.Check type="checkbox" name="Milk" label="Milk" />
                                                        <Form.Check type="checkbox" name="Molasses" label="Molasses" />
                                                        <Form.Check type="checkbox" name="Olive Oil" label="Olive Oil" />
                                                        <Form.Check type="checkbox" name="Red Wine Vinegar" label="Red Wine Vinegar" />
                                                        <Form.Check type="checkbox" name="Vanilla Extract" label="Vanilla Extract" />
                                                        <Form.Check type="checkbox" name="Vegetable Oil" label="Vegetable Oil" />
                                                        <Form.Check type="checkbox" name="Vinegar" label="Vinegar" />
                                                        <Form.Check type="checkbox" name="Water" label="Water" />
                                                        <Form.Check type="checkbox" name="White Whine Vinegar" label="White Wine Vinegar" />
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Solid Ingredients</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group controlId='solidIngredients'>
                                                        <Form.Label>Solid Ingredients</Form.Label>
                                                        <Form.Check type="checkbox" name="Baking Powder" label="Baking Powder" />
                                                        <Form.Check type="checkbox" name="Baking Soda" label="Baking Soda" />
                                                        <Form.Check type="checkbox" name="Butter" label="Butter" />
                                                        <Form.Check type="checkbox" name="Bran" label="Bran" />
                                                        <Form.Check type="checkbox" name="Bread Crumbs" label="Bread Crumbs" />
                                                        <Form.Check type="checkbox" name="Brown Sugar" label="Brown Sugar" />
                                                        <Form.Check type="checkbox" name="Cream Cheese" label="Cream Cheese" />
                                                        <Form.Check type="checkbox" name="Cheddar" label="Cheddar" />
                                                        <Form.Check type="checkbox" name="Cocoa Powder" label="Cocoa Powder" />
                                                        <Form.Check type="checkbox" name="Corn Meal" label="Corn Meal" />
                                                        <Form.Check type="checkbox" name="Corn Starch" label="Corn Starch" />
                                                        <Form.Check type="checkbox" name="Cream of Tartar" label="Cream of Tartar" />
                                                        <Form.Check type="checkbox" name="Flour" label="Flour" />
                                                        <Form.Check type="checkbox" name="Granulated Sugar" label="Granulated Sugar" />
                                                        <Form.Check type="checkbox" name="Lard" label="Lard" />
                                                        <Form.Check type="checkbox" name="Margarine" label="Margarine" />
                                                        <Form.Check type="checkbox" name="Oatmeal" label="Oatmeal" />
                                                        <Form.Check type="checkbox" name="Powdered Sugar" label="Powdered Sugar" />
                                                        <Form.Check type="checkbox" name="Shortening" label="Shortening" />
                                                        <Form.Check type="checkbox" name="Sour Cream" label="Sour Cream" />
                                                        <Form.Check type="checkbox" name="Sugar" label="Sugar" />
                                                        <Form.Check type="checkbox" name="Yeast" label="Yeast" />
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Button variant="shadow-non" type="submit" className="submit">Submit</Button>
                                </Form>
                            </SidebarMenu.Body>
                        </SidebarMenu>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {searched === true &&
                            <Row>
                                <Row gap={3} lg={12} sm={12} xs={12}>
                                    <Col className="recipe justify-content-md-center" lg={4} sm={4} xs={4}>
                                        {recipeArray}
                                    </Col>
                                    <Col className="recipe justify-content-md-center" lg={4} sm={4} xs={4}>
                                        {recipeArray1}
                                    </Col>
                                    <Col className="recipe justify-content-md-center" lg={4} sm={4} xs={4}>
                                        {recipeArray2}
                                    </Col>
                                    <Col className="recipe justify-content-md-center" lg={4} sm={4} xs={4}>
                                        {recipeArray3}
                                    </Col>
                                    <Col className="recipe justify-content-md-center" lg={4} sm={4} xs={4}>
                                        {recipeArray4}
                                    </Col>
                                </Row>
                            </Row>
                        }

                    </Col>
                </Row>


            </Container>
        </>
    );
}
