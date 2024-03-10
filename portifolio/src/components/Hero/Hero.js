import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText,} from './HeroStyles';
import './Hero.css';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>

				<MainHeading>Your data is secure with us</MainHeading>
				<HeroText>
					We provide the best security systems for clients all over the world
				</HeroText>

				
				<div>
				<Link to="signup">
						<button>Get Started</button>
					</Link>
					<button>Find More</button>
				</div>
				
			</Container>
		</HeroSection>
	);
};

export default Hero;