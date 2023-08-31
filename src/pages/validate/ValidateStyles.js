import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ValidateContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: 40px;
`;

export const Form = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2rem;
	gap: 20px;
`;

export const ValidateEmailStyled = styled.p`
	color: var(--orange);

	:hover {
		text-decoration: underline;
		transition: all 0.25s ease-out;
	}
`;
