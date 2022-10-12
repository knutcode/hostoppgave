import React from "react";
import * as s from "../../style";

const Venus = () => {
	return (
		<>
			<s.Section id="venus">
				<s.PlanetContainer>
					<s.PlanetApiLinks>
						<s.PlanetApiLink href="">api 1</s.PlanetApiLink>
						<s.PlanetApiLink>api 2</s.PlanetApiLink>
						<s.PlanetApiLink>api 3</s.PlanetApiLink>
					</s.PlanetApiLinks>
					<s.Planet>
						<s.ApiInfo>Api Info</s.ApiInfo>
						<s.ApiLineAngled></s.ApiLineAngled>
					</s.Planet>
				</s.PlanetContainer>
				<s.PlanetInfoContainer></s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Venus;
