import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";

import {
	MovieTitleSC,
	MoviesWrapperSC,
	MovieSC,
	MovieImageSC,
	ReleaseDateSC,
	ReleaseDateTextSC,
	VoteAverageSC,
} from "../../styled-components/components";

export const Wrapper = styled(MoviesWrapperSC)`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
`;
export const CategoryTitle = styled.h4`
	letter-spacing: 3px;
	font-weight: 500;
`;
export const Movies = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 10px;

	list-style: none;
	padding: 0 0 1rem 0;
	justify-items: center;
`;
export const Category = styled.div``;
export const Movie = styled(MovieSC)`
	@media (max-width: 512px) {
		width: 80%;
	}
`;
export const Image = styled(MovieImageSC)`
	width: 100%;
`;
export const Title = styled(MovieTitleSC)``;
export const Name = styled.h1`
	margin: 2rem 0 0 0;
	font-weight: 900;
	letter-spacing: 5px;
`;
export const Pages = styled.p`
	letter-spacing: 3px;
	font-weight: 500;
	margin-top: 0.5rem;
`;
export const BackButton = styled(TiArrowBack)`
	font-size: 36px;
	opacity: 50%;

	:hover {
		cursor: pointer;
		opacity: 100%;
	}
`;
export const VoteAverage = styled(VoteAverageSC)``;
export const ReleaseDate = styled(ReleaseDateSC)``;
export const ReleaseDateText = styled(ReleaseDateTextSC)``;
