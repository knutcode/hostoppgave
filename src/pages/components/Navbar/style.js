import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Actual nav
export const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Nav_Content = styled.div`
	position: fixed;
	height: 5rem;
	display: flex;
	gap: 1rem;
	width: var(--container-width);
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-white);
	backdrop-filter: blur(10px);
	z-index: 1;

	& .logoContainer {
		display: flex;
		color: var(--color-white);
		transition: var(--transition);

		& .icon {
			font-size: 2.5rem;
			vertical-align: middle;
			margin-inline: 0.5rem;
		}

		& h2 {
			@media screen and (max-width: 600px) {
				display: none;
			}
		}

		& span {
			color: var(--color-primary);
		}

		&:hover {
			letter-spacing: 0.3rem;
		}
	}

	@media (max-width: 600px) {
		height: 3rem;
	} ;
`;

export const Nav_Links = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: 600px) {
		font-size: 0.8rem;
	} ;
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
