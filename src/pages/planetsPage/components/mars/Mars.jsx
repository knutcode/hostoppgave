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
						<s.PlanetInfoHeadline>Headline</s.PlanetInfoHeadline>
						<s.PlanetInfoText>Text</s.PlanetInfoText> <s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Mars;
