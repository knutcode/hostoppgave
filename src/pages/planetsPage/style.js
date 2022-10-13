import styled from "styled-components";

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

export const Planet = styled.div`
	margin-top: 5rem;
	width: 25rem;
	aspect-ratio: 1/1;
	border-radius: 50%;
	position: relative;
	display: grid;
`;

export const Img = styled.img`
	width: 100%;
	margin: auto;
`;

export const ApiInfo = styled.h4`
	border-bottom: 2px solid var(--color-white);
	position: absolute;
	left: 22.7rem;
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
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PlanetApiLinks = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
`;

export const PlanetApiLink = styled.h4`
	font-weight: 400;
`;

export const PlanetName = styled.h1`
	font-size: 3.5rem;
`;

export const PlanetInfoHeadline = styled.h3`
	margin-block: 2rem;
`;

export const PlanetInfoText = styled.h5`
	margin-block: 2rem;
`;

export const InfoContainerDivider = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid var(--color-white);
`;
