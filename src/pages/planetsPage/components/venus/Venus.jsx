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
						<s.PlanetInfoHeadline>
							Venus doesn't have any moons, and we aren't sure why.
						</s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							Both Mercury and Venus have no moons, which can be considered a surprise
							given there are dozens of other ones around the Solar System. Saturn has
							over 60, for example. And some moons are little more than captured
							asteroids, which may have been what happened with Mars' two moons, for
							example. So what makes these planets different? No one is really sure
							why Venus doesn't, but there is at least one stream of research that
							suggests it could have had one in the past.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Venus;
