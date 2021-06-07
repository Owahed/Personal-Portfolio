
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import icon from '../../../Image/logo.png';

const NavBar = () => {
    return (
       




        <Navbar  bg="light" expand="lg">
            <div className="container">
            <Navbar.Brand href="/"><img height='50px' src={icon} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               
               <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutMe">About Me</Nav.Link>
                    <Nav.Link href="/myProjects">My Project</Nav.Link>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                    <Nav.Link href="/contactMe">Contact</Nav.Link>
                    
                </Nav>
               
                
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;