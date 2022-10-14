import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { Route, Routes } from "react-router";
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
					<h2>
						<FaSpaceShuttle className="icon" />
						Lo<s.Logo_Span>go</s.Logo_Span>
					</h2>
					<s.Nav_Links>
						<s.Styled_NavLink to="/home" activeClassName="active">
							Home
						</s.Styled_NavLink>
						<s.Styled_NavLink to="/planets" activeClassName="active">
							Planets
						</s.Styled_NavLink>
						<s.Styled_NavLink to="/contact" activeClassName="active">
							Contact Us
						</s.Styled_NavLink>
					</s.Nav_Links>
				</s.Styled_Nav>
			</s.Nav>
			<Routes>
				<Route path="/home" element={<LandingPage />} />
				<Route path="/planets" element={<PlanetsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default Navbar;
