import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: -webkit-fill-available;
	align-items: center;
`;

export const InnerWrapper = styled.div`
	width: 70vw;
	padding: 12vh 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1366px) {
		width: 90%;
	}
`;

export const Title = styled.h1`
	color: ${colors.primary};
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 1rem 0 0 0;
	justify-content: center;
`;

export const Error = styled.p`
	color: red;
`;
