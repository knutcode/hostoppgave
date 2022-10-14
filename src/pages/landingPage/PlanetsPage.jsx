import React from "react";
import Earth from "./planetsPage/components/earth/Earth";
import Jupiter from "./planetsPage/components/jupiter/Jupiter";
import Mars from "./planetsPage/components/mars/Mars";
import Mercury from "./planetsPage/components/mercury/Mercury";
import Neptune from "./planetsPage/components/neptune/Neptune";
import Saturn from "./planetsPage/components/saturn/Saturn";
import SideNavbar from "./planetsPage/components/sideNavbar/SideNavbar";
import Uranus from "./planetsPage/components/uranus/Uranus";
import Venus from "./planetsPage/components/venus/Venus";

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
