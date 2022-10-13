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
						<s.PlanetInfo>Planet Info</s.PlanetInfo>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Uranus;
