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
						<s.PlanetInfo>Planet Info</s.PlanetInfo>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Jupiter;
