import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface IButton {
	disabled: boolean;
}

export const Button = styled.button<IButton>`
	padding: 0.25rem 0.5rem 0.25rem 0.5rem;
	background-color: ${colors.secondary};
	color: white;
	font-weight: bold;
	border-radius: 15px;
	outline: none;
	width: 30px;
	text-align: center;
	margin-right: 0.25rem;
	border: none;
	display: flex;
	align-items: center;

	${({ disabled }) =>
		!disabled
			? `
		opacity: 100%;	
		:hover {
			cursor: pointer;
			opacity: 75%;
		}
		
		:active {
			cursor: pointer;
			opacity: 90%;
		}
		`
			: `opacity: 50%;`}
`;

export const Page = styled.p`
	background: ${colors.primary};
	color: white;
	font-weight: bold;
	padding: 0.25rem 1rem 0.25rem 1rem;
	margin-right: 0.25rem;
	border-radius: 15px;
`;

export const Wrapper = styled.div`
	display: flex;
	margin: 1rem 0 1rem 0;
`;
