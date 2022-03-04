import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import './index.css';
import { DISCORD_URL, INSTAGRAM_URL, TWITTER_URL } from '../../constants';
import { DiscordLogo, Hamburger, InstagramLogo, LooksRareLogo, OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [navOpen, setNavOpen] = useState(false);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	// TODO: Link these to things
	// TODO: Update styles for these
	const navigationItems = (
		<>
			<a href={'#print-nfts'}>PRINT NFTS</a>
			<a href={'#relics-pass'}>RELICS PASS</a>
		</>
	);

	return (
		<>
			<div className='navbar-container'>
				<div className='navbar-navigation'>
					{width >= 1000 && navigationItems}
					{width < 1000 && (
						<div
							className='navbar-hamburger'
							role='button'
							onClick={() => {
								setNavOpen(!navOpen);
							}}
						>
							<Hamburger />
						</div>
					)}
				</div>
				<div className='navbar-emblem'>
					{/** TODO: Replace this with metarelics logo */}
					METARELICS
				</div>
				<div className='navbar-items'>
					<a href={TWITTER_URL} target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>
					<a href={INSTAGRAM_URL}><InstagramLogo /></a>
					<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"><DiscordLogo /></a>
				</div>
			</div>
			<AnimateHeight duration={500} height={(width < 1000 && navOpen) ? 'auto': 0}>
				<div className='navbar-mobile-navigation'>
					{navigationItems}
				</div>
			</AnimateHeight>
		</>
	);
}

export default Navbar;