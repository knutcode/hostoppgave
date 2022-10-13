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
						<s.PlanetInfo>Planet Info</s.PlanetInfo>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Mercury;
