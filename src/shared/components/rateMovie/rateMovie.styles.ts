import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface IButton {
	primary?: boolean;
}

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	padding: 0 1rem 0 0;
	border-left: 3px solid ${colors.primary};
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	box-shadow: 5px 5px 5px 0px #651a1b27;
	border-radius: 10px;
	margin: 1rem 0 0 0;

	@media (max-width: 1366px) {
		width: 90%;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 0 0 1rem 0;
	}
`;
export const Button = styled.button<IButton>`
	padding: 0.5rem 1rem 0.5rem 1rem;
	border: none;
	background-color: ${({ primary }) => (primary ? colors.primary : "red")};
	color: white;
	border-radius: 10px;
	outline: none;
	font-weight: bold;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}

	@media (max-width: 600px) {
		margin: 0.5rem 0 0 0;
	}
`;
export const Error = styled.p``;
export const Vote = styled.p`
	font-size: 18px;
	color: ${colors.primary};
	font-weight: bold;

	@media (max-width: 600px) {
		padding: 0 0 0.5rem 0;
	}
`;
export const Title = styled.h2`
	border-radius: 10px;
	padding: 1rem;
`;
