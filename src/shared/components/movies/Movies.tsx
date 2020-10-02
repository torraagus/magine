import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import { IMovie } from "../../reducers/movies.reducer";
import actionTypes from "../../sagas/actionTypes";
import Movie from "../movie/Movie";
import { Error } from "./movies.styles";
import MoviesW from "./MoviesWrapper";
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

	return (
		<MoviesW title={title} pagination={movies.length > 0} category={category}>
			{movies.length > 0 && movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie} />)}
			{error && <Error>Error: {error}</Error>}
			{!error && <p>Loading...</p>}
		</MoviesW>
	);
};

export default Movies;
