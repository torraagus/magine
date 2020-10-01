import styled from "styled-components";

export const Title = styled.h2`
	margin: 0 0 1rem 0;
`;

export const Movies = styled.div`
	width: 70vw;
	display: flex;
	overflow-x: auto;
	padding: 0 0 1rem 0;

	@media (max-width: 1024px) {
		width: 90vw;
	}
`;

export const Wrapper = styled.div`
	text-align: start;
	margin-top: 5vh;
`;

export const Error = styled.div`
	color: red;
`;
