import styled from "styled-components";

export const ContainerStyled = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 99;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;

	width: 450px;
	height: calc(100vh - 4rem);

	padding: 2rem;
	background-color: hsla(176, 82%, 34%, 0.9);
	color: white;
	box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

	//TABLET
	@media (max-width: 40em) {
		width: 70%;
	}

	//MOBILE
	@media (max-width: 30em) {
		width: 100%;
	}
`;

export const CloseButtonContainerStyled = styled.div`
	height: 32px;
`;

export const CloseButtonStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2rem;
	height: 2rem;
	outline: none;
	border: none;
	border-radius: 10px;

	color: var(--color-orange);
	cursor: pointer;
`;

export const TitleStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0 0 2rem 0;

	h1 {
		margin-top: 0;
		font-size: 30px;
	}
`;

export const MainContainerStyled = styled.div`
	height: 55%;
`;

export const ProductsWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	width: 100%;
	height: 400px;
	margin: 0 auto;
	padding: 1rem;

	padding-left: 0;

	overflow: scroll;

	scrollbar-width: none; /* Also needed to disable scrollbar Firefox */
	-ms-overflow-style: none; /* Disable scrollbar IE 10+ */
	overflow-y: scroll;

	&::-webkit-scrollbar {
		background: transparent;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar:horizontal {
		display: none;
	}

	@media (max-height: 800px) {
		height: 235px;
	}
`;

export const ProductContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
	width: 360px;

	padding: 1rem;
	border-radius: 15px;

	& img {
		width: 80px;
		height: 80px;
		border-radius: 16px;
		object-fit: cover;
	}
`;

export const TextContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;

	width: 190px;
`;

export const CardTitleStyled = styled.h3`
	margin: 0;
	margin-bottom: 2px;
	font-weight: 500;
`;

export const TextStyled = styled.p`
	margin: 0;
	color: white;
	font-size: 1rem;
`;

export const PriceStyled = styled.span`
	font-weight: 800;
	font-size: 1.2rem;
`;

export const PriceContainerStyled = styled.div`
	z-index: 1000;

	& p {
		text-align: center;
		margin-bottom: 0;
	}

	hr {
		color: white;
		margin-top: 20px;
	}
`;

export const SubtotalStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)`
	margin: 10px;
`;

export const ButtonContainerStyled = styled(SubtotalStyled)`
	justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
	display: flex;
	align-items: center;
	span {
		color: white;
		margin: 5px;
	}
`;
