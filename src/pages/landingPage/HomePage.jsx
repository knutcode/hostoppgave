import React from "react";
import EARTH from "../../assets/images/earth.png";
import * as style from "./homePageFiles/style";

const HomePage = () => {
	return (
		<style.Main>
			<div className="container">
				<style.Hero_Container>
					<style.Sub_Header>PLANETS IN OUR</style.Sub_Header>
					<style.Header>SOLAR SYSTEM</style.Header>
					<style.Header_Underline />
					<style.Text>
						The Solar System is the gravitationally bound system of the Sun and the
						objects that orbit it.
					</style.Text>
					<style.CTA_Button to="/planets">Start exploring!</style.CTA_Button>
				</style.Hero_Container>

				<style.Planet_Container>
					<img src={EARTH} alt="earth" />
				</style.Planet_Container>
			</div>
			<style.Contribution>
				Made by:
				<a href="https://github.com/knutcode" target="_blank" rel="noreferrer noopener">
					Knut
				</a>
				<a href="https://github.com/SondreHal" target="_blank" rel="noreferrer noopener">
					Sondre
				</a>
				<a
					href="https://github.com/AlexanderKodehode"
					target="_blank"
					rel="noreferrer noopener"
				>
					Aleksander
				</a>
			</style.Contribution>
		</style.Main>
	);
};

export default HomePage;
