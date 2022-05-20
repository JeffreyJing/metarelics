import React, { useState, useEffect } from 'react';
import { DiscordLogo, InstagramLogo, OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';
import logo from '../../assets/images/logo.png';
import spinningCube from '../../assets/images/spinning-cube.gif';
import { DISCORD_URL, INSTAGRAM_URL, OPENSEA_URL, OWNER_PORTAL_URL, TWITTER_URL } from '../../constants';
import benefits from '../../assets/pdfs/metarelics-benefits.pdf';

import { CCard, CCardImage, CCardImageOverlay, CCardTitle, CCardText } from '@coreui/react';

import punksBanner from '../../assets/images/punks-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import './index.css';

const SECTIONS = [
    {
        title: 'Behind the Hustle',
        content: [
            {
                title: 'Title',
                image: punksBanner,
                description: 'description',
                href: 'https://placeholder.com'
            },
            {
                title: 'Title',
                image: logo,
                description: 'description',
                href: 'https://placeholder.com'
            },
            {
                title: 'Title',
                image: logo,
                description: 'description',
                href: 'https://placeholder.com'
            },
            {
                title: 'Title',
                image: logo,
                description: 'description',
                href: 'https://placeholder.com'
            },
            {
                title: 'Title',
                image: logo,
                description: 'description',
                href: 'https://placeholder.com'
            },
            {
                title: 'Title',
                image: logo,
                description: 'description',
                href: 'https://placeholder.com'
            },
        ]
    }
]

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
                    <div className='all-medias'>
                        ALL MEDIAS
                    </div>
					<div className='portal-button-container'>
						<a href={OWNER_PORTAL_URL} target="_blank" rel="noopener noreferrer">
							<button className='owner-portal-button'>OWNER PORTAL</button>
						</a>
					</div>
				</div>

                {SECTIONS.map((section) => (
                    <div className='section' key={section.title}>
                        <h2>{section.title}</h2>
                        <div className='section-content'>
                            {section.content.map(({title, image, description, href}) => (
                                <a key={title} href={href} target='_blank' rel='noopener noreferrer'>
                                    <CCard className='mb-3 bg-dark text-white' style={{borderRadius: 30}}>
                                        <CCardImage src={image} style={{borderRadius: 30}} />
                                        <CCardImageOverlay style={{
                                            display: 'flex',
                                            borderRadius: 30,
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            justifyContent: 'flex-end',
                                            paddingBottom: 20,
                                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 54.69%, rgba(0, 0, 0, 0.68) 100%)'
                                        }}>
                                            <CCardTitle>{title}</CCardTitle>
                                            <CCardText>{description}</CCardText>
                                        </CCardImageOverlay>
                                    </CCard>
                                    {/* <div
                                    className='section-content-item'
                                    key={title}
                                    style={{
                                        height: 270,
                                        width: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: 20,
                                    }}
                                >
                                    <img src={image} style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: 'auto',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1
                                    }} />
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        display: 'flex',
                                        textDecoration: 'unset',
                                        zIndex: 999,
                                        justifyContent: 'flex-end',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        rowGap: 20,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 54.69%, rgba(0, 0, 0, 0.68) 100%)'
                                    }} className={'style-overrides'}>
                                        <h2 style={{margin: 0, marginLeft: 20}}>{title}</h2>
                                        <p style={{margin: 0, marginLeft: 20, marginBottom: 20}}>{description}</p>
                                    </div>
                                </div> */}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
				
                {/* <div className='banner'>
					<div className='metarelics'>METARELICS</div>
					<div className='spinning-cube'>
						<img src={spinningCube} alt={"Spinning Relic"} />
					</div>
				</div>
				{/* {width > 1000 && midContent} */}
				{/* <div className='bottom'>
					{/* {width <= 1000 && midContent} */}
					{/* {midContent}
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
				</div>  */}
			</div>
		</>
	);
}

export default Home;