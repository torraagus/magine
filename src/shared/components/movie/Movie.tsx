import React, { FC } from "react";
import { IMovie } from "../../reducers/movie.reducer";
import { Img, Title, ReleaseDate } from "./movie.styles";
import W from "../../styles/wrappers";

interface Props {
	movie: IMovie;
}

const Movie: FC<Props> = ({ movie }) => {
	return (
		<W.Movie>
			<Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
			<Title>{movie.title}</Title>
			<ReleaseDate>{movie.release_date}</ReleaseDate>
		</W.Movie>
	);
};

export default Movie;
