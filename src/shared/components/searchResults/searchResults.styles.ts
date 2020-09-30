import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
`;
export const Container = styled.div`
	width: 70vw;
	padding: 15vh 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Results = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 1rem 0 0 0;
`;
export const Title = styled.h1``;
export const Subtitle = styled.p``;
export const Query = styled.b`
	color: ${colors.primary};
`;
export const Error = styled.p`
	color: red;
`;
