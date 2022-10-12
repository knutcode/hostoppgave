import React from "react";
import SideNavbar from "./components/SideNavbar";
import * as s from "./style";

const PlanetsPage = () => {
	return (
		<>
			<div className="container" style={{ padding: 0 }}>
				<SideNavbar />
				<s.Section id="sun">
					<s.PlanetContainer>
						<s.PlanetApiLinks>
							<s.PlanetApiLink href="">api 1</s.PlanetApiLink>
							<s.PlanetApiLink>api 2</s.PlanetApiLink>
							<s.PlanetApiLink>api 3</s.PlanetApiLink>
						</s.PlanetApiLinks>
						<s.Planet />
					</s.PlanetContainer>
					<s.PlanetInfoContainer></s.PlanetInfoContainer>
				</s.Section>
				<s.Section id="mercury"></s.Section>
				<s.Section id="venus"></s.Section>
				<s.Section id="earth"></s.Section>
				<s.Section id="moon"></s.Section>
				<s.Section id="mars"></s.Section>
				<s.Section id="jupiter"></s.Section>
				<s.Section id="saturn"></s.Section>
				<s.Section id="uranus"></s.Section>
				<s.Section id="neptune"></s.Section>
			</div>
		</>
	);
};

export default PlanetsPage;
