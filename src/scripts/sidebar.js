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

    const [imgUrl, setImgUrl] = useState("");
	const [imgUrl1, setImgUrl1] = useState("");
	const [imgUrl2, setImgUrl2] = useState("");
	const [imgUrl3, setImgUrl3] = useState("");
	const [imgUrl4, setImgUrl4] = useState("");
	const [imgUrl5, setImgUrl5] = useState("");
	const [imgUrl6, setImgUrl6] = useState("");
	const [imgUrl7, setImgUrl7] = useState("");
	const [imgUrl8, setImgUrl8] = useState("");
	const [imgUrl9, setImgUrl9] = useState("");
	const [imgtxt, setImgTxt] = useState("")
	const [imgtxt1, setImgTxt1] = useState("")
	const [imgtxt2, setImgTxt2] = useState("")
	const [imgtxt3, setImgTxt3] = useState("")
	const [imgtxt4, setImgTxt4] = useState("")
	const [imgtxt5, setImgTxt5] = useState("")
	const [imgtxt6, setImgTxt6] = useState("")
	const [imgtxt7, setImgTxt7] = useState("")
	const [imgtxt8, setImgTxt8] = useState("")
	const [imgtxt9, setImgTxt9] = useState("")
	const [imgLink, setImgLink] = useState("")
	const [imgLink1, setImgLink1] = useState("")
	const [imgLink2, setImgLink2] = useState("")
	const [imgLink3, setImgLink3] = useState("")
	const [imgLink4, setImgLink4] = useState("")
	const [imgLink5, setImgLink5] = useState("")
	const [imgLink6, setImgLink6] = useState("")
	const [imgLink7, setImgLink7] = useState("")
	const [imgLink8, setImgLink8] = useState("")
	const [imgLink9, setImgLink9] = useState("")
	
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
            var imgurl = response.data.hits[0].recipe.image;
			var imgtxt = response.data.hits[0].recipe.label;
			var imgLink = response.data.hits[0].recipe.url;
			var imgurl1 = response.data.hits[1].recipe.image;
			var imgtxt1 = response.data.hits[1].recipe.label;
			var imgLink1 = response.data.hits[1].recipe.url;
			var imgurl2 = response.data.hits[2].recipe.image;
			var imgtxt2 = response.data.hits[2].recipe.label;
			var imgLink2 = response.data.hits[2].recipe.url;
			var imgurl3 = response.data.hits[3].recipe.image;
			var imgtxt3 = response.data.hits[3].recipe.label;
			var imgLink3 = response.data.hits[3].recipe.url;
			var imgurl4 = response.data.hits[4].recipe.image;
			var imgtxt4 = response.data.hits[4].recipe.label;
			var imgLink4 = response.data.hits[4].recipe.url;
			var imgurl5 = response.data.hits[5].recipe.image;
			var imgtxt5 = response.data.hits[5].recipe.label;
			var imgLink5 = response.data.hits[5].recipe.url;
			var imgurl6 = response.data.hits[6].recipe.image;
			var imgtxt6 = response.data.hits[6].recipe.label;
			var imgLink6 = response.data.hits[6].recipe.url;
			var imgurl7 = response.data.hits[7].recipe.image;
			var imgtxt7 = response.data.hits[7].recipe.label;
			var imgLink7 = response.data.hits[7].recipe.url;
			var imgurl8 = response.data.hits[8].recipe.image;
			var imgtxt8 = response.data.hits[8].recipe.label;
			var imgLink8 = response.data.hits[8].recipe.url;
			var imgurl9 = response.data.hits[9].recipe.image;
			var imgtxt9 = response.data.hits[9].recipe.label;
			var imgLink9 = response.data.hits[9].recipe.url;
            //console.log(imgurl);
            setImgUrl(imgurl);
			setImgTxt(imgtxt);
			setImgLink(imgLink);
			setImgUrl1(imgurl1);
			setImgTxt1(imgtxt1);
			setImgLink1(imgLink1);
			setImgUrl2(imgurl2);
			setImgTxt2(imgtxt2);
			setImgLink2(imgLink2);
			setImgUrl3(imgurl3);
			setImgTxt3(imgtxt3);
			setImgLink3(imgLink3);
			setImgUrl4(imgurl4);
			setImgTxt4(imgtxt4);
			setImgLink4(imgLink4);
			setImgUrl5(imgurl5);
			setImgTxt5(imgtxt5);
			setImgLink5(imgLink5);
			setImgUrl6(imgurl6);
			setImgTxt6(imgtxt6);
			setImgLink6(imgLink6);
			setImgUrl7(imgurl7);
			setImgTxt7(imgtxt7);
			setImgLink7(imgLink7);
			setImgUrl8(imgurl8);
			setImgTxt8(imgtxt8);
			setImgLink8(imgLink8);
			setImgUrl9(imgurl9);
			setImgTxt9(imgtxt9);
			setImgLink9(imgLink9);
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
				<a href={imgLink}>
                  <Image src={imgUrl}/>
				</a>
				<h2>{imgtxt}</h2>
				<a href={imgLink1}>
				  <Image src={imgUrl1}/>
				</a>
				<h2>{imgtxt1}</h2>
				<a href={imgLink2}>
				  <Image src={imgUrl2}/>
				</a>
				<h2>{imgtxt2}</h2>
				<a href={imgLink3}>
				  <Image src={imgUrl3}/>
				</a>
				<h2>{imgtxt3}</h2>
				<a href={imgLink4}>
				  <Image src={imgUrl4}/>
				</a>
				<h2>{imgtxt4}</h2>
				<a href={imgLink5}>
				  <Image src={imgUrl5}/>
				</a>
				<h2>{imgtxt5}</h2>
				<a href={imgLink6}>
				  <Image src={imgUrl6}/>
				</a>
				<h2>{imgtxt6}</h2>
				<a href={imgLink7}>
				  <Image src={imgUrl7}/>
				</a>
				<h2>{imgtxt7}</h2>
				<a href={imgLink8}>
				  <Image src={imgUrl8}/>
				</a>
				<h2>{imgtxt8}</h2>
				<a href={imgLink9}>
				  <Image src={imgUrl9}/>
				</a>
				<h2>{imgtxt9}</h2>
            </Row>
        </Container>
        </>
    );
}

