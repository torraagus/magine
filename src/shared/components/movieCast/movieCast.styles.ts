import styled from "styled-components";

export const Wrapper = styled.div`
	text-align: start;
	margin: 2rem 0 0 0;
	display: flex;
	flex-direction: column;
	width: 55vw;

	@media (max-width: 1366px) {
		width: 65vw;
	}

	@media (max-width: 1024px) {
		width: 90vw;
	}
`;
export const Cast = styled.div`
	margin: 1rem 0 0 0;
	padding: 1rem 0;
	display: flex;
	overflow-x: auto;
	align-items: flex-start;
`;
export const Error = styled.p`
	color: red;
`;
export const Header = styled.h2``;
export const Loading = styled.p``;
