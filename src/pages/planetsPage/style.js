import styled from "styled-components";

export const SideNav = styled.nav`
	font-size: 2rem;
	display: flex;
	gap: 1.9rem;
	flex-direction: column;
	width: fit-content;
	position: fixed;
	top: 50%;
	margin-block: 2.5rem;
	transform: translateY(-50%);

	& a {
		color: var(--color-white);
		transition: var(--transition);

		&:hover {
			color: var(--color-primary);
			cursor: pointer;
		}

		&.active {
			color: var(--color-primary);
		}
	}
`;

export const Section = styled.section`
	margin-top: -5rem;
`;
