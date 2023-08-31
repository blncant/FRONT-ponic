import styled from "styled-components";

export const HeroBgStyled = styled.section`
	background-image: url("../assets/img/Bg-1500px.png");
	background-size: cover;
	width: 100%;
	background-position: center;
	margin-top: 4em;
	/* animation: bounce 0.9s infinite; */
`;

export const HeroContainerStyled = styled.div`
	max-width: 1300px;
	width: 100%;
	padding: 10% 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	gap: 15px;

	@media (max-width: 30em) {
		padding: 4rem 2rem;
	}

	h3 {
		color: var(--color-blue);
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: 700;
	}

	span {
		color: var(--color-blue);
	}

	h1 {
		color: white;
		font-size: 3rem;
		line-height: 1;
		text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

		@media (min-width: 40em) {
			width: 90%;
			font-size: var(--fs-hero-media);
		}

		@media (min-width: 60em) {
			width: 55%;
		}
	}
`;

export const HeroBtnsStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top: 40px;
`;
