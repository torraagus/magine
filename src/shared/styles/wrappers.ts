import styled from "styled-components";
import { colors } from "../../browser/styles/colors";

/*const Movie = styled.div`
	max-width: 150px;
	display: flex;
	flex-direction: column;
	margin: 0.5rem;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		opacity: 90%;
	}
`;

const MoviesWrapper = styled.div`
	width: 70vw;
	display: flex;
	overflow-x: auto;
	padding: 0 0 1rem 0;
`;

const CategoryWrapper = styled.div`
	text-align: start;
	margin: 2rem 0 0 0;
`;*/

interface IMain {
	bg?: string;
	height?: number;
	vCenter?: boolean;
	isFirst?: boolean;
}

const Main = styled.div<IMain>`
	width: -webkit-fill-available;
	padding-top: ${({ isFirst }) => (isFirst ? "8vh" : "0")};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${({ vCenter }) => (vCenter ? "center" : "none")};
	text-align: start;
	background-color: ${({ bg }) => (bg ? bg : colors.terciary)};
	height: ${({ height }) => (height ? `${height}vh` : "auto")};
`;

export default { Main };
