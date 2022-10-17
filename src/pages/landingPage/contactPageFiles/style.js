import styled from "styled-components";

export const Container = styled.div`
	margin-top: -5rem;
	height: 100vh;
	display: flex;
	gap: 5rem;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 1300px) {
		gap: 0;
		padding-top: 8rem;
		flex-direction: column;
		justify-content: initial;
	}

	@media (max-width: 600px) {
		padding-top: 6rem;
	} ;
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    FORM CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Form_Container = styled.div`
	max-width: 500px;
	margin-top: 5rem;

	@media (max-width: 1300px) {
		order: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: initial;
		align-items: center;
	} ;
`;

export const Name_Email = styled.input`
	font-size: 1.1rem;
	padding: 0 0 0 0.3em;
	font-family: inherit;
	color: var(--color-primary);
	background-color: var(--color-bg);
	border-bottom: 2px solid var(--color-primary);
	width: 100%;
	height: 2rem;
	margin-bottom: 1rem;
	transition: var(--transition);

	&:focus {
		border-color: var(--color-white);
	}
`;
export const Comment = styled.textarea`
	padding: 0.3em 0 0 0.3em;
	font-size: 1.1rem;
	font-family: inherit;
	color: var(--color-primary);
	background-color: var(--color-bg);
	border: 2px solid var(--color-primary);
	width: 100%;
	height: 200px;
	resize: none;
	margin-bottom: 1rem;
	transition: var(--transition);

	&:focus {
		border-color: var(--color-white);
	}
`;

export const Submit_Btn = styled.button`
	border-radius: 0.5em;
	padding: 0.5em 1em;
	background: var(--color-primary);
	font-family: inherit;
	font-size: 1.2rem;
	font-weight: 500;
	cursor: pointer;
	transition: var(--transition);

	&:hover {
		transform: scale(1.1);
		background: var(--color-white);
	}

	@media (max-width: 600px) {
		margin-bottom: 1rem;
	} ;
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CONTACT CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Contact_Container = styled.div`
	max-width: 500px;
	text-align: right;

	@media (max-width: 1300px) {
		text-align: center;
		margin-bottom: 3rem;
	} ;
`;

export const Contact_Info = styled.div`
	margin-bottom: 3rem;
`;

export const Title = styled.h1`
	color: var(--color-primary);
	font-size: 1.5rem;
	letter-spacing: 5px;
	font-family: AstroSpace;
`;

export const Text = styled.h2`
	font-size: 1.3rem;
	font-weight: 400;
`;

export const Socials_Container = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1300px) {
		flex-direction: row;
		justify-content: center;
	} ;
`;

export const Socials = styled.a`
	margin-inline: 0.5em;
	font-size: 1.3rem;
	color: var(--color-white);
	transition: var(--transition);

	& .icon {
		vertical-align: middle;
		margin-left: 0.5em;
	}

	&:hover {
		color: var(--color-primary);
	}
`;
