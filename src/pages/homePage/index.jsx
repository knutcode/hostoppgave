import React from 'react';
import * as s from './style';

const HomePage = () => {
	return (
		<s.Main>
			<div className="container">
				<s.HeroContainer>
					<s.SubHeader>PLANETS IN OUR</s.SubHeader>
					<s.Headline>SOLAR SYSTEM</s.Headline>
					<s.HeroLine />
					<s.HeroText>Lorem ipsum doler sit amet</s.HeroText>
					<s.HeroBtn>Get informed</s.HeroBtn>
				</s.HeroContainer>

				<s.PlanetContainer />
			</div>
		</s.Main>
	);
};

export default HomePage;
