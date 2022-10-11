import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "../../contactPage";
import ErrorPage from "../../errorPage";
import LandingPage from "../../homePage";
import PlanetsPage from "../../planetsPage";
import { StyledLink } from "./style";

const Navbar = () => {
	return (
		<>
			<nav>
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/planets">Planets</StyledLink>
				<StyledLink to="/contact">Contact</StyledLink>
			</nav>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/planets" element={<PlanetsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default Navbar;
