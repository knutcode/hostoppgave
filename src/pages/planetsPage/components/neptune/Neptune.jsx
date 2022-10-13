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
						<s.PlanetInfoHeadline>Neptune has supersonic winds. </s.PlanetInfoHeadline>
						<s.PlanetInfoText>
							While on Earth we are concerned about hurricanes, the strength of these
							storms is nowhere near what you would find on Neptune. At its highest
							altitudes, according to NASA, winds blow at more than 1,100 miles per
							hour (1,770 kilometers per hour). To put that in context, that's faster
							than the speed of sound on Earth, at sea level. Why Neptune is so
							blustery is a mystery, especially considering the Sun's heat is so
							little at its distance.
						</s.PlanetInfoText>
						<s.InfoContainerDivider />
					</div>
				</s.PlanetInfoContainer>
			</s.Section>
		</>
	);
};

export default Neptune;
