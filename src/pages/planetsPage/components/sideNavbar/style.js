import styled from "styled-components";

export const Side_Navbar = styled.nav`
	font-size: 1.3rem;
	display: flex;
	gap: 1.9rem;
	flex-direction: column;
	width: 7.8rem;
	position: fixed;
	top: 50%;
	margin-block: 2.5rem;
	transform: translateY(-50%);

	/* Links in navbar */
	& a {
		transition: var(--transition);

		&:hover {
			color: var(--color-primary);
			cursor: pointer;
			margin-left: 0.2rem;
		}

		&.active {
			color: var(--color-primary);
		}
	}
`;
