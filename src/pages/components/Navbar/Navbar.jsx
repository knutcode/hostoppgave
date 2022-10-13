import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "../../contactPage";
import ErrorPage from "../../errorPage";
import LandingPage from "../../homePage";
import PlanetsPage from "../../planetsPage";
import * as s from "./style";

const Navbar = () => {
	return (
		<>
			<s.Nav>
				<s.StyledNav>
					<h2>
						Lo<s.LogoSpan>go</s.LogoSpan>
					</h2>
					<s.NavLinks>
						<s.StyledLink to="/home" activeClassName="active">
							Home
						</s.StyledLink>
						<s.StyledLink to="/planets" activeClassName="active">
							Planets
						</s.StyledLink>
						<s.StyledLink to="/contact" activeClassName="active">
							Contact Us
						</s.StyledLink>
					</s.NavLinks>
				</s.StyledNav>
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
