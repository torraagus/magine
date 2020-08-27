import styled from "styled-components"

export const Category = styled.h2`
	letter-spacing: 3px;
	margin: 2rem 0 1rem 0.5rem;
`;
export const Movies = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
`;
export const Movie = styled.li`
	margin: 0.5rem;
	text-align: center;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;
`;
export const Image = styled.img`
	height: 300px;
`;
export const Title = styled.p`
	font-weight: 16px;
	letter-spacing: 2px;
`;
