import styled from "styled-components";

export const OrdersContainerStyled = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	max-width: 1500px;
	margin: 0 auto;
	margin-top: 200px;
	color: white;
`;

export const PedidoContainerStyled = styled.div`
	width: 380px;

	padding: 1rem 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
