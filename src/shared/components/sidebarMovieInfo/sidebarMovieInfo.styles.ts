import styled from "styled-components";

export const Wrapper = styled.div`
	width: 13vw;
	text-align: start;
	margin: 2rem 0 0 2vw;
	display: flex;
	flex-direction: column;

	@media (max-width: 1366px) {
		width: 23vw;
	}

	@media (max-width: 1024px) {
		width: 90vw;
		margin-left: 0;
	}
`;
export const Info = styled.div`
	@media (max-width: 1024px) {
		display: flex;
		overflow-x: auto;
	}
`;
export const Container = styled.div`
	margin: 2rem 0 1rem 0;

	@media (max-width: 1024px) {
		margin: 2rem 1rem 1rem 1rem;
		min-width: max-content;
	}
`;
export const Title = styled.h2``;
export const Name = styled.p`
	font-weight: bold;
`;
export const Value = styled.p``;
