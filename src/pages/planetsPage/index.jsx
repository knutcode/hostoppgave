import React from "react";
import Earth from "./components/earth/Earth";
import Jupiter from "./components/jupiter/Jupiter";
import Mars from "./components/mars/Mars";
import Mercury from "./components/mercury/Mercury";
import Moon from "./components/moon/Moon";
import Neptune from "./components/neptune/Neptune";
import Saturn from "./components/saturn/Saturn";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import Sun from "./components/sun/Sun";
import Uranus from "./components/uranus/Uranus";
import Venus from "./components/venus/Venus";

const PlanetsPage = () => {
	return (
		<>
			<div className="container" style={{ padding: 0 }}>
				<SideNavbar />
				<Sun />
				<Mercury />
				<Venus />
				<Earth />
				<Moon />
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
