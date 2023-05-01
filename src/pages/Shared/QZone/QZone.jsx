import React from 'react';
import Swimming from '../../../assets/qZone1.png';
import Class from '../../../assets/qZone2.png';
import PlayGround from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-10 pb-3 mb-4'>
            <h5 className='fw-semibold pt-3 ps-3'>Q-Zone</h5>
            <img src={Swimming} alt="Swimming" />
            <img src={Class} className='my-3' alt="Class" />
            <img src={PlayGround} alt="PlayGround" />
        </div>
    );
};

export default QZone;