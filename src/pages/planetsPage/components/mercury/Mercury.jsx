import React from "react";
import MERCURY from "../../../../assets/images/mercury.png";
import * as s from "../../style";

const Mercury = () => {
	return (
		<>
			<s.Section id="mercury">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={MERCURY} alt="mercury" />

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
						<s.PlanetName>MERCURY</s.PlanetName>
						<s.PlanetInfoHeadline>
							Mercury is hot, but not too hot for ice
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							The closest planet to the Sun does indeed have ice on its surface. That
							sounds surprising at first glance, but the ice is found in permanently
							shadowed craters — those that never receive any sunlight. It is thought
							that perhaps comets delivered this ice to Mercury in the first place. In
							fact, NASA's MESSENGER spacecraft not only found ice at the north pole,
							but it also found organics, which are the building blocks for life.
							Mercury is way too hot and airless for life as we know it, but it shows
							how these elements are distributed across the Solar System.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Mercury;
