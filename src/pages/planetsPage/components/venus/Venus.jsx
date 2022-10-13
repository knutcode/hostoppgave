import React from "react";
import VENUS from "../../../../assets/images/venus.png";
import * as s from "../../style";

const Venus = () => {
	return (
		<>
			<s.Section id="venus">
				<s.PlanetContainer>
					<s.Planet>
						<s.Img src={VENUS} alt="venus" />
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
						<s.PlanetName>VENUS</s.PlanetName>
						<s.PlanetInfo>Planet Info</s.PlanetInfo>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Venus;
