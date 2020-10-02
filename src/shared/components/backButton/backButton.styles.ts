import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { colors } from "../../../browser/styles/colors";

type IWrapper = {
	light?: boolean;
	noNavBar?: boolean;
};

export const Wrapper = styled.div<IWrapper>`
	${({ noNavBar }) =>
		noNavBar &&
		` 
        position: absolute;
        top: 3vh;
        left: 3vw;
    `}

	text-align: left;
	width: inherit;
	color: ${({ light }) => (light ? colors.terciary : colors.secondary)};
	font-size: 24px;
	margin: 1rem 0 0 0.5rem;

	@media (min-width: 1024px) {
		width: ${({ light }) => (light ? "70vw" : "inherit")};
	}

	@media (max-width: 1024px) {
		width: ${({ light }) => (light ? "90vw" : "inherit")};
	}
`;

export const Button = styled(BiArrowBack)`
	opacity: 50%;

	:hover {
		cursor: pointer;
		opacity: 100%;
	}

	:active {
		cursor: pointer;
		opacity: 75%;
	}
`;
