import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
	color: var(--color-white);
	transition: var(--transition);

	&:hover {
		color: var(--color-primary);
	}

	&.active {
		color: var(--color-primary);
		border-bottom: 1px solid var(--color-primary);
	}
`;

export const LogoSpan = styled.span`
	color: var(--color-primary);
`;

// Actual nav
export const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
	font-family: sans-serif;
`;

export const NavLinks = styled.div`
	display: flex;
	gap: 1rem;
`;

export const StyledNav = styled.div`
	position: fixed;
	height: 5rem;
	display: flex;
	gap: 1rem;
	width: var(--container-width-large);
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-white);
`;
