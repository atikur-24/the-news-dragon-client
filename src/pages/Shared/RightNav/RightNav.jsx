import React from 'react';
import LoginAndFindUs from '../LoginAndFindUs/LoginAndFindUs';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import { Button } from 'react-bootstrap';

const RightNav = () => {
    return (
        <div>
            <LoginAndFindUs />
            <QZone />
            <div className='position-relative'>
                <img src={bg} className='img-fluid' alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-white'>
                    <h3 className='text-center'>Create an Amazing Newspaper</h3>
                    <p className='text-center py-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant='danger' className='rounded-0 fs-4 fw-semibold lh-lg'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;