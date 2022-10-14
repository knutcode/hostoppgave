import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media (max-width: 1090px) {
		flex-direction: column;
	} ;
`;

export const ContactLeft = styled.div`
	margin: 130px 0px 0px 70px;
`;

export const ContactRight = styled.div`
	margin: 130px 50px 0px 0px;
`;

export const ContactInfo = styled.div`
	margin-bottom: 3rem;
	text-align: right;
`;

export const ContactLink = styled.div`
	text-align: right;
`;

export const Link = styled.a`
	margin-inline: 0.5em;
	text-align: right;
	font-size: 24px;
	color: var(--color-white);
`;

export const User = styled.input`
	color: var(--color-primary);
	background-color: var(--color-bg);
	border-bottom: var(--color-primary) 2px solid;
	width: 100%;
	height: 2rem;
	margin-bottom: 5%;
`;
export const Comment = styled.textarea`
	color: var(--color-primary);
	background-color: var(--color-bg);
	border: var(--color-primary) 2px solid;
	width: 100%;
	height: 200px;
	resize: none;
`;

export const Title = styled.h1`
	color: var(--color-primary);
	font-size: 28px;
	letter-spacing: 5px;
`;
export const Text = styled.h2`
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 3px;
`;

export const SubmitBtn = styled.button`
	border-radius: 50px;
	height: 25px;
	width: 90px;
	background-color: var(--color-white);
`;
