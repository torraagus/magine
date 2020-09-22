import styled from "styled-components";

const Movie = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem;
`;

const MoviesWrapper = styled.div`
	width: 70vw;
	display: flex;
	overflow-x: auto;
	padding: 0 0 1rem 0;
`;

const CategoryWrapper = styled.div`
	text-align: start;
	margin: 2rem 0 0 0;
`;

const Main = styled.div`
	width: 98vw;
	position: absolute;
	top: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: start;
`;

export default { MoviesWrapper, CategoryWrapper, Movie, Main };
