import React from "react";
import Earth from "./components/earth/Earth";
import Jupiter from "./components/jupiter/Jupiter";
import Mars from "./components/mars/Mars";
import Mercury from "./components/mercury/Mercury";
import Neptune from "./components/neptune/Neptune";
import Saturn from "./components/saturn/Saturn";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import Uranus from "./components/uranus/Uranus";
import Venus from "./components/venus/Venus";

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
