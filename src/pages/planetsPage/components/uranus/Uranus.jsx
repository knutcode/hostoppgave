import React from "react";
import URANUS from "../../../../assets/images/uranus.png";
import * as s from "../../style";

const Uranus = () => {
	return (
		<>
			<s.Section id="uranus">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={URANUS} alt="uranus" />

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
						<s.PlanetName>URANUS</s.PlanetName>
						<s.PlanetInfoHeadline>
							Uranus is more stormy than we thought.
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							When Voyager 2 flew by the planet in the 1980s, scientists saw a mostly
							featureless blue ball and some assumed there wasn't much activity going
							on on Uranus. We've had a better look at the data since then that does
							show some interesting movement in the southern hemisphere. Additionally,
							the planet drew closer to the Sun in 2007, and in more recent years
							telescope probing has shown some storms going on. What is causing all
							this activity is difficult to say unless we were to send another probe
							that way. And unfortunately, there are no missions yet that are slated
							for sure to zoom out to that part of the Solar System.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Uranus;
