import React, { useState, useEffect } from 'react';
import { DiscordLogo, InstagramLogo, OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';
import logo from '../../assets/images/logo.png';
import spinningCube from '../../assets/images/spinning-cube.gif';
import { DISCORD_URL, INSTAGRAM_URL, OPENSEA_URL, OWNER_PORTAL_URL, TWITTER_URL } from '../../constants';
import './index.css';

const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
	
	return (
		<>
			<div className='home'>
				<div className='top-menu'>
					<div className='logo'>
						<img src={logo} alt={"Metarelics Logo"} />
					</div>
					<div className='portal-button-container'>
						<a href={OWNER_PORTAL_URL}>
							<button>OWNER PORTAL</button>
						</a>
					</div>
				</div>
				<div className='banner'>
					<div className='metarelics'>METARELICS</div>
					<div className='spinning-cube'>
						<img src={spinningCube} alt={"Spinning Relic"} />
					</div>
				</div>
				<div className='tagline'>
					<p>Art. Culture. Entrepreneurship.</p>
				</div>
				<div className='relics-pass-button'>
					<a href={OPENSEA_URL}>
						<button>RELICS PASS</button>
					</a>
				</div>
				<div className='description'>
					A private holder only collection of 1000 individuals. Relics Pass holders get access to the Relic Room and a number of ever-growing benefits.
				</div>
				<div className='learn-more-button'>
					<a href=''>
						<button>LEARN MORE</button>
					</a>
				</div>
				<div className='bottom'>
					<div className='text-us-at'>
						<p>Text us at</p>
						<p className='telephone'><a href='tel:14805306686'>+1 (480) 530-6686</a></p>
					</div>
					<div className='socials'>
						<a href={DISCORD_URL}>
							<DiscordLogo />
						</a>
						<a href={TWITTER_URL}>
							<TwitterLogo />
						</a>
						<a href={INSTAGRAM_URL}>
							<InstagramLogo />
						</a>
						<a href={OPENSEA_URL}>
							<OpenseaLogo />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;