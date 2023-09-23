import styled from "styled-components";

export const ResumenContainerStyled = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	margin-top: 10rem;
`;

export const ResumenTitleStyled = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
`;

export const ProductsContainerStyled = styled.div`
	display: flex;
	flex-direction: column;

	gap: 20px;
	justify-content: center;
`;

export const HrStyled = styled.hr`
	margin: 4rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

export const CostoProductoStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
`;
