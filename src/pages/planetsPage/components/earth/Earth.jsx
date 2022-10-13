import React from "react";
import EARTH from "../../../../assets/images/earth.png";
import * as s from "../../style";

const Earth = () => {
	return (
		<>
			<s.Section id="earth">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={EARTH} alt="earth" />

						<s.ApiInfo>Api Info</s.ApiInfo>
						<s.ApiLineAngled></s.ApiLineAngled>
					</s.Planet>
					<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
						Image by macrovector
					</a>
					on Freepik
				</s.PlanetContainer>
				<s.PlanetInfoContainer>
					<div>
						<s.PlanetApiLinks>
							<s.PlanetApiLink>api 1</s.PlanetApiLink>
							<s.PlanetApiLink>api 2</s.PlanetApiLink>
							<s.PlanetApiLink>api 3</s.PlanetApiLink>
						</s.PlanetApiLinks>
						<s.PlanetName>EARTH</s.PlanetName>
						<s.PlanetInfoHeadline>
							You can see Earth's magnetic field at work during light shows.
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							We have a magnetic field surrounding our planet that protects us from
							the blasts of radiation and particles the Sun sends our way. Good thing,
							too, because such flare-ups could prove deadly to unprotected people;
							that's why NASA keeps an eye on solar activity for astronauts on the
							International Space Station, for example. At any rate, when you see
							auroras shining in the sky, that's what happens when the particles from
							the Sun flow along the magnetic field lines and interact with Earth's
							upper atmosphere.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Earth;
