import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='mt-4'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className='text-decoration-none ms-3 text-secondary font-500' to="/">Home</NavLink>
                    <NavLink className='text-decoration-none ms-3 text-secondary font-500' to="/about">About</NavLink>
                    <NavLink className='text-decoration-none ms-3 text-secondary font-500' to="/career">Career</NavLink>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">profile</Nav.Link>
                    <Button variant='dark' className='rounded-0 fw-semibold fs-5 px-5'>Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TopNavbar;