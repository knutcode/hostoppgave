import styled from 'styled-components';
import '../../assets/Global.css';

export const Main = styled.main`
	overflow: hidden;
	height: 100vh;
`;

export const HeroContainer = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 7rem;
	margin-bottom: 7rem;
`;

export const Headline = styled.h1`
	font-size: 64px;
	line-height: 64px;
	margin: 0;
`;

export const SubHeader = styled.h2`
	font-size: 28px;
	line-height: 28px;
	margin: 0;
`;

export const HeroLine = styled.div`
	border-top: 3px solid var(--color-primary);
	width: 200px;
`;

export const HeroText = styled.p`
	font-size: 20px;
`;

export const HeroBtn = styled.button`
	border-radius: 100px;
	padding: 0.5em 1em;
	background: var(--color-white);
	font-family: inherit;
	font-size: 28px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.15s;
	&:hover {
		transform: scale(1.1);
	}
`;

export const PlanetContainer = styled.div`
	width: 100%;
	height: 50vw;
	border-top-left-radius: 110vw;
	border-top-right-radius: 110vw;
	background-color: #006be9;
`;
