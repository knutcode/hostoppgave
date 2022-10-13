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
						<s.PlanetInfoHeadline>Headline</s.PlanetInfoHeadline>
						<s.PlanetInfoText>Text</s.PlanetInfoText> <s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Saturn;
