import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;

	padding: 5%;

	align-items: center;

	text-align: center;
	line-height: 1;
	color: var(--color-green-contact);

	p {
		font-size: 13px;
		font-weight: 300;
		text-align: center;
	}
	span {
		font-weight: 500;
	}
`;

export const LinksStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 5px;
	padding: 30px 0;
	text-align: center;

	a {
		color: var(--color-green-contact);
		cursor: pointer;
		font-size: 13px;
		font-weight: 300;
	}
`;
