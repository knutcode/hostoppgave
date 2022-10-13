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
					</a>{" "}
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
						<s.PlanetInfoHeadline>Headline</s.PlanetInfoHeadline>
						<s.PlanetInfoText>Text</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Earth;
