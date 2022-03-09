import React, { useState, useEffect } from 'react';
import { OpenseaLogo } from '../../assets/icons/logos';
import bannerVideo from '../../assets/videos/banner.mp4';
import { OPENSEA_URL } from '../../constants';
import ConnectButton from '../connect-button';
import { MintCount } from '../mint-count';
import './index.css';

export const Banner = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	const bannerContent = (
		<div className='banner-content'>
			<h2>RELICS PASS</h2>
			<p>Metarelics is an artist collective led by Jeff Cole &amp; powered by the Ikonick team. The Relic Pass is your access to the Metarelics ecosystem of exclusive products and experiences.</p>
			<MintCount />
			<ConnectButton />
			<a href={OPENSEA_URL}><OpenseaLogo /></a>
		</div>
	)
	
	return (
		<div className='banner-container'>
			<div className='banner-video'>
				<video autoPlay loop muted>
					<source src={bannerVideo} type='video/mp4' />
				</video>
			</div>
			{width > 1000 && bannerContent}
			{width <= 1000 && (
				<div className='banner-content-wrapper'>
					{bannerContent}
				</div>
			)}
		</div>
	)
}