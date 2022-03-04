import React, { useState, useEffect } from 'react';
import './index.css';
import { Banner } from '../../components/banner';
import sneaksOfNature from '../../assets/images/sneaksofnature.png';
import { INSTAGRAM_URL, TWITTER_URL } from '../../constants';
import { InstagramLogo, TwitterLogo } from '../../assets/icons/logos';
import teamImg from '../../assets/images/team.png';

const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
	
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

			{width > 1000 && (
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
			)}

			{width <= 1000 && (
				<div className='projects-coming-soon'>
				<h2>PROJECTS COMING SOON</h2>
				<div className='projects-items'>
					<div className='projects-item'>
						<img src={sneaksOfNature} />
					</div>
					<div className='projects-item'>
						?
					</div>
					<p>Sneaks of Nature</p>
					<p></p>
					<div className='projects-item'>
						?
					</div>
					<div className='projects-item'>
						?
					</div>
					<p></p>
				</div>
			</div>
			)}
			
			<div className='team'>
				<div className='team-items'>
					<h2>THE TEAM</h2>
					<div className='team-item'>
						<h3>JEFF COLE</h3>
						<p>
							Digital artist and Co-Founder of Ikonick. Jeff Cole's art focuses mostly on pop culture and nostalgia. His art features masterful mashups of your favorite cultural icons. His consistent output of unique content has attracted attention from the biggest brands in the world, and garnered a cult-like following on Instagram.
						</p>
						<div className='team-item-icons'>
							<a href={TWITTER_URL}><TwitterLogo /></a>
							<a href={INSTAGRAM_URL}><InstagramLogo /></a>
						</div>
					</div>

					<div className='team-item'>
						<h3>IKONICK</h3>
						<p>
							The Metarelics team is powered by Ikonick, founded by Jeff Cole &amp; Mark Brazil in 2016. They are a west-coast based art brand focused on inspiring others. Their exclusive collections are in over 150,000 homes around the world. Ikonick is backed by entrepreneurial giant, Gary Vaynerchuk.
						</p>
						<div className='team-item-icons'>
							<a href={TWITTER_URL}><TwitterLogo /></a>
							<a href={INSTAGRAM_URL}><InstagramLogo /></a>
						</div>
					</div>
				</div>
				{width >= 1000 && (
					<div className='team-picture'>
					</div>
				)}
			</div>
		</>
	);
}

export default Home;