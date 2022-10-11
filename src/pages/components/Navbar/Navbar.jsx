import React, { useState } from "react";
import { Route, Routes } from "react-router";
import ContactPage from "../../contactPage";
import ErrorPage from "../../errorPage";
import LandingPage from "../../homePage";
import PlanetsPage from "../../planetsPage";
import * as s from "./style";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("home");

	return (
		<>
			<s.Nav>
				<s.StyledNav>
					<h2>
						Lo<s.LogoSpan>go</s.LogoSpan>
					</h2>
					<s.NavLinks>
						<s.StyledLink
							to="/"
							className={activeNav === "home" ? "active" : ""}
							onClick={() => setActiveNav("home")}
						>
							Home
						</s.StyledLink>
						<s.StyledLink
							to="/planets"
							className={activeNav === "planets" ? "active" : ""}
							onClick={() => setActiveNav("planets")}
						>
							Planets
						</s.StyledLink>
						<s.StyledLink
							to="/contact"
							className={activeNav === "contact" ? "active" : ""}
							onClick={() => setActiveNav("contact")}
						>
							Contact
						</s.StyledLink>
					</s.NavLinks>
				</s.StyledNav>
			</s.Nav>
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
