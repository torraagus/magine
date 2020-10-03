import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 0 0 0;
	width: 55vw;

	@media (max-width: 1024px) {
		width: 65vw;
	}

	@media (max-width: 768px) {
		width: 90vw;
	}
`;
export const Movies = styled.div`
	display: flex;
	overflow-x: auto;
	margin: 1rem 0 0 0;
`;
export const Title = styled.h2``;
export const Error = styled.p`
	color: red;
`;
