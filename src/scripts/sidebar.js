import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
/**
 * Creates sidebar with filters to search for recipes
 * @returns Sidebar for filtering recipes
 */
function Filters() {
    return (
        <SidebarMenu className="w-25 mx-4 sidebar">
            <SidebarMenu.Header>
                <p className="mx-4 my-4">Select which ingredients you have, then press search to get recipes you can make!</p>
            </SidebarMenu.Header>
            <SidebarMenu.Body>
                <Form className="mx-4">
                    <Row>
                        <Form.Group controlId="potein">
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
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
    );
}

export default Filters;