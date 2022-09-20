import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
/**
 * Creates sidebar with filters to search for recipes
 * @returns 
 */
function Filters() {
    return (
        <SidebarMenu className="w-25 mx-3 sidebar">
            <SidebarMenu.Header>
                <p className="mx-3 my-3">Select which ingredients you have, then press search to get recipes you can make!</p>
            </SidebarMenu.Header>
            <SidebarMenu.Body>
                <Form className="mx-3">
                    <Row>
                        <Form.Group controlId="protein">
                            <Form.Label>Protein</Form.Label>
                            <Form.Check type="checkbox" label="Chicken"/>
                            <Form.Check type="checkbox" label="Beef"/>
                            <Form.Check type="checkbox" label="Pork"/>
                        </Form.Group> 
                    </Row>
                    <Row>
                        <Form.Label>Vegetables</Form.Label>
                        <Form.Check type="checkbox" label="Tomatoes"/>
                        <Form.Check type="checkbox" label="Carrots"/>
                        <Form.Check type="checkbox" label="Spinach"/>
                    </Row>
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
    );
}

export default Filters;