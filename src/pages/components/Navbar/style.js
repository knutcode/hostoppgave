import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Actual nav
export const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
	font-family: sans-serif;
`;

export const Styled_Nav = styled.div`
	position: fixed;
	height: 5rem;
	display: flex;
	gap: 1rem;
	width: var(--container-width-large);
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-white);
	backdrop-filter: blur(10px);
	z-index: 1;
`;

export const Logo_Span = styled.span`
	color: var(--color-primary);
`;

export const Nav_Links = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Styled_NavLink = styled(NavLink)`
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
