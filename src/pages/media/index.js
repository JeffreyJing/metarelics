import React, { useState, useEffect } from 'react';
import { DiscordLogo, InstagramLogo, OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';
import logo from '../../assets/images/logo.png';
import spinningCube from '../../assets/images/spinning-cube.gif';
import { DISCORD_URL, INSTAGRAM_URL, OPENSEA_URL, OWNER_PORTAL_URL, TWITTER_URL } from '../../constants';
import benefits from '../../assets/pdfs/metarelics-benefits.pdf';

import { CCard, CCardImage, CCardImageOverlay, CCardTitle, CCardText } from '@coreui/react';

import bh1 from '../../assets/images/media-page/bh1.jpg';
import bh2 from '../../assets/images/media-page/bh2.jpg';
import bh3 from '../../assets/images/media-page/bh3.jpg';
import bh4 from '../../assets/images/media-page/bh4.jpg';
import bh5 from '../../assets/images/media-page/bh5.jpg';
import bh6 from '../../assets/images/media-page/bh6.jpg';
import bh7 from '../../assets/images/media-page/bh7.jpg';
import bh8 from '../../assets/images/media-page/bh8.jpg';
import bh9 from '../../assets/images/media-page/bh9.jpg';
import bh10 from '../../assets/images/media-page/bh10.jpg';
import bh11 from '../../assets/images/media-page/bh11.jpg';
import bh12 from '../../assets/images/media-page/bh12.jpg';
import bh13 from '../../assets/images/media-page/bh13.jpg';
import bh14 from '../../assets/images/media-page/bh14.jpg';
import bh15 from '../../assets/images/media-page/bh15.jpg';
import bh16 from '../../assets/images/media-page/bh16.jpg';
import bh17 from '../../assets/images/media-page/bh17.jpg';
import bh18 from '../../assets/images/media-page/bh18.jpg';
import keepgoing from '../../assets/images/media-page/publications/keepgoing.jpg';
import jeffcole from '../../assets/images/media-page/publications/jeffcole.jpg';
import fireshoes from '../../assets/images/media-page/publications/fireshoes.jpg';
import monopoly from '../../assets/images/media-page/publications/monopoly.jpg';
import veecanvas from '../../assets/images/media-page/publications/veecanvas.jpg';
import warehouse from '../../assets/images/media-page/publications/warehouse.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import './index.css';
import { NavLink } from 'react-router-dom';

const SECTIONS = [
    {
        id: 'bth',
        title: 'Behind the Hustle',
        content: [
            {
                title: 'Behind the Hustle #18',
                image: bh18,
                description: 'Extra Episode',
                href: 'https://vimeo.com/402612465'
            },
            {
                title: 'Behind the Hustle #17',
                image: bh17,
                description: 'Talent, Trust, & Empower',
                href: 'https://vimeo.com/402454923'
            },
            {
                title: 'Behind the Hustle #16',
                image: bh16,
                description: 'Do More',
                href: 'https://vimeo.com/402444022'
            },
            {
                title: 'Behind the Hustle #15',
                image: bh15,
                description: 'Rest At The End',
                href: 'https://vimeo.com/402451306'
            },
            {
                title: 'Behind the Hustle #14',
                image: bh14,
                description: 'The Third Door',
                href: 'https://vimeo.com/402448041'
            },
            {
                title: 'Behind the Hustle #13',
                image: bh13,
                description: '53 Minutes With Gary Vee',
                href: 'https://vimeo.com/400332073'
            },
            {
                title: 'Behind the Hustle #12',
                image: bh12,
                description: 'Momentum',
                href: 'https://vimeo.com/400331881'
            },
            {
                title: 'Behind the Hustle #11',
                image: bh11,
                description: 'One Week In Miami',
                href: 'https://vimeo.com/400331715'
            },
            {
                title: 'Behind the Hustle #10',
                image: bh10,
                description: 'Growing A Personal Brand',
                href: 'https://vimeo.com/400330851'
            },
            {
                title: 'Behind the Hustle #9',
                image: bh9,
                description: 'On The Move',
                href: 'https://vimeo.com/400330471'
            },
            {
                title: 'Behind the Hustle #8',
                image: bh8,
                description: 'Burgers and Business',
                href: 'https://vimeo.com/400330048'
            },
            {
                title: 'Behind the Hustle #7',
                image: bh7,
                description: 'Collaboration is Key',
                href: 'https://vimeo.com/400329361'
            },
            {
                title: 'Behind the Hustle #6',
                image: bh6,
                description: 'Sit Down with Scooter Braun',
                href: 'https://vimeo.com/400327627'
            },
            {
                title: 'Behind the Hustle #5',
                image: bh5,
                description: 'New York State of Mind',
                href: 'https://vimeo.com/400154710'
            },
            {
                title: 'Behind the Hustle #4',
                image: bh4,
                description: 'Making Money With Friends',
                href: 'https://vimeo.com/400150340'
            },
            {
                title: 'Behind the Hustle #3',
                image: bh3,
                description: 'IKONICK visits Rick Ross',
                href: 'https://vimeo.com/400144820'
            },
            {
                title: 'Behind the Hustle #2',
                image: bh2,
                description: 'All In',
                href: 'https://vimeo.com/400141333'
            },
            {
                title: 'Behind the Hustle #1',
                image: bh16,
                description: 'The Origin',
                href: 'https://vimeo.com/399941847'
            },
        ]
    }, {
        title: 'Publications / Blogs',
        content: [
            {
                title: 'Metarelics Partners with VeeFriends as First Official Physical Art Partner',
                image: veecanvas,
                href: 'https://www.one37pm.com/nft/metarelics-veefriends-jeff-cole-interview',
                // tag: 'Blog'
            },
            {
                title: 'The Past, Present and Future of Ikonick + Metarelics',
                image: warehouse,
                href: 'https://losangeles.shopify.com/metarelics0513'
            },
            {
                title: "There's More to Jeff Cole Than Sick Sneaker Drawings and a Big Social Following",
                image: fireshoes,
                href: 'https://www.complex.com/pop-culture/2020/02/jeff-cole-ikonick-inspirational-art-canvases'
            },
            {
                title: 'From AND1 To The NBA. How IKONICK Co-Founders Jeff Cole And Mark Mastrandrea Are Inspiring The World Through Pop Culture',
                image: monopoly,
                href: 'https://www.forbes.com/sites/cassellferere/2021/01/28/from-and1-to-the-nba-how-ikonick-co-founders-jeff-cole-and-mark-mastrandrea-are-inspiring-the-world-through-pop-culture/?sh=51dbdd1155b0'
            },
            {
                title: 'How This Online Art Company Grew to 8-Figures in 3 Years By Tapping Engaged Creator Audiences',
                image: keepgoing,
                href: 'https://medium.datadriveninvestor.com/how-the-ecomm-art-brand-ikonick-grew-to-8-figures-in-3-years-by-tapping-engaged-creator-audiences-453fb094bb47'
            },
            {
                title: 'How Jeff Cole Influences Culture Through Art',
                image: jeffcole,
                href: 'https://www.contrastmag.com/jeff-cole/'
            }
        ]
    }
]

const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);
    const [bthExpanded, setBthExpanded] = useState(false);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    const isMobile = width < 1000;
	
	return (
		<>
			<div className='home-media'>
				<div className='top-menu'>
					<div className='logo'>
						<NavLink to='/'><img src={logo} alt={"Metarelics Logo"} /></NavLink>
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
                        <h2 style={{
                            marginBottom: 40
                        }}>{section.title}</h2>
                        <div className='section-content'>
                            {section.content.map(({title, image, description, href, tag}, i) => {
                                if (!bthExpanded && i > 5) {
                                    return;
                                }

                                return (
                                    <a key={title} href={href} target='_blank' rel='noopener noreferrer'>
                                        <CCard className='mb-3 text-white fk-margin' style={{background: 'none', borderRadius: 15}}>
                                            <CCardImage src={image} style={{borderRadius: 15}} />
                                            <CCardImageOverlay style={{
                                                display: 'flex',
                                                borderRadius: 15,
                                                flexDirection: tag !== undefined ? 'row' : 'column',
                                                alignItems: tag !== undefined ? 'end' : 'start',
                                                justifyContent: tag !== undefined ? 'space-between' : 'flex-end',
                                                paddingBottom: 20,
                                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0, 0, 0, 0.8) 100%)',
                                                textAlign: 'left',
                                                columnGap: 10
                                            }}>
                                                <CCardTitle style={{
                                                    marginBottom: (tag || description === undefined) ? 0 : '0.5rem',
                                                    fontSize: tag ? (isMobile ? 12 : 15) : (description === undefined || isMobile ? 15 : 20)
                                                }}>{title}</CCardTitle>
                                                {description && <CCardText>{description}</CCardText>}
                                                {tag && <div style={{
                                                    marginRight: 15,
                                                    width: '15%',
                                                    backgroundColor: '#111319',
                                                    textAlign: 'center',
                                                    borderRadius: 15,
                                                    padding: '10px 30px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    lineHeight: '100%'
                                                }}><div>{tag}</div></div>}
                                            </CCardImageOverlay>
                                        </CCard>
                                    </a>
                                );
                            })}
                        </div>

                        {section.id === 'bth' && (
                            <button className='bth-expand' onClick={() => setBthExpanded(!bthExpanded)}>{bthExpanded ? 'HIDE' : 'SHOW MORE' }</button>
                        )}
                    </div>
                ))}
				
                {/* <div className='banner'>
					<div className='metarelics'>METARELICS</div>
					<div className='spinning-cube'>
						<img src={spinningCube} alt={"Spinning Relic"} />
					</div>
				</div>
				{/* {width > 1000 && midContent} */}
				<div className='bottom'>
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