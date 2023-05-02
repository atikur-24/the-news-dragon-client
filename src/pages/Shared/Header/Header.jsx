import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import TopNavbar from '../TopNavbar/TopNavbar';
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
            <TopNavbar />
        </Container>
    );
};

export default Header;