import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import { IMovie } from "../../reducers/movies.reducer";
import { isEmpty } from "../../utils";
import { Container, Movies, Title, Error } from "./similarMovies.styles";
import Movie from "../movie/Movie";

type Props = {};

const SimilarMovies: FC<Props> = () => {
	const { movies, error } = useSelector((state: RootState) => state.similarMoviesReducer);

	return !isEmpty(movies) ? (
		<Container>
			<Title>Similar movies</Title>
			<Movies>{!isEmpty(movies) && movies.map((m: IMovie) => <Movie key={m.id} movie={m} />)}</Movies>
		</Container>
	) : (
		error && <Error>{error}</Error>
	);
};

export default SimilarMovies;
