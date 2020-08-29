import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";
import {
	PrimaryBtnSC,
	MoviesWrapperSC,
	MovieImageSC,
	MovieSC,
	MovieTitleSC,
	ReleaseDateSC,
	ReleaseDateTextSC,
	VoteAverageSC,
} from "../../styled-components/components";

export const Wrapper = styled(MoviesWrapperSC)``;

export const Category = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;
`;
export const CategoryTitle = styled.h2`
	letter-spacing: 3px;
	margin: 0 0.5rem 0 0.5rem;
	font-weight: 500;
`;
export const Movies = styled.ul`
	display: flex;
	list-style: none;
	padding: 0 0 1rem 0;
	margin-left: 0.5rem;
	overflow-x: auto;
`;
export const Movie = styled(MovieSC)`
	width: 200px;
	margin: 0.5rem;
`;
export const Image = styled(MovieImageSC)`
	min-width: 200px;
`;
export const MovieTitle = styled(MovieTitleSC)``;
export const Title = styled.h1`
	margin: 4rem 0 0 0;
	font-weight: 900;
	letter-spacing: 5px;
`;
export const SeeAllBtn = styled(PrimaryBtnSC)``;

export const VoteAverage = styled(VoteAverageSC)``;
export const ReleaseDate = styled(ReleaseDateSC)``;
export const ReleaseDateText = styled(ReleaseDateTextSC)``;
