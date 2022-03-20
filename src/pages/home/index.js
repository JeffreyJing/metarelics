import React, { useState, useEffect } from 'react';
import './index.css';
import { Banner } from '../../components/banner';
import sneaksOfNature from '../../assets/images/sneaksofnature.png';
import { DISCORD_URL, INSTAGRAM_URL, TWITTER_URL } from '../../constants';
import { BeCurious, BuildOurBond, CreateOurCulture, DeeperNotWider, DiscordLogo, EveryVoiceMatters, Execute, ForgeOurFuture, InstagramLogo, PreserveOurPast, PursueYourPotential, TwitterLogo, ValueFirst } from '../../assets/icons/logos';
import teamImg from '../../assets/images/team.png';
import buildOurBond from '../../assets/images/bottom-banner.jpg';
import { NavLink } from 'react-router-dom';
import relicPunks from '../../assets/images/relicpunks.jpg';

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

			{/* <div className='relics-pass-access' id='about'>
				<h2>RELICS PASS ACCESS</h2>
			    <p>Our team is a dedicated to bringing value in both the digital and physical worlds.</p>
				<div className='relics-pass-access-side'>
					<div>
						<h2>Digital</h2>
						<p>First access to Jeff Cole's genesis project</p>
						<p>Free Relic Punk of your choosing</p>
						<p>First access to Metarelics partner projects</p>
						<p>Access to the Relic Room Discord</p>
					</div>
					<div>
						<h2>Physical</h2>
						<p>Exclusive physical products</p>
						<p>50% off NFT canvas prints for life</p>
						<p>Weekly AMA with Metarelics team</p>
						<p>Exclusive community events</p>
					</div>
				</div>
			</div> */}
			<div className='first-holder'>
				{width >= 1000 && (
					<div className='first-holder-picture'>
						<img src={relicPunks} />
					</div>
				)}
				<div className='first-holder-items'>
					<h2>FIRST HOLDER BENEFIT</h2>
					<div>
						<p>Mint your choice of Relic Punk</p>
						<p>Created By Jeff Cole</p>
					</div>
					<div>
						<p>The "Relic Punks" are a 33 piece tribute to important cultural technology of the past. The collection uses nostalgia to bring back the emotional relationship and connections we had growing up with consumer devices.</p>
					</div>
				</div>
				{width < 1000 && (
					<div className='first-holder-picture'>
						<img src={relicPunks} />
					</div>
				)}
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
				</div>
			</div>
			)}
			
			<div className='team'>
				<div className='team-items'>
					<h2>THE TEAM</h2>
					<div className='team-item'>
						<h3>Jeff Cole</h3>
						<p>
							Digital artist and Co-Founder of Ikonick. Jeff Cole's art focuses mostly on pop culture and nostalgia. His art features masterful mashups of your favorite cultural icons. His consistent output of unique content has attracted attention from the biggest brands in the world, and garnered a cult-like following on Instagram.
						</p>
						<div className='team-item-icons'>
							<a href={'https://twitter.com/jeffcoleart'} target='_blank' rel="noopener noreferrer"><TwitterLogo /></a>
							<a href={'https://www.instagram.com/cole/'} target='_blank' rel="noopener noreferrer"><InstagramLogo /></a>
						</div>
					</div>

					<div className='team-item'>
						<h3>Ikonick</h3>
						<p>
							The Metarelics team is powered by Ikonick, founded by Jeff Cole &amp; Mark Brazil in 2016. They are a west-coast based art brand focused on inspiring others. Their exclusive collections are in over 150,000 homes around the world. Ikonick is backed by entrepreneurial giant, Gary Vaynerchuk.
						</p>
						<div className='team-item-icons'>
							<a href={TWITTER_URL} target='_blank' rel='noopener noreferrer'><TwitterLogo /></a>
							<a href={INSTAGRAM_URL} target='_blank' rel='noopener noreferrer'><InstagramLogo /></a>
						</div>
					</div>
				</div>
				{width >= 1000 && (
					<div className='team-picture'>
					</div>
				)}
			</div>



			<div className='build-our-bond'>
				<img src={buildOurBond} />
			</div>

			<div className='footbar'>
				{width > 1000 && (
					<div className='footbar-r-logo'></div>
				)}
				<div className='footbar-logos'>
					<a href={TWITTER_URL} target='blank' rel='noopener noreferrer'><TwitterLogo /></a>
					<a href={INSTAGRAM_URL} target='blank' rel='noopener noreferrer'><InstagramLogo /></a>
					<a href={DISCORD_URL} target='blank' rel='noopener noreferrer'><DiscordLogo /></a>
				</div>
				<div className='footbar-powered-by'>
					<p>Powered By Ikonick</p>
					<p>&copy; Copyright 2022 - Metarelics</p>
					<div className='terms-of-use'>
						<NavLink to='/terms-of-use'>Terms of use</NavLink>
					</div>
				</div>
				{width < 1000 && (
					<div className='footbar-r-logo'></div>
				)}
			</div>
		</>
	);
}

export default Home;