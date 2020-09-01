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
	PageTitleSC,
} from "../../styled-components/components";

export const Wrapper = styled(MoviesWrapperSC)`
	padding-top: 15vh;
`;

export const Category = styled.div`
	margin-top: 2rem;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
`;
export const CategoryTitle = styled.h2`
	letter-spacing: 3px;
	margin: 0 0.5rem 0 1rem;
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
	width: ${(props) => {
		switch (props.index) {
			case 0:
				return "150px";
			case 1:
				return "250px";
			case 2:
				return "200px";
			case 3:
				return "125px";
		}
	}};
	margin: 0.5rem;
`;
export const Image = styled(MovieImageSC)`
	min-width: ${(props) => {
		switch (props.index) {
			case 0:
				return "150px";
			case 1:
				return "250px";
			case 2:
				return "200px";
			case 3:
				return "125px";
		}
	}};
`;
export const MovieTitle = styled(MovieTitleSC)``;
export const Title = styled(PageTitleSC)``;
export const SeeAllBtn = styled(PrimaryBtnSC)``;

export const VoteAverage = styled(VoteAverageSC)``;
export const ReleaseDate = styled(ReleaseDateSC)``;
export const ReleaseDateText = styled(ReleaseDateTextSC)``;
