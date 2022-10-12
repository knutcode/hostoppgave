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
	border: 1px solid orangered;
	border-radius: 50%;
	position: relative;
`;

export const ApiInfo = styled.h4`
	border-bottom: 2px solid var(--color-white);
	position: absolute;
	left: 28.58rem;
	top: -0.4rem;
	padding-inline: 0.5rem;
	width: max-content;
`;

export const ApiLineAngled = styled.div`
	border-top: 2px solid var(--color-white);
	width: 2rem;
	position: absolute;
	right: 2rem;
	top: 2rem;
	transform: rotate(-45deg);
`;

// Planet Info Container
export const PlanetInfoContainer = styled.div`
	border: 1px solid green;
	width: 50%;
`;
