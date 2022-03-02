import React from 'react';
import banner from '../../assets/images/banner.png';
import './index.css';
import { MintNowButton } from '../../components/mint-button';
import { Team } from '../../components/team';
import { HomeWelcome } from '../../components/home-welcome';

const Home = () => {
	return (
		<>
			<div className='home-banner-container'>
				<img className='home-banner' src={banner} alt='Home Banner' />
			</div>

			<MintNowButton />

			<div className='home-about-container' id='about'>
				<h2>RELICS PASS</h2>
			    <h3>FIRST ACCESS TO JEFF COLE'S GENESIS PROJECT</h3>
				<h3>FIRST ACCESS TO METARELICS PARTNER PROJECTS</h3>
				<h3>WEEKLY NFT GIVEAWAYS</h3>
				<h3>50% OFF NFT CANVAS PRINTS FOR LIFE</h3>
				<h3>EXCLUSIVE PHYSICAL PRODUCTS</h3>
				<h3>TOKEN ACCESS TO THE RELIC ROOM</h3>
				<h3>EXCLUSIVE PHYSICAL PRODUCTS</h3>
				<h3>TOKEN ACCESS TO THE RELIC ROOM</h3>
				<h3>EXCLUSIVE COMMUNITY EVENTS ON & OFFLINE</h3>  
			</div>


			<HomeWelcome />

			<Team />

            <div className='tail'>
                <div className='tail-1'>
                    Terms of Sale | Privacy Policy
                </div>
            </div>
		</>
	);
}

export default Home;