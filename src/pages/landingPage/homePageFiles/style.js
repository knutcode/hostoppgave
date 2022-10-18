import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../../assets/Global.css";

export const Main = styled.main`
	overflow: hidden;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		height: initial;
	}
`;

export const Hero_Container = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 10rem;
	margin-bottom: 7rem;

	@media screen and (max-width: 600px) {
		padding-top: 2rem;
		margin-bottom: 2rem;
		height: fit-content;
		justify-content: initial;
	}
`;

export const Sub_Header = styled.h2`
	font-family: "Orbitron", sans-serif;
	font-size: 1.85rem;
	line-height: 1.85rem;

	@media screen and (max-width: 600px) {
		font-size: 1.1rem;
		margin-bottom: 0.2rem;
	}
`;

export const Header = styled.h1`
	font-family: AstroSpace;
	font-size: 4rem;
	line-height: 4rem;
	white-space: nowrap;

	@media screen and (max-width: 600px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 450px) {
		font-size: 2rem;
	}
`;

export const Header_Underline = styled.div`
	border-top: 3px solid var(--color-primary);
	width: 200px;

	@media screen and (max-width: 600px) {
		margin-block: 0.5rem 1.1rem;
	}
`;

export const Text = styled.p`
	font-size: 1.2rem;
	max-width: 45ch;
	text-align: center;

	@media screen and (max-width: 600px) {
		font-size: 1rem;
	}
`;

export const CTA_Button = styled(NavLink)`
	border-radius: 100px;
	padding: 0.5em 1em;
	background: var(--color-white);
	font-size: 1.5rem;
	color: black;
	font-weight: 500;
	cursor: pointer;
	transition: var(--transition);

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 600px) {
		font-size: 1.2rem;
		margin-top: 1rem;
	}
`;

export const Planet_Container = styled.div`
	width: 70%;
	aspect-ratio: 1/1;
	margin: auto;
	border-radius: 50%;
	overflow: hidden;
	position: relative;

	& img {
		height: 110%;
		aspect-ratio: 1/1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`;

export const Contribution = styled.small`
	position: absolute;
	display: flex;
	gap: 1rem;
	bottom: 1rem;
	left: 1rem;

	& a {
		color: var(--color-primary);
		transition: var(--transition);

		&:hover {
			color: var(--color-white);
		}
	}

	@media screen and (max-width: 1300px) {
		top: 6rem;
		left: 5%;
		bottom: initial;
	}

	@media screen and (max-width: 600px) {
		white-space: nowrap;
		bottom: 0.5rem;
		margin: 1rem auto 0.5rem;
		top: initial;
		position: initial;
	}
`;
