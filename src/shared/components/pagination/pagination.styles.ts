import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface IButton {
	page?: number;
	totalPages?: number;
	disabled: boolean;
}

export const Button = styled.button<IButton>`
	padding: 0.25rem 1rem 0.25rem 1rem;
	background-color: ${colors.secondary};
	color: white;
	font-weight: bold;
	border-radius: 10px 0 0 10px;
	outline: none;
	margin-right: 0.25rem;
	border: none;

	:active {
		cursor: pointer;
		opacity: 90%;
	}

	${({ disabled }) =>
		!disabled &&
		`:hover {
			cursor: pointer;
			opacity: 75%;
		}`}
`;

export const Page = styled.p`
	background: ${colors.primary};
	color: white;
	font-weight: bold;
	padding: 0.25rem 2rem 0.25rem 2rem;
	margin-right: 0.25rem;
`;

export const FirstPageBtn = styled(Button)`
	opacity: ${({ page }) => (page == 1 ? "50%" : "100%")};
`;

export const PrevPageBtn = styled(Button)`
	opacity: ${({ page }) => (page == 1 ? "50%" : "100%")};
	border-radius: 0;
`;

export const NextPageBtn = styled(Button)`
	opacity: ${({ totalPages, page }) => (page == totalPages ? "50%" : "100%")};
	border-radius: 0;
`;

export const LastPageBtn = styled(Button)`
	opacity: ${({ totalPages, page }) => (page == totalPages ? "50%" : "100%")};
	border-radius: 0 10px 10px 0;
`;

export const Wrapper = styled.div`
	display: flex;
	margin: 1rem 0 1rem 0;
`;
