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
	padding-top: 10rem;
	margin-bottom: 7rem;
`;

export const Headline = styled.h1`
	font-family: AstroSpace;
	font-size: 64px;
	line-height: 64px;
	margin: 0;
	white-space: nowrap;
	@media (max-width: 768px) {
		font-size: 48px;
	}
	@media (max-width: 400px) {
		font-size: 36px;
	}
`;

export const SubHeader = styled.h2`
	font-family: 'Orbitron', sans-serif;
	font-size: 28px;
	line-height: 28px;
	margin: 0;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const HeroLine = styled.div`
	border-top: 3px solid var(--color-primary);
	width: 200px;
`;

export const HeroText = styled.p`
	font-size: 20px;
	max-width: 45ch;
	text-align: center;
	@media (max-width: 768px) {
		font-size: 16px;
	}
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
	@media (max-width: 768px) {
		font-size: 22px;
	}
`;

export const PlanetContainer = styled.div`
	width: 100%;
	height: 50vw;
	border-top-left-radius: 110vw;
	border-top-right-radius: 110vw;
	background-color: #006be9;
	@media (max-width: 768px) {
		height: 50vh;
		transform: scaleX(2);
		border-top-left-radius: 200vw;
		border-top-right-radius: 200vw;
	}
`;
