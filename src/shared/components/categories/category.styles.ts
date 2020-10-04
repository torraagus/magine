import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Title = styled.h2``;

export const Movies = styled.div`
	width: 70vw;
	display: flex;
	overflow-x: auto;
	padding: 0 0 1rem 0;

	@media (max-width: 1366px) {
		width: 90vw;
	}
`;

export const Wrapper = styled.div`
	text-align: start;
	margin-top: 5vh;
`;

export const Error = styled.div`
	color: red;
`;

export const EnterBtn = styled.button`
	padding: 0.25rem 0.5rem 0.25rem 0.5rem;
	margin-left: 0.5rem;
	border: none;
	outline: none;
	background-color: ${colors.primary};
	color: white;
	border-radius: 10px;
	font-weight: bold;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const TitleW = styled.div`
	display: flex;
	margin: 0 0 1rem 0;
`;
