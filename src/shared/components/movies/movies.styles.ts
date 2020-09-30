import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	display: flex;
	padding: 10vh 0 0 0;
	flex-direction: column;
	width: -webkit-fill-available;
	align-items: center;
`;
export const Title = styled.h1`
	color: ${colors.primary};
`;
export const Container = styled.div`
	display: flex;
	width: 70%;
	flex-wrap: wrap;
	margin: 1rem;
	justify-content: center;
`;
export const Error = styled.p`
	color: red;
`;
