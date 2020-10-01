import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import { IMovie } from "../../reducers/movies.reducer";
import actionTypes from "../../sagas/actionTypes";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";
import { Wrapper, Title, Container, Error, InnerWrapper } from "./movies.styles";
interface Props {
	category: string;
	title: string;
}

const Movies: FC<Props> = ({ category, title }) => {
	const { movies, error } = useSelector((state: RootState) => state.moviesReducer[category]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (movies.length == 0) dispatch({ type: actionTypes[category], page: 1 });
	}, []);

	if (error)
		return (
			<Wrapper>
				<Title>{title}</Title>
				<Container>
					<Error>Error: {error}</Error>
				</Container>
			</Wrapper>
		);

	return movies.length > 0 ? (
		<Wrapper>
			<InnerWrapper>
				<Title>{title}</Title>
				<Pagination action={actionTypes[category]} selector={category} />
				<Container>
					{movies.map((movie: IMovie) => (
						<Movie key={movie.id} movie={movie} />
					))}
				</Container>
				<Pagination action={actionTypes[category]} selector={category} />
			</InnerWrapper>
		</Wrapper>
	) : null;
};

export default Movies;
