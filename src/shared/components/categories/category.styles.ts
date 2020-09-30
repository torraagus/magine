import styled from "styled-components";

export const Title = styled.h2`
	margin: 0 0 1rem 0;
`;

export const Movies = styled.div`
	width: 70vw;
	display: flex;
	overflow-x: auto;
	padding: 0 0 1rem 0;

	@media (max-width: 768px) {
		width: 90vw;
	}
`;

export const Wrapper = styled.div`
	text-align: start;
	margin: 2rem 0 0 0;
`;

export const Error = styled.div`
	color: red;
`;
