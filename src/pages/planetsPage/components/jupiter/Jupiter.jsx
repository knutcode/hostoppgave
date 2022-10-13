import React from "react";
import JUPITER from "../../../../assets/images/jupiter.png";
import * as s from "../../style";

const Jupiter = () => {
	return (
		<>
			<s.Section id="jupiter">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={JUPITER} alt="jupiter" />

						<s.ApiInfo>Api Info</s.ApiInfo>
						<s.ApiLineAngled></s.ApiLineAngled>
					</s.Planet>
				</s.PlanetContainer>
				<s.PlanetInfoContainer>
					<div>
						<s.PlanetApiLinks>
							<s.PlanetApiLink>api 1</s.PlanetApiLink>
							<s.PlanetApiLink>api 2</s.PlanetApiLink>
							<s.PlanetApiLink>api 3</s.PlanetApiLink>
						</s.PlanetApiLinks>
						<s.PlanetName>JUPITER</s.PlanetName>
						<s.PlanetInfoHeadline>
							Jupiter is a great comet catcher.
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							The most massive planet in the Solar System probably had a huge
							influence on its history. At 318 times the mass of Earth, you can
							imagine that any passing asteroid or comet going near Jupiter has a big
							chance of being caught or diverted. Maybe Jupiter was partly to blame
							for the great bombardment of small bodies that peppered our young Solar
							System early in its history, causing scars you can still see on the Moon
							today. And in 1994, astronomers worldwide were treated to a rare sight:
							a comet, Shoemaker-Levy 9, breaking up under Jupiter's gravity and
							slamming into the atmosphere.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Jupiter;
