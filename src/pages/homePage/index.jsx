import React from 'react';
import * as s from './style';

const HomePage = () => {
	return (
		<>
			<section>
				<div className="container">
					<s.HeroContainer>
						<s.Headline>Headline</s.Headline>
						<s.SubHeader>SubHeader</s.SubHeader>
					</s.HeroContainer>

					<s.HeroLine></s.HeroLine>

					<s.PlanetContainer>PlanetContainer</s.PlanetContainer>
				</div>
			</section>
		</>
	);
};

export default HomePage;
