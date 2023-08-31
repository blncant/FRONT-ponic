import styled from "styled-components";

export const HomeWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`;

export const CategoriasWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	text-align: center;

	h2 {
		line-height: 1;
		color: var(--color-blue);
		font-size: 2rem;
		font-weight: 700px;
		margin-bottom: 20px;

		@media (min-width: 40em) {
			font-size: var(--fs-section-media);
		}
	}

	p {
		font-size: 1em;
		font-weight: 300;
		line-height: 1.5;
		color: white;

		@media (min-width: 40em) {
			font-size: var(--fs-section-text-media);
		}
	}
`;

export const ProductosWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	text-align: center;

	padding: 2rem;
`;
