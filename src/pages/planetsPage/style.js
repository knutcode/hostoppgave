import styled from "styled-components";

// Navbar on left side for the planets
export const SideNav = styled.nav`
	font-size: 2rem;
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
		font-weight: 200;
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

// Section for each planet
export const Section = styled.section`
	display: flex;
	margin-left: 7.8rem;
`;

// Planet Container
export const PlanetContainer = styled.div`
	/* background-color: red; */
	width: 50%;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PlanetApiLinks = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 5rem;
`;

export const PlanetApiLink = styled.h3``;

export const Planet = styled.div`
	width: 31rem;
	aspect-ratio: 1/1;
	background-color: blue;
	border-radius: 50%;
`;

// Planet Info Container
export const PlanetInfoContainer = styled.div`
	background-color: green;
	width: 50%;
`;
