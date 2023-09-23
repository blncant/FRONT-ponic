import styled from "styled-components";

export const OrdersContainerStyled = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 40px;
	max-width: 1500px;
	margin-top: 60px;
	color: white;
`;

export const PedidoContainerStyled = styled.div`
	width: 380px;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
`;

export const TextContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleStyled = styled.h2`
	margin: 0;
	font-size: 1.2rem;
`;

export const IdStyled = styled.p`
	font-size: 1rem;
	color: white;
`;

export const PriceStyled = styled.p`
	font-weight: 800;
	font-size: 2rem;
	color: white;
	margin: 0;
`;
