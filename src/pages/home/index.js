import React from 'react';
import './index.css';
import { Banner } from '../../components/banner';
import sneaksOfNature from '../../assets/images/sneaksofnature.png';

const Home = () => {
	return (
		<>
			<Banner />

			{/* <MintNowButton /> */}

			<div className='relics-pass-access' id='about'>
				<h2>RELICS PASS ACCESS</h2>
			    <p>FIRST ACCESS TO JEFF COLE'S GENESIS PROJECT</p>
				<p>FIRST ACCESS TO METARELICS PARTNER PROJECTS</p>
				<p>WEEKLY NFT GIVEAWAYS</p>
				<p>50% OFF NFT CANVAS PRINTS FOR LIFE</p>
				<p>EXCLUSIVE PHYSICAL PRODUCTS</p>
				<p>TOKEN ACCESS TO THE RELIC ROOM</p>
				<p>EXCLUSIVE PHYSICAL PRODUCTS</p>
				<p>TOKEN ACCESS TO THE RELIC ROOM</p>
				<p>EXCLUSIVE COMMUNITY EVENTS ON &amp; OFFLINE</p>  
			</div>

			<div className='projects-coming-soon'>
				<h2>PROJECTS COMING SOON</h2>
				<div className='projects-items'>
					<div className='projects-item'>
						<img src={sneaksOfNature} />
					</div>
					<div className='projects-item'>
						?
					</div>
					<div className='projects-item'>
						?
					</div>
					<div className='projects-item'>
						?
					</div>
					<p>Sneaks of Nature</p>
				</div>
			</div>
			{/*

			<HomeWelcome />

			<Team />

            <div className='tail'>
                <div className='tail-1'>
                    Terms of Sale | Privacy Policy
                </div>
            </div> */}
		</>
	);
}

export default Home;