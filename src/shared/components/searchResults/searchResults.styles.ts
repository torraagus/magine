import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 70vw;
	padding: 12vh 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		width: 90vw;
	}
`;

export const Results = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 1rem 0 0 0;
	justify-content: center;
`;

export const Title = styled.h1``;

export const Subtitle = styled.p``;

export const Query = styled.b`
	color: ${colors.primary};
`;

export const Error = styled.p`
	color: red;
`;
