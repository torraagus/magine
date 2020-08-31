import React from "react";
import {
	Image,
	Movie,
	Movies,
	MovieTitle,
	VoteAverage,
	ReleaseDate,
	ReleaseDateText,
} from "../../pages/home/home.styles";

const MovieList = ({ movies, index, history }) => {
	const handleClick = (path) => {
		history.push(path);
	};

	return (
		<Movies>
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					index={index}
					onClick={() => handleClick(`/movies/id/${movie.id}`)}
				>
					<Image
						index={index}
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					/>
					<MovieTitle>{movie.title}</MovieTitle>
					<VoteAverage>{movie.vote_average}</VoteAverage>
					<ReleaseDate>{movie.release_date}</ReleaseDate>
					<ReleaseDateText>Release date</ReleaseDateText>
				</Movie>
			))}
		</Movies>
	);
};

export default MovieList;
