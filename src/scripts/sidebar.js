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

   

/**
 * Creates sidebar with filters to search for recipes
 * @returns Sidebar for filtering recipes
 */
export default function Filters() {
    const [recipeArray, setRecipeArray] = useState(["",""]);
    const [recipeArray1, setRecipeArray1] = useState(["",""]);
    const [recipeArray2, setRecipeArray2] = useState(["",""]);
    const [recipeArray3, setRecipeArray3] = useState(["",""]);
    const [recipeArray4, setRecipeArray4] = useState(["","",]);

    /**
     * https://stackoverflow.com/questions/63182107/how-can-i-get-a-value-from-a-react-bootstrap-form-on-submit
     * @param {*} e 
     */
    let onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries()),
        // Store form input into array
        ingredientArray = Object.keys(formDataObj)

        var ingredients = ingredientArray.toString()

        console.log(ingredients)

        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {q: ingredients}, //input ingredients here {these are filler ingredients}
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
            for(let i = 0; i <10; i++){ // Fill the arrays (10 hits)
                tempImgs[i] = response.data.hits[i].recipe.image;
                tempTxts[i] = response.data.hits[i].recipe.label;
                tempUrls[i] = response.data.hits[i].recipe.url;
            }
            /*
            var tempArray = [] // Temp recipe Array for storing images
            for(let i = 0; i < 10; i++){ // Fill recipe array with images
                var recipe = <a href={tempUrls[i]}><Image src={tempImgs[i]}/><Button variant="primary" type="submit">Favorite</Button><h2>{tempTxts[i]}</h2></a>;           
                tempArray.push(recipe);
            }
            setRecipeArray(tempArray); // Set the recipe array which is loaded on form submit
            */
            for(let i = 0; i < 5; i++){
                var tempArray = []
                 for(let j = 0; j < 2; j++){
                    var recipe = <a href={tempUrls[(i*2) + j]}><Image src={tempImgs[(i*2) + j]} width ="150" height = "150"/><Button variant="primary" type="submit">Favorite</Button><p><small>{tempTxts[(i*2) + j].substring(0,30)}</small></p></a>;           
                    tempArray.push(recipe);
                 }
                 switch(i){
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


         }).catch(function (error) {
             console.error(error);
         });
    }

    return (
        <>
        
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
                                        <Form.Check type="checkbox" name="Chicken" label="Chicken"/>
                                        <Form.Check type="checkbox" name="Beef Steak" label="Beef Steak"/>
                                        <Form.Check type="checkbox" name="Bison" label="Bison"/>
                                        <Form.Check type="checkbox" name="Egg" label="Egg"/>
                                        <Form.Check type="checkbox" name="Ground Beef" label="Ground Beef"/>                                       
                                        <Form.Check type="checkbox" name="Pork" label="Pork"/>                                       
                                        <Form.Check type="checkbox" name="Veal" label="Veal"/>    
                                        <Form.Check type="checkbox" name="Venison" label="Venison"/>
                                        
                                </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sea Food</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form.Group controlId='seafood'>
                                        <Form.Check type="checkbox" name="Catfish" label="Catfish"/>
                                        <Form.Check type="checkbox" name="Cod" label="Cod"/>
                                        <Form.Check type="checkbox" name="Crab" label="Crab"/>
                                        <Form.Check type="checkbox" name="Lobster" label="Lobster"/>
                                        <Form.Check type="checkbox" name="Mackerel" label="Mackerel"/>
                                        <Form.Check type="checkbox" name="Shrimp" label="Shrimp"/>
                                        <Form.Check type="checkbox" name="Salmon" label="Salmon"/>
                                        <Form.Check type="checkbox" name="Tilapia" label="Tilapia"/>
                                        <Form.Check type="checkbox" name="Trout" label="Trout"/>
                                        <Form.Check type="checkbox" name="Tuna" label="Tuna"/>                           
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Vegetables</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form.Group controlId="vegetables">
                                        <Form.Check type="checkbox" name="Artichokes" label="Artichokes"/>
                                        <Form.Check type="checkbox" name="Asparagus" label="Asparagus"/>
                                        <Form.Check type="checkbox" name="Baked Beans" label="Baked Beans"/>
                                        <Form.Check type="checkbox" name="Beetroot" label="Beetroot"/>
                                        <Form.Check type="checkbox" name="Black Beans" label="Black Beans"/>
                                        <Form.Check type="checkbox" name="Broccoli" label="Broccoli"/>
                                        <Form.Check type="checkbox" name="Brussel Sprouts" label="Brussel Sprouts"/>
                                        <Form.Check type="checkbox" name="Carrots" label="Carrots"/>
                                        <Form.Check type="checkbox" name="Celery" label="Celery"/>
                                        <Form.Check type="checkbox" name="Chilli Peppers" label="Chilli Peppers"/>
                                        <Form.Check type="checkbox" name="Corn" label="Corn"/>
                                        <Form.Check type="checkbox" name="Cucumbers" label="Cucumbers"/>
                                        <Form.Check type="checkbox" name="Eggplant" label="Eggplant"/>
                                        <Form.Check type="checkbox" name="French Beans" label="French Beans"/>
                                        <Form.Check type="checkbox" name="Green Beans" label="Green Beans"/>
                                        <Form.Check type="checkbox" name="Green Onions" label="Green Onions"/>
                                        <Form.Check type="checkbox" name="Green Pepper" label="Green Pepper"/>
                                        <Form.Check type="checkbox" name="Kale" label="Kale"/>
                                        <Form.Check type="checkbox" name="Leeks" label="Leeks"/>
                                        <Form.Check type="checkbox" name="Lettuce" label="Lettuce"/>
                                        <Form.Check type="checkbox" name="Mushrooms" label="Mushrooms"/>
                                        <Form.Check type="checkbox" name="Pinto Beans" label="Pinto Beans"/>
                                        <Form.Check type="checkbox" name="Potatoes" label="Potatoes"/>
                                        <Form.Check type="checkbox" name="Radish" label="Radish"/>                                        
                                        <Form.Check type="checkbox" name="Red Pepper" label="Red Pepper"/>
                                        <Form.Check type="checkbox" name="Red Onions" label="Red Onions"/>
                                        <Form.Check type="checkbox" name="Rhubarb" label="Rhubarb"/>
                                        <Form.Check type="checkbox" name="Salad Mix" label="Salad Mix"/>
                                        <Form.Check type="checkbox" name="Shallots" label="Shallots"/>
                                        <Form.Check type="checkbox" name="Spinach" label="Spinach"/>
                                        <Form.Check type="checkbox" name="Spring Onions" label="Spring Onions"/>
                                        <Form.Check type="checkbox" name="Sweet Corn" label="Sweet Corn"/>
                                        <Form.Check type="checkbox" name="Tomatoes" label="Tomatoes"/>
                                        <Form.Check type="checkbox" name="Turnips" label="Turnips"/>
                                        <Form.Check type="checkbox" name="Yams" label="Yams"/>
                                        <Form.Check type="checkbox" name="Yellow Pepper" label="Yellow Pepper"/>                            
                                        <Form.Check type="checkbox" name="Yellow Onions" label="Yellow Onions"/>
                                                                                                                                                                                                                                                                       
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Spices</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form.Group controlId='spices'>
                                    <Form.Label>Spices</Form.Label>
                                        <Form.Check type="checkbox" name="Allspice" label="Allspice"/>
                                        <Form.Check type="checkbox" name="Basil" label="Basil"/>
                                        <Form.Check type="checkbox" name="Bay Leaves" label="Bay Leaves"/>
                                        <Form.Check type="checkbox" name="Black Pepper" label="Black Pepper"/>
                                        <Form.Check type="checkbox" name="Cardamon" label="Cardamom"/>
                                        <Form.Check type="checkbox" name="Cayenne Pepper" label="Cayenne Pepper"/>
                                        <Form.Check type="checkbox" name="Celery Salt" label="Celery Salt"/>
                                        <Form.Check type="checkbox" name="Celery Seeds" label="Celery Seeds"/>
                                        <Form.Check type="checkbox" name="Chili Powder" label="Chili Powder"/>
                                        <Form.Check type="checkbox" name="Chives" label="Chives"/>
                                        <Form.Check type="checkbox" name="Cilantro" label="Cilantro"/>
                                        <Form.Check type="checkbox" name="Cinnamon" label="Cinnamon"/>
                                        <Form.Check type="checkbox" name="Curry Powder" label="Curry Powder"/>
                                        <Form.Check type="checkbox" name="Fennel Seeds" label="Fennel Seeds"/>
                                        <Form.Check type="checkbox" name="Garlic" label="Garlic"/>
                                        <Form.Check type="checkbox" name="Garlic Powder" label="Garlic Powder"/>
                                        <Form.Check type="checkbox" name="Garlic Salt" label="Garlic Salt"/>                                          
                                        <Form.Check type="checkbox" name="Ginger" label="Ginger"/>
                                        <Form.Check type="checkbox" name="Horseradish" label="Horseradish"/>
                                        <Form.Check type="checkbox" name="Lemon Extract" label="Lemon Extract"/>
                                        <Form.Check type="checkbox" name="Marjoram Leaves" label="Marjoram Leaves"/>    
                                        <Form.Check type="checkbox" name="Mustard Powder" label="Mustard Powder"/>
                                        <Form.Check type="checkbox" name="Nutmeg" label="Nutmeg"/>
                                        <Form.Check type="checkbox" name="Onion Powder" label="Onion Powder"/>    
                                        <Form.Check type="checkbox" name="Oregano" label="Oregano"/>
                                        <Form.Check type="checkbox" name="Paprika" label="Paprika"/>
                                        <Form.Check type="checkbox" name="Smoked Paprika" label="Smoked Paprika"/>   
                                        <Form.Check type="checkbox" name="Poppy Seeds" label="Poppy Seeds"/>
                                        <Form.Check type="checkbox" name="Pumpkin Spice" label="Pumpkin Spice"/>  
                                        <Form.Check type="checkbox" name="Red Pepper Flakes" label="Red Pepper Flakes"/>    
                                        <Form.Check type="checkbox" name="Rosemary" label="Rosemary"/>    
                                        <Form.Check type="checkbox" name="Salt" label="Salt"/>
                                        <Form.Check type="checkbox" name="Saffron" label="Saffron"/>
                                        <Form.Check type="checkbox" name="Sesame Seeds" label="Sesame Seeds"/>
                                        <Form.Check type="checkbox" name="Shallots" label="Shallots"/>
                                        <Form.Check type="checkbox" name="Thyme" label="Thyme"/>
                                        <Form.Check type="checkbox" name="Turmeric Powder" label="Turmeric Powder"/>                                                                                                                       
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
                                        <Form.Check type="checkbox" name="Apple Cidar Vinegar" label="Apple Cidar Vinegar"/>
                                        <Form.Check type="checkbox" name="Balsamic Vinegar" label="Balsamic Vinegar"/>
                                        <Form.Check type="checkbox" name="Barbecue Sauce" label="Barbecue Sauce"/>
                                        <Form.Check type="checkbox" name="Canola Oil" label="Canola Oil"/>
                                        <Form.Check type="checkbox" name="Chicken Broth" label="Chicken Broth"/>
                                        <Form.Check type="checkbox" name="Corn Syrup" label="Corn Syrup"/>
                                        <Form.Check type="checkbox" name="Cream of Mushroom" label="Cream of Mushroom"/>
                                        <Form.Check type="checkbox" name="Beef Broth" label="Beef Broth"/>
                                        <Form.Check type="checkbox" name="Buttermilk" label="Buttermilk"/>
                                        <Form.Check type="checkbox" name="Half and Half" label="Half and Half"/>
                                        <Form.Check type="checkbox" name="Heavy Cream" label="Heavy Cream"/>
                                        <Form.Check type="checkbox" name="Honey" label="Honey"/>
                                        <Form.Check type="checkbox" name="Hot Sauce" label="Hot Sauce"/>
                                        <Form.Check type="checkbox" name="Lemon Juice" label="Lemon Juice"/>
                                        <Form.Check type="checkbox" name="Malt Vinegar" label="Malt Vinegar"/>
                                        <Form.Check type="checkbox" name="Milk" label="Milk"/>
                                        <Form.Check type="checkbox" name="Molasses" label="Molasses"/>
                                        <Form.Check type="checkbox" name="Olive Oil" label="Olive Oil"/>
                                        <Form.Check type="checkbox" name="Red Wine Vinegar" label="Red Wine Vinegar"/>
                                        <Form.Check type="checkbox" name="Vanilla Extract" label="Vanilla Extract"/>
                                        <Form.Check type="checkbox" name="Vegetable Oil" label="Vegetable Oil"/>
                                        <Form.Check type="checkbox" name="Vinegar" label="Vinegar"/>
                                        <Form.Check type="checkbox" name="Water" label="Water"/>
                                        <Form.Check type="checkbox" name="White Whine Vinegar" label="White Wine Vinegar"/>                                                                                              
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
                                        <Form.Check type="checkbox" name="Baking Powder" label="Baking Powder"/>
                                        <Form.Check type="checkbox" name="Baking Soda" label="Baking Soda"/>
                                        <Form.Check type="checkbox" name="Butter" label="Butter"/>
                                        <Form.Check type="checkbox" name="Bran" label="Bran"/>
                                        <Form.Check type="checkbox" name="Bread Crumbs" label="Bread Crumbs"/>
                                        <Form.Check type="checkbox" name="Brown Sugar" label="Brown Sugar"/>
                                        <Form.Check type="checkbox" name="Cream Cheese" label="Cream Cheese"/>
                                        <Form.Check type="checkbox" name="Cheddar" label="Cheddar"/>
                                        <Form.Check type="checkbox" name="Cocoa Powder" label="Cocoa Powder"/>
                                        <Form.Check type="checkbox" name="Corn Meal" label="Corn Meal"/>
                                        <Form.Check type="checkbox" name="Corn Starch" label="Corn Starch"/>
                                        <Form.Check type="checkbox" name="Cream of Tartar" label="Cream of Tartar"/>                                       
                                        <Form.Check type="checkbox" name="Flour" label="Flour"/>
                                        <Form.Check type="checkbox" name="Granulated Sugar" label="Granulated Sugar"/>
                                        <Form.Check type="checkbox" name="Lard" label="Lard"/>
                                        <Form.Check type="checkbox" name="Margarine" label="Margarine"/>
                                        <Form.Check type="checkbox" name="Oatmeal" label="Oatmeal"/>
                                        <Form.Check type="checkbox" name="Powdered Sugar" label="Powdered Sugar"/>
                                        <Form.Check type="checkbox" name="Shortening" label="Shortening"/>
                                        <Form.Check type="checkbox" name="Sour Cream" label="Sour Cream"/>
                                        <Form.Check type="checkbox" name="Sugar" label="Sugar"/>
                                        <Form.Check type="checkbox" name="Yeast" label="Yeast"/>          
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button variant="primary" type="submit" className="submit">Submit</Button>
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
        <Container>
	    

                <Row gap={3}>
                    <Col lg={2} sm={2} xs={2}>
                    {recipeArray}
                    </Col>
                    <Col lg={2} sm={2} xs={2}>
                    {recipeArray1}
                    </Col>
                    <Col lg={2} sm={2} xs={2}>
                    {recipeArray2}
                    </Col>
                    <Col lg={2} sm={2} xs={2}>
                    {recipeArray3}
                    </Col>
                    <Col lg={2} sm={2} xs={2}>
                    {recipeArray4}
                    </Col>
                </Row>
                                                                                                                                                                                  
        </Container>
        </>
    );
}

