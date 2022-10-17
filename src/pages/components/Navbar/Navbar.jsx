import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import ContactPage from "../../landingPage/ContactPage";
import ErrorPage from "../../landingPage/ErrorPage";
import LandingPage from "../../landingPage/HomePage";
import PlanetsPage from "../../landingPage/PlanetsPage";
import * as style from "./style";

const Navbar = () => {
	return (
		<>
			<style.Nav>
				<style.Nav_Content>
					<NavLink to="/" exact className="logoContainer">
						<FaSpaceShuttle className="icon" />
						<h2>
							LO<span>GO</span>
						</h2>
					</NavLink>
					<style.Nav_Links>
						<style.Styled_NavLink end to="/" exact activeclassname="active">
							Home
						</style.Styled_NavLink>
						<style.Styled_NavLink to="/planets" activeclassname="active">
							Planets
						</style.Styled_NavLink>
						<style.Styled_NavLink to="/contact" activeclassname="active">
							Contact Us
						</style.Styled_NavLink>
					</style.Nav_Links>
				</style.Nav_Content>
			</style.Nav>
			<Routes>
				<Route path="/" exact element={<LandingPage />} />
				<Route path="/planets" element={<PlanetsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default Navbar;
