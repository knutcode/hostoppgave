import React from "react";
import MARS from "../../../../assets/images/mars.png";
import * as s from "../../style";

const Mars = () => {
	return (
		<>
			<s.Section id="mars">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={MARS} alt="mars" />

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
						<s.PlanetName>MARS</s.PlanetName>
						<s.PlanetInfoHeadline>
							Mars had a thicker atmosphere in the past.
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							What a bunch of contrasts in the inner Solar System: practically
							atmosphere-less Mercury, a runaway hothouse greenhouse effect happening
							in Venus' thick atmosphere, temperate conditions on much of Earth and
							then a thin atmosphere on Mars. But look at the planet and you can see
							gullies carved in the past from probable water. Water requires more
							atmosphere, so Mars had more in the past. Where did it go? Some
							scientists believe it's because the Sun's energy pushed the lighter
							molecules out of Mars' atmosphere over millions of years, decreasing the
							thickness over time.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Mars;
