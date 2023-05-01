import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, } from "react-icons/fa";
import fbIcon from '../../../assets/facebook.png';
import twitterIcon from '../../../assets/twitter.png';
import instagramIcon from '../../../assets/instagram.png';

const LoginAndFindUs = () => {
    return (
        <div>
            <div className='mb-4 pb-2'>
                <h5 className='fw-semibold'>Login With</h5>
                <Button variant="outline-primary" className='w-100 mt-3 mb-3'> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary" className='w-100'> <FaGithub /> Login with Github</Button>
            </div>
            <div className='mb-4 pb-2'>
                <h5 className='fw-semibold'>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='text-secondary'> <img className='bg-secondary rounded-circle bg-opacity-10 p-1 me-2' src={fbIcon} alt="facebook" /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-secondary'> <img className='bg-secondary rounded-circle bg-opacity-10 p-1 me-2' src={twitterIcon} alt="twitter" /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-secondary'> <img className='bg-secondary rounded-circle bg-opacity-10 p-1 me-2' src={instagramIcon} alt="instagram" /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default LoginAndFindUs;