import React from "react";
import EARTH from "../../assets/images/earth.png";
import * as s from "./homePageFiles/style";

const HomePage = () => {
	return (
		<s.Main>
			<div className="container">
				<s.Hero_Container>
					<s.Sub_Header>PLANETS IN OUR</s.Sub_Header>
					<s.Header>SOLAR SYSTEM</s.Header>
					<s.Header_Underline />
					<s.Text>
						The Solar System is the gravitationally bound system of the Sun and the
						objects that orbit it.
					</s.Text>
					<s.CTA_Button to="/planets">Start exploring!</s.CTA_Button>
				</s.Hero_Container>

				<s.Planet_Container>
					<img src={EARTH} alt="earth" />
				</s.Planet_Container>
			</div>
		</s.Main>
	);
};

export default HomePage;
