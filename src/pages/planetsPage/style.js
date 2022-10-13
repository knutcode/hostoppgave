import styled from "styled-components";

// Section for each planet
export const Section = styled.section`
	display: flex;
	margin-left: 7.8rem;
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    PLANET CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Planet_Container = styled.div`
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

export const Api_Info = styled.h4`
	border-bottom: 2px solid var(--color-white);
	position: absolute;
	left: 22.7rem;
	top: -0.4rem;
	padding-inline: 0.5rem;
	width: max-content;
`;

export const Angled_Line = styled.div`
	border-top: 2px solid var(--color-white);
	width: 2rem;
	position: absolute;
	right: 2rem;
	top: 2rem;
	transform: rotate(-45deg);
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Info_Container = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Api_Links = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
`;

export const Api_Link = styled.h4`
	font-weight: 400;
`;

export const Planet_Name = styled.h1`
	font-size: 3.5rem;
`;

export const Info_Headline = styled.h3`
	margin-block: 2rem;
`;

export const Info_Text = styled.h5`
	margin-block: 2rem;
`;

export const Info_Container_Underline = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid var(--color-white);
`;
