import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <Container className='mb-5 pb-4'>
            <div className="text-center mt-5 mb-3">
                <img src={logo} alt="" />
                <p className='text-muted'>Journalism Without Fear or Favour</p>
                <p className='fs-5 text-secondary font-500'>{moment().format('dddd, MMMM D, y')}</p>
            </div>
            <div className='bg-secondary bg-opacity-10 d-flex p-3 gap-3'>
                <Button variant='danger font-500' className='rounded-0 px-3'>Latest</Button>
                <Marquee speed={100} className='fw-semibold fs-5'>
                <span className='px-5'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</span>
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet .....
                </Marquee> 
            </div>
            <Navbar collapseOnSelect expand="lg" className='mt-4'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">profile</Nav.Link>
                    <Button variant='dark' className='rounded-0 fw-semibold fs-5 px-5'>Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;