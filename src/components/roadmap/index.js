import React, { useState } from 'react';
import placeholderIcon from '../../assets/images/placeholder_icon.png';
import './index.css';

const ROADMAP_ITEMS = [
    {
		description: 'All holders in US or Canada get a physical deck of cards mailed to them.',
		title: '10% - Physical deck',
		icon: placeholderIcon,
	},
	{
		description: 'Placeholder text',
		title: '25% - ?????',
		icon: placeholderIcon,
	},
	{
		description: 'All holders of a Royal Flush (five nfts of the same suit including an Ace, King, Queen, Jack, and 10) on a specific date likely in June 2022 get to party with Wes and Jonathan in Las Vegas. They throw good parties.',
		title: '50% - Royal Flush Vegas Party!',
		icon: placeholderIcon,
	},
]

export const Roadmap = () => {
    return (
        <div className='roadmap'>
            <h2>ROADMAP</h2>
			<p>
				While this project will exist forever on the Ethereum blockchain, perks will be available for at least one year with the potential for Wes and Jonathan to continue adding perks as they see fit. Once we hit a target sell through percentage, we will work to provided the stated goal below:
			</p>
            <div className='roadmap-items'>
                {ROADMAP_ITEMS.map((item) => (
                    <RoadmapItem key={item.title} {...item} />
                ))}
            </div>
        </div>
    );
}

const RoadmapItem = ({
    icon,
    title,
    description
}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            to='#'
            key={title}
            className={`${expanded ? 'roadmap-expanded' : ''} roadmap-item`}
            onClick={() => setExpanded(!expanded)}
        >
            <img src={icon} alt={'Roadmap marker'} />
            <h3>{title}</h3>
            <p className={`${expanded ? 'roadmap-description-expanded' : ''} roadmap-description`}>
                {description}
            </p>
        </div>
    )
}