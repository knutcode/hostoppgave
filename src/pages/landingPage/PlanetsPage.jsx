import React from "react";
import Earth from "./planetsPageFiles/components/earth/Earth";
import Jupiter from "./planetsPageFiles/components/jupiter/Jupiter";
import Mars from "./planetsPageFiles/components/mars/Mars";
import Mercury from "./planetsPageFiles/components/mercury/Mercury";
import Neptune from "./planetsPageFiles/components/neptune/Neptune";
import Saturn from "./planetsPageFiles/components/saturn/Saturn";
import SideNavbar from "./planetsPageFiles/components/sideNavbar/SideNavbar";
import Uranus from "./planetsPageFiles/components/uranus/Uranus";
import Venus from "./planetsPageFiles/components/venus/Venus";

const PlanetsPage = () => {
	return (
		<>
			<div className="container" style={{ padding: 0 }}>
				<SideNavbar />
				<Mercury />
				<Venus />
				<Earth />
				<Mars />
				<Jupiter />
				<Saturn />
				<Uranus />
				<Neptune />
			</div>
		</>
	);
};

export default PlanetsPage;
