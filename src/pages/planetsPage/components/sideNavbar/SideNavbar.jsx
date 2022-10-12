import { Link } from "react-scroll";
import * as s from "../../style";

import React from "react";

const SideNavbar = () => {
	return (
		<>
			<s.SideNav>
				<Link to="sun" spy={true} smooth={true} offset={0} duration={400}>
					Sun
				</Link>
				<Link to="mercury" spy={true} smooth={true} offset={0} duration={400}>
					Mercury
				</Link>
				<Link to="venus" spy={true} smooth={true} offset={0} duration={400}>
					Venus
				</Link>
				<Link to="earth" spy={true} smooth={true} offset={0} duration={400}>
					Earth
				</Link>
				<Link to="moon" spy={true} smooth={true} offset={0} duration={400}>
					Moon
				</Link>
				<Link to="mars" spy={true} smooth={true} offset={0} duration={400}>
					Mars
				</Link>
				<Link to="jupiter" spy={true} smooth={true} offset={0} duration={400}>
					Jupiter
				</Link>
				<Link to="saturn" spy={true} smooth={true} offset={0} duration={400}>
					Saturn
				</Link>
				<Link to="uranus" spy={true} smooth={true} offset={0} duration={400}>
					Uranus
				</Link>
				<Link to="neptune" spy={true} smooth={true} offset={0} duration={400}>
					Neptune
				</Link>
			</s.SideNav>
		</>
	);
};

export default SideNavbar;
