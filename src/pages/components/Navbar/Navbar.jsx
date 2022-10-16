import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import ContactPage from "../../landingPage/ContactPage";
import ErrorPage from "../../landingPage/ErrorPage";
import LandingPage from "../../landingPage/HomePage";
import PlanetsPage from "../../landingPage/PlanetsPage";
import * as s from "./style";

const Navbar = () => {
	return (
		<>
			<s.Nav>
				<s.Styled_Nav>
					<NavLink to="/" exact className="logoContainer">
						<FaSpaceShuttle className="icon" />
						<h2>
							LO<span>GO</span>
						</h2>
					</NavLink>
					<s.Nav_Links>
						<s.Styled_NavLink end to="/" exact activeclassname="active">
							Home
						</s.Styled_NavLink>
						<s.Styled_NavLink to="/planets" activeclassname="active">
							Planets
						</s.Styled_NavLink>
						<s.Styled_NavLink to="/contact" activeclassname="active">
							Contact Us
						</s.Styled_NavLink>
					</s.Nav_Links>
				</s.Styled_Nav>
			</s.Nav>
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
