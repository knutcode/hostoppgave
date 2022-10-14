import React from "react";
import { Link } from "react-router-dom";
import * as s from "./homePageFiles/style";

const HomePage = () => {
	return (
		<s.Main>
			<div className="container">
				<s.HeroContainer>
					<s.SubHeader>PLANETS IN OUR</s.SubHeader>
					<s.Headline>SOLAR SYSTEM</s.Headline>
					<s.HeroLine />
					<s.HeroText>
						The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.
					</s.HeroText>
					<Link to="/planets">
						<s.HeroBtn>Start exploring!</s.HeroBtn>
					</Link>
				</s.HeroContainer>

				<s.PlanetContainer />
			</div>
		</s.Main>
	);
};

export default HomePage;
