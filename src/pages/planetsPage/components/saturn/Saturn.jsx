import React from "react";
import SATURN from "../../../../assets/images/saturn.png";
import * as s from "../../style";

const Saturn = () => {
	return (
		<>
			<s.Section id="saturn">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={SATURN} alt="saturn" />

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
						<s.PlanetName>SATURN</s.PlanetName>
						<s.PlanetInfoHeadline>
							No one knows how old Saturn's rings are
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							There's a field of ice and rock debris circling Saturn that from afar,
							appear as rings. Early telescope observations of the planet in the 1600s
							caused some confusion: does that planet have ears, or moons, or what?
							With better resolution, however, it soon became clear that there was a
							chain of small bodies encircling the gas giant. It's possible that a
							single moon tore apart under Saturn's strong gravity and produced the
							rings. Or, maybe they've been around (pun intended) for the last few
							billion years, unable to coalesce into a larger body but resistant
							enough to gravity not to break up.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Saturn;
