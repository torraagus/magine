import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface IContainer {
	movies?: boolean;
}

export const Container = styled.div<IContainer>`
	display: flex;
	height: 70%;
	align-items: ${({ movies }) => (movies ? "flex-start" : "center")};
	justify-content: ${({ movies }) => (movies ? "flex-start" : "center")};
	flex-wrap: ${({ movies }) => (movies ? "wrap" : "unset")};
	margin: ${({ movies }) => (movies ? "1rem 0 0 0" : "0")};

	@media (max-width: 1024px) {
		height: ${({ movies }) => (movies ? "auto" : "70%")};
		flex-wrap: nowrap;
		padding-bottom: 1rem;
		overflow-x: auto;
	}
`;
export const Title = styled.h4`
	letter-spacing: 2;
	color: ${colors.primary};
`;
export const Error = styled.p`
	color: red;
`;
export const NoData = styled.p``;
