import styled from "styled-components";

// Section for each planet
export const Section = styled.section`
	display: flex;
	margin-left: 7.8rem;

	@media screen and (max-width: 1300px) {
		align-items: center;
		flex-direction: column;
		padding-top: 5rem;
	}

	@media screen and (max-width: 600px) {
		margin: 0;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    PLANET CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Planet_Container = styled.div`
	width: 50%;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& p {
		font-size: 0.6rem;
		font-family: sans-serif;
		color: grey;

		& a {
			color: var(--color-primary);

			&:hover {
				color: var(--color-white);
			}
		}
	}
`;

export const Planet = styled.div`
	margin-top: 5rem;
	width: 25rem;
	aspect-ratio: 1/1;
	border-radius: 50%;
	position: relative;
	display: grid;

	@media screen and (max-width: 1300px) {
		width: 16rem;
		margin-top: 2.5rem;
	}

	@media screen and (max-width: 600px) {
		width: 12rem;
	}
`;

export const Img = styled.img`
	width: 100%;
	margin: auto;
`;

export const Api_Info_Absolute = styled.h4`
	border-bottom: 2px solid var(--color-white);
	position: absolute;
	left: 22.7rem;
	top: -0.4rem;
	padding-inline: 0.5rem;
	width: max-content;

	@media screen and (max-width: 1300px) {
		left: 15.6rem;
	}

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const Angled_Line = styled.div`
	border-top: 2px solid var(--color-white);
	width: 2rem;
	position: absolute;
	right: 2rem;
	top: 2rem;
	transform: rotate(-45deg);

	@media screen and (max-width: 1300px) {
		right: 0rem;
		top: 2rem;
	}

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Info_Container = styled.div`
	width: 50%;
	display: flex;
	margin-top: 5rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1300px) {
		width: 80%;
		margin-top: 1rem;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
		margin-top: 2rem;
	}
`;

export const Info_Container_Div = styled.div`
	width: 80%;

	@media screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const Api_Links = styled.div`
	display: flex;
	gap: 1rem;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const Api_Link = styled.h3`
	font-weight: 300;
`;

export const Planet_Name = styled.h1`
	font-size: 3.5rem;
	font-family: AstroSpace, sans-serif;

	@media screen and (max-width: 600px) {
		font-size: 2.2rem;
		text-align: center;
	}
`;

export const Info_Headline = styled.h2`
	margin-block: 2rem 1rem;
	font-size: 1.3rem;
	color: var(--color-primary);
	font-family: AstroSpace, sans-serif;

	@media screen and (max-width: 600px) {
		font-size: 1rem;
		margin-block: 0.5rem;
	}
`;

export const Info_Text = styled.p`
	font-family: AstroSpace, sans-serif;
	margin-bottom: 2rem;
	font-weight: 300;
	font-size: 0.8rem;
	line-height: 2;

	@media screen and (max-width: 600px) {
		font-size: 0.7rem;
	}
`;

export const Info_Container_Underline = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid var(--color-white);

	@media screen and (max-width: 1300px) {
		margin-bottom: 2rem;
	}
`;
