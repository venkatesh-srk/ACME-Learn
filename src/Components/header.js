import React from "react";
import {Navbar, Nav, Button, Form, FormControl, Image } from 'react-bootstrap';



function Header () {
    return (
        <Navbar expand='lg' fixed="top" bg='white'>
            <Navbar.Brand href='/'> <Image src="/images/acme-logo.svg" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <Button variant="link" href='/courses'>Courses</Button>
                    <Button variant="link" href='/specialities'>Specialities</Button>
                </Nav>
                <Nav className='ml-auto'>
                    <Form>
                        <FormControl type="text" className="mr-2" placeholder="Search courses or specialities" />
                    </Form>
                    <Button variant="link" className="mr-2" href='/sign-in'>Sign in</Button>
                    <Button variant="primary" href='/sign-up'>Join for Free</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;