import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 70vw;
	padding: 12vh 0 0 0;

	@media (max-width: 1024px) {
		width: 90vw;
	}
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 1rem 0;
	margin: 0 0 1rem 0;
	border-bottom: 1px solid ${colors.primary};
`;
export const Username = styled.h1`
	letter-spacing: 3px;
`;
export const Logout = styled.p`
	:hover {
		cursor: pointer;
		color: ${colors.primary};
	}
`;
