import styled from "styled-components";

export const ProductosContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	grid-gap: 1em;
	justify-content: center;
	align-items: center;

	width: 100%;
`;

export const ProductCard = styled.div`
	background: white;
	border-radius: 20px;
`;

export const CardTop = styled.div`
	position: relative;

	button {
		background-color: var(--color-orange);
		width: 50px;
		height: 50px;
		border: none;
		border-radius: 50%;

		color: white;
		font-size: 11px;
		text-align: center;

		position: absolute;
		z-index: 3;
		left: 50%;
		margin-left: -25px;
		top: 50%;
		margin-top: -25px;

		cursor: pointer;
	}

	svg {
		font-size: 20px;
	}

	img {
		max-width: 100%;
		width: 100%;
		aspect-ratio: 1/1.25;
		object-fit: cover;
		border-radius: 20px 20px 0 0;
		display: block;
	}
`;

export const CardContent = styled.div`
	padding: 1rem;
	text-align: left;
	color: var(--clr--card-text);

	p {
		font-size: 1.3em;
		font-weight: 800;
		padding: 0.5em 0;
		color: var(--color-orange);
	}

	h4 {
		font-size: 0.6em;
		letter-spacing: 3px;
		font-weight: 400;
		text-transform: uppercase;
	}

	h3 {
		padding: 0.2em 0;
		font-size: 1.3rem;
	}
`;

export const BtnContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 40px;
`;
