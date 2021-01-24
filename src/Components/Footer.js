import React from "react";
import {Nav, Row, Col, Button,} from "react-bootstrap";

function Footer() {
    return (
        <Row>
            <Col sm={4}>
                <Nav className="flex-column">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>Specialities</Nav.Link>
                    <Nav.Link>Courses</Nav.Link>
                </Nav>
            </Col>
            <Col sm={4}>
                <Nav className="flex-column">
                    <Nav.Link>News</Nav.Link>
                    <Nav.Link>Events</Nav.Link>
                    <Nav.Link>Privacy Policy</Nav.Link>
                    <Nav.Link>Terms of Use</Nav.Link>
                </Nav>
            </Col>
            <Col sm={4}>
                <Nav className="flex-column">
                    <Nav.Link>Press</Nav.Link>
                    <Nav.Link>Blog</Nav.Link>
                    <Nav.Link>Facebook</Nav.Link>
                    <Nav.Link>Twitter</Nav.Link>
                </Nav>
            </Col>
        </Row>
    )
}

export default Footer;