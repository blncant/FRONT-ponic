import styled from "styled-components";
import { motion } from "framer-motion";

export const DiscoverCategorias = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 90%;

	gap: 0.9em;
	margin-top: 40px;
`;

export const CardCategoria = styled(motion.div)`
	flex: 1 1 10em;
	align-items: center;

	border: none;
	padding: 10px 15px;
	cursor: pointer;

	background-color: ${({ selected }) => (selected ? "var(--color-orange)" : "var(--color-green-contact)")};

	&:hover {
		background-color: var(--clr--card-text);
	}

	h3 {
		font-size: 16px;
		color: white;
		font-weight: 300;
	}
`;
