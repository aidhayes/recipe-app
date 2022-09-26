import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React from 'react';
/**
 * Creates sidebar with filters to search for recipes
 * @returns Sidebar for filtering recipes
 */
function Filters() {

    /**
     * https://stackoverflow.com/questions/63182107/how-can-i-get-a-value-from-a-react-bootstrap-form-on-submit
     * @param {*} e 
     */
    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)


        // From https://rapidapi.com/edamam/api/recipe-search-and-diet
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {q: 'chicken tomato'}, //input ingredients here
            headers: {
                'X-RapidAPI-Key': '1c01bfdfbcmsh477ce97a09c9667p14eef1jsne64d4135f9a5',
                'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            /**
             * Fetch ingredients of first recipe found using results
             */
            var ingredients = response.data.hits[1].recipe.ingredients;
            for (let i = 0; i < ingredients.length; i++) {
                console.log(ingredients[i].text);
            }
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <SidebarMenu className="w-25 mx-4 sidebar">
            <SidebarMenu.Header>
                <p className="mx-4 my-4 pt-3">Select which ingredients you have, then press search to get recipes you can make!</p>
            </SidebarMenu.Header>
            <SidebarMenu.Body>
                <Form className="mx-4 filters" onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Group controlId="protein">
                            <Form.Label>Protein</Form.Label>
                                <Form.Check type="checkbox" label="Chicken"/>
                                <Form.Check type="checkbox" label="Beef"/>
                                <Form.Check type="checkbox" label="Pork"/>
                                <Form.Check type="checkbox" label="Egg"/>
                                <Form.Check type="checkbox" label="Veal"/>    
                            </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="vegetables">
                            <Form.Label>Vegetables</Form.Label>
                                <Form.Check type="checkbox" label="Carrots"/>
                                <Form.Check type="checkbox" label="Red Pepper"/>
                                <Form.Check type="checkbox" label="Green Pepper"/>
                                <Form.Check type="checkbox" label="Yellow Pepper"/>
                                <Form.Check type="checkbox" label="Red Onions"/>
                                <Form.Check type="checkbox" label="Yellow Onions"/>
                                <Form.Check type="checkbox" label="Green Onions"/>
                                <Form.Check type="checkbox" label="Tomatoes"/>
                                <Form.Check type="checkbox" label="Broccoli"/>
                                <Form.Check type="checkbox" label="Cucumbers"/>
                                <Form.Check type="checkbox" label="Salad Mix"/>
                                <Form.Check type="checkbox" label="Potatos"/>
                                <Form.Check type="checkbox" label="Kale"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId='spices'>
                            <Form.Label>Spices</Form.Label>
                                <Form.Check type="checkbox" label="Cinnamon"/>
                                <Form.Check type="checkbox" label="Ginger"/>
                                <Form.Check type="checkbox" label="Black Pepper"/>
                                <Form.Check type="checkbox" label="Salt"/>
                                <Form.Check type="checkbox" label="Paprika"/>
                                <Form.Check type="checkbox" label="Cardamom"/>
                                <Form.Check type="checkbox" label="Turmeric Powder"/>
                                <Form.Check type="checkbox" label="Cayenne Pepper"/>
                                <Form.Check type="checkbox" label="Oregano"/>
                                <Form.Check type="checkbox" label="Rosemary"/>
                                <Form.Check type="checkbox" label="Chili Powder"/>
                                <Form.Check type="checkbox" label="Red Pepper Flacks"/>
                                <Form.Check type="checkbox" label="Basil"/>
                                <Form.Check type="checkbox" label="Bay leaves"/>
                                <Form.Check type="checkbox" label="Garlic"/>
                                <Form.Check type="checkbox" label="Garlic Powder"/>
                                <Form.Check type="checkbox" label="Thyme"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId='seafood'>
                            <Form.Label>Sea Food</Form.Label>
                                <Form.Check type="checkbox" label="Shrimp"/>
                                <Form.Check type="checkbox" label="Tuna"/>
                                <Form.Check type="checkbox" label="Salmon"/>
                                <Form.Check type="checkbox" label="Tilapia"/>
                                <Form.Check type="checkbox" label="Crab"/>
                                <Form.Check type="checkbox" label="Shrimp"/>
                        </Form.Group> 
                    </Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
    );
}

export default Filters;