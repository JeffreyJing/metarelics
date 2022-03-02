import React from 'react';
import ConnectButton from '../connect-button';
import './index.css';
import { DISCORD_URL, LOOKSRARE_URL, OPENSEA_URL, TWITTER_URL } from '../../constants';
import { DiscordLogo, LooksRareLogo, OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';

const Navbar = () => {
	return (
		<>
			<div className='navbar-container'>
				<div className='navbar-emblem'>
					<a href='/'>
						PRINT NFTS	RELICS PASS
					</a>
					
				</div>
				<div className='navbar-items'>
					<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"><DiscordLogo /></a>
					<a href={TWITTER_URL} target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>
					<a href={OPENSEA_URL}><OpenseaLogo /></a>
					<ConnectButton />
				</div>
			</div>
		</>
	);
}

export default Navbar;