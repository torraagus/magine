import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Form = styled.form`
	display: flex;
`;

export const SearchInput = styled.input`
	height: 40;
	width: 200;
	text-indent: 0.5rem;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 10px;

	:focus {
		border: 1px solid ${colors.primary};
	}
`;
