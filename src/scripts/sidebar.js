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
        <SidebarMenu className="w-25 mx-3 sidebar">
            <SidebarMenu.Header>
                <p className="mx-3 my-3">Select which ingredients you have, then press search to get recipes you can make!</p>
            </SidebarMenu.Header>
            <SidebarMenu.Body>
                <Form className="mx-3">
                    <Row>
                        <Dropdown>
                                <Form.Group controlId="protein">
                                <Dropdown.Toggle id="dropdown-basic"><Form.Label>Protein        </Form.Label></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><Form.Check type="checkbox" label="Chicken"/></Dropdown.Item>
                                        <Dropdown.Item><Form.Check type="checkbox" label="Beef"/></Dropdown.Item>
                                       <Dropdown.Item><Form.Check type="checkbox" label="Pork"/></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Form.Group>
                        </Dropdown>
                    </Row>
                    <Row>
                    <Dropdown>
                        <Form.Group controlId="vegetables">
                            <Dropdown.Toggle id="dropdown-basic"><Form.Label>Vegetables</Form.Label></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Form.Check type="checkbox" label="Carrots"/></Dropdown.Item>
                                    <Dropdown.Item><Form.Check type="checkbox" label="Peppers"/></Dropdown.Item>
                                    <Dropdown.Item><Form.Check type="checkbox" label="Onions"/></Dropdown.Item>
                                </Dropdown.Menu>
                            </Form.Group>
                        </Dropdown>
                    </Row>
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
    );
}

export default Filters;