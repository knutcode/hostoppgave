import styled from 'styled-components';

export const ContactContainer = styled.div`
	padding-block: 10%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	@media (max-width: 1090px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} ;
`;

export const ContactLeft = styled.div`
	max-width: 500px;
	@media (max-width: 1090px) {
		order: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
	} ;
`;

export const ContactRight = styled.div`
	max-width: 500px;
	text-align: right;
	@media (max-width: 1090px) {
		text-align: center;
		margin-bottom: 3rem;
	} ;
`;

export const ContactInfo = styled.div`
	margin-bottom: 3rem;
`;

export const ContactLink = styled.div``;

export const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 1090px) {
		flex-direction: row;
		justify-content: center;
	} ;
`;

export const Link = styled.a`
	margin-inline: 0.5em;
	font-size: 24px;
	color: var(--color-white);
	> * {
		vertical-align: middle;
		margin-left: 0.5em;
	}
`;

export const User = styled.input`
	font-size: 18px;
	font-family: inherit;
	color: var(--color-primary);
	background-color: var(--color-bg);
	border-bottom: var(--color-white) 2px solid;
	width: 100%;
	height: 2rem;
	margin-bottom: 1rem;
`;
export const Comment = styled.textarea`
	padding: 0.5em;
	font-size: 18px;
	font-family: inherit;
	color: var(--color-primary);
	background-color: var(--color-bg);
	border: var(--color-white) 2px solid;
	width: 100%;
	height: 200px;
	resize: none;
	margin-bottom: 1rem;
`;

export const Title = styled.h1`
	color: var(--color-primary);
	font-size: 24px;
	letter-spacing: 5px;
	font-family: AstroSpace;
`;
export const Text = styled.h2`
	font-size: 24px;
	font-weight: 400;
	letter-spacing: 0.03em;
`;

export const SubmitBtn = styled.button`
	width: 100px;
	border-radius: 100px;
	padding: 0.4em 1em;
	background: var(--color-white);
	font-family: inherit;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	transition: 0.15s;
	&:hover {
		transform: scale(1.1);
	}
`;
