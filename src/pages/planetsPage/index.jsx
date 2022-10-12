import React from "react";
import SideNavbar from "./components/SideNavbar";
import * as s from "./style";

const PlanetsPage = () => {
	return (
		<>
			<div className="container">
				<SideNavbar />
				<s.Section id="sun"></s.Section>
				<section id="mercury"></section>
				<section id="venus"></section>
				<section id="earth"></section>
				<section id="moon"></section>
				<section id="mars"></section>
				<section id="jupiter"></section>
				<section id="saturn"></section>
				<section id="uranus"></section>
				<section id="neptune"></section>
			</div>
		</>
	);
};

export default PlanetsPage;
