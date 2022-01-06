import React from 'react';
import video from '../../assets/video/404-space.mp4';
import { Link } from "react-router-dom";
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div>
            <div className='bg-vdo'>
                <video autoPlay loop muted className='bg-vdo' src={video} type='video/mp4'></video>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <button className='back-btn'><Link className='not-link' to="/home">Back To Home</Link></button>

            </div>
        </div>
    );
};

export default PageNotFound;