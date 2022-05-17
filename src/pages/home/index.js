import React, { useState, useEffect } from 'react';
import { DiscordLogo, InstagramLogo, OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';
import logo from '../../assets/images/logo.png';
import spinningCube from '../../assets/images/spinning-cube.gif';
import { DISCORD_URL, INSTAGRAM_URL, OPENSEA_URL, OWNER_PORTAL_URL, TWITTER_URL } from '../../constants';
import benefits from '../../assets/pdfs/metarelics-benefits.pdf';
import './index.css';

const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	const midContent = (
		<>
			<div className='tagline'>
				<p>Art. Culture. Entrepreneurship.</p>
			</div>
			<div className='relics-pass-button'>
				<a href={OPENSEA_URL} target="_blank" rel="noopener noreferrer">
					<button>RELICS PASS</button>
				</a>
			</div>
			<div className='description'>
				A private holder only collective of 1000 individuals. Relics Pass holders get access to the Relic Room and a number of ever-growing benefits.
			</div>
			<div className='learn-more-button'>
				<a href={benefits} target="_blank" rel="noopener noreferrer">
					<button>LEARN MORE</button>
				</a>
			</div>
		</>
	);
	
	return (
		<>
			<div className='home'>
				<div className='top-menu'>
					<div className='logo'>
						<img src={logo} alt={"Metarelics Logo"} />
					</div>
					<div className='portal-button-container'>
						<a href={OWNER_PORTAL_URL} target="_blank" rel="noopener noreferrer">
							<button className='owner-portal-button'>OWNER PORTAL</button>
						</a>
					</div>
				</div>
				<div className='banner'>
					<div className='metarelics'>METARELICS</div>
					<div className='spinning-cube'>
						<img src={spinningCube} alt={"Spinning Relic"} />
					</div>
				</div>
				{/* {width > 1000 && midContent} */}
				<div className='bottom'>
					{/* {width <= 1000 && midContent} */}
					{midContent}
					<div className='bottom-content'>
						<div className='text-us-at'>
							<p>Text us at</p>
							<p className='telephone'><a href='https://my.community.com/metarelics' target="_blank" rel="noopener noreferrer">+1 (480) 530-6686</a></p>
						</div>
						<div className='socials'>
							<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
								<DiscordLogo />
							</a>
							<a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
								<TwitterLogo />
							</a>
							<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
								<InstagramLogo />
							</a>
							<a href={OPENSEA_URL} target="_blank" rel="noopener noreferrer">
								<OpenseaLogo />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;