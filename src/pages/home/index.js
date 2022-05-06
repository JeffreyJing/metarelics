import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import { OWNER_PORTAL_URL } from '../../constants';
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
						<img src={logo} alt={"Spinning Relic"} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;