import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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

    const [imgUrl, setImgUrl] = useState("");

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
            //var url = response.data.hits[1].recipe.url;
            var imgurl = response.data.hits[1].recipe.image;
            //console.log(imgurl);
            setImgUrl(imgurl);
            //console.log(url);
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
                                        <Form.Check type="checkbox" name="Beef" label="Beef"/>
                                        <Form.Check type="checkbox" name="Pork" label="Pork"/>
                                        <Form.Check type="checkbox" name="Egg" label="Egg"/>
                                        <Form.Check type="checkbox" name="Veal" label="Veal"/>    
                                </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sea Food</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form.Group controlId='seafood'>
                                        <Form.Check type="checkbox" name="Shrimp" label="Shrimp"/>
                                        <Form.Check type="checkbox" name="Tuna" label="Tuna"/>
                                        <Form.Check type="checkbox" name="Salmon" label="Salmon"/>
                                        <Form.Check type="checkbox" name="Tilapia" label="Tilapia"/>
                                        <Form.Check type="checkbox" name="Crab" label="Crab"/>
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Vegetables</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form.Group controlId="vegetables">
                                                <Form.Check type="checkbox" name="Carrots" label="Carrots"/>
                                                <Form.Check type="checkbox" name="Red Pepper" label="Red Pepper"/>
                                                <Form.Check type="checkbox" name="Green Pepper" label="Green Pepper"/>
                                                <Form.Check type="checkbox" name="Yellow Pepper" label="Yellow Pepper"/>
                                                <Form.Check type="checkbox" name="Red Onions" label="Red Onions"/>
                                                <Form.Check type="checkbox" name="Yellow Onions" label="Yellow Onions"/>
                                                <Form.Check type="checkbox" name="Green Onions" label="Green Onions"/>
                                                <Form.Check type="checkbox" name="Tomatoes" label="Tomatoes"/>
                                                <Form.Check type="checkbox" name="Broccoli" label="Broccoli"/>
                                                <Form.Check type="checkbox" name="Cucumbers" label="Cucumbers"/>
                                                <Form.Check type="checkbox" name="Salad Mix" label="Salad Mix"/>
                                                <Form.Check type="checkbox" name="Potatos" label="Potatos"/>
                                                <Form.Check type="checkbox" name="Kale" label="Kale"/>
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
                                        <Form.Check type="checkbox" name="Cannamon" label="Cinnamon"/>
                                        <Form.Check type="checkbox" name="Ginger" label="Ginger"/>
                                        <Form.Check type="checkbox" name="Black Pepper" label="Black Pepper"/>
                                        <Form.Check type="checkbox" name="Salt" label="Salt"/>
                                        <Form.Check type="checkbox" name="Paprika" label="Paprika"/>
                                        <Form.Check type="checkbox" name="Cardamon" label="Cardamom"/>
                                        <Form.Check type="checkbox" name="Turmeric Powder" label="Turmeric Powder"/>
                                        <Form.Check type="checkbox" name="Cayenne Pepper" label="Cayenne Pepper"/>
                                        <Form.Check type="checkbox" name="Oregano" label="Oregano"/>
                                        <Form.Check type="checkbox" name="Rosemary" label="Rosemary"/>
                                        <Form.Check type="checkbox" name="Chili Powder" label="Chili Powder"/>
                                        <Form.Check type="checkbox" name="Red Pepper Flakes" label="Red Pepper Flakes"/>
                                        <Form.Check type="checkbox" name="Basil" label="Basil"/>
                                        <Form.Check type="checkbox" name="Bay Leaves" label="Bay Leaves"/>
                                        <Form.Check type="checkbox" name="Garlic" label="Garlic"/>
                                        <Form.Check type="checkbox" name="Garlic Powder" label="Garlic Powder"/>
                                        <Form.Check type="checkbox" name="Thyme" label="Thyme"/>
                                    </Form.Group>
                                </Row>      
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
        <Container>
            <Row>
                <Image src={imgUrl}/>
            </Row>
        </Container>
        </>
    );
}

