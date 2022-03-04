import React from 'react';
import bannerVideo from '../../assets/videos/banner.mp4';
import './index.css';

export const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-video'>
                <video autoPlay loop muted>
                    <source src={bannerVideo} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}