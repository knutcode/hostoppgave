import React from "react";
import NEPTUNE from "../../../../assets/images/neptune.png";
import * as s from "../../style";

const Neptune = () => {
	return (
		<>
			<s.Section id="neptune">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={NEPTUNE} alt="neptune" />

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
						<s.PlanetName>NEPTUNE</s.PlanetName>
						<s.PlanetInfoHeadline>Headline</s.PlanetInfoHeadline>
						<s.PlanetInfoText>Text</s.PlanetInfoText> <s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Neptune;
