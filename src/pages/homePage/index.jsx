import React from 'react';
import * as s from './style';

const HomePage = () => {
	return (
		<>
			<section>
				<div className="container">
					<s.Main>
						<s.HeroContainer>
							<s.SubHeader>PLANETS IN OUR</s.SubHeader>
							<s.Headline>SOLAR SYSTEM</s.Headline>
							<s.HeroLine></s.HeroLine>
							<s.HeroText>Lorem ipsum doler sit amet</s.HeroText>
							<s.HeroBtn>Get informed</s.HeroBtn>
						</s.HeroContainer>

						<s.PlanetContainer />
					</s.Main>
				</div>
			</section>
		</>
	);
};

export default HomePage;
