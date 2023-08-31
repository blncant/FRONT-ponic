import styled, { css } from "styled-components";

//HEADER
export const NavbarContainerStyled = styled.header`
	background-color: var(--bg-header);
	box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
	width: 100%;
	/* max-width: 1300px; */
	margin: 0 auto;
	min-height: 4em;
	padding: 1rem 4rem;

	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	left: 0;

	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	/* @media (min-width: 40em) {
		padding: 0 60px;
	} */

	@media (max-width: 768px) {
		padding: 1rem 2rem;
	}
`;

//LOGO
export const Logo = styled.img`
	height: 40px;
`;

//NAVBAR
export const LinksContainerStyled = styled.nav`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;

	span {
		padding: 1rem 1.5 rem;
		font-size: 14px;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		text-shadow: 1px 1px 5px var(--color-green-dark);

		&:hover {
			color: var(--color-blue);
			font-weight: 600;
		}
	}
`;

//MENU (HOME)
export const MenuNavStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

	@media (max-width: 30em) {
		display: none;
	}
`;

// USUARIO
export const UserNavStyled = styled.div`
	gap: 15px;
	cursor: pointer;

	span {
		margin-right: 15px;

		@media (max-width: 30em) {
			display: none;
		}
	}
`;

// CART + BUBBLE
export const CartNavStyled = styled.div`
	position: relative;
	cursor: pointer;

	span {
		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 0;
		margin-left: 15px;

		height: 18px;
		width: 18px;
		text-align: center;

		border-radius: 1rem;
		background: var(--color-green-dark);
		color: white;
		font-size: 0.7rem;
		padding-left: 1px;
	}
`;

export const LinkContainerStyled = styled.div`
	/* color: ${(props) => (props.home ? "red" : "")}; */
	display: flex;
	align-items: center;

	svg {
		font-size: 25px;
		display: block;
		cursor: pointer;
	}
`;

// OVERLAY
export const ModalOverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	width: 100vw;
	height: 100vh;

	${({ ishidden }) =>
		!ishidden &&
		css`
			backdrop-filter: blur(4px);
		`}
`;
