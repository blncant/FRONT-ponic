import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	padding: 0.8rem 1.5rem;
	outline: none;
	border: none;
	background: var(--btn-gradient);
	color: white;
	font-weight: 400;
	cursor: pointer;
	font-size: var(--fs-btn);
	text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

	&:hover {
		background-image: linear-gradient(90deg, #ffaf87 0%, #9bfbea 100%);
		color: var(--color-green-dark);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	${({ secondary }) =>
		secondary &&
		css`
			background: var(--color-green-contact);
		`}

	&:hover {
		color: var(--clr--card-text);
		background: white;
	}
`;
