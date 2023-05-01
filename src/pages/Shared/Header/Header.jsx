import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <header>
            <div className="text-center mt-5 mb-3">
                <img src={logo} alt="" />
                <p className='text-muted'>Journalism Without Fear or Favour</p>
                <p className='fs-5 text-secondary font-500'>{moment().format('dddd, MMMM D, y')}</p>
            </div>
        </header>
    );
};

export default Header;