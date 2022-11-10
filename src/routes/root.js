import Button from 'react-bootstrap/Button';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';

// Landing page
export default function Root() {
    return (
        <>
            <Container>
                <Col className="welcome" id="welcome">
                    <b>Welcome to Cooking Daddy</b>, a site dedicated to helping those looking for a quick meal find recipes.
                    <LinkContainer to="/login">
                        <Button variant="shadow-non" type="login_button" className="login_button">Get Started</Button>
                    </LinkContainer>
                </Col>
            </Container>
        </>
    )
}