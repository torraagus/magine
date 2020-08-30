import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
	Category,
	CategoryTitle,
	Image,
	Movie,
	Movies,
	Title,
	MovieTitle,
	Wrapper,
	SeeAllBtn,
	VoteAverage,
	ReleaseDate,
	ReleaseDateText,
} from "./home.styles";
import { useFetch } from "../../../browser/hooks/useFetch";

const Home = ({ location, fetchInitialData, history, categories }) => {
	const { results: movies, loading } = useFetch(
		location.pathname,
		fetchInitialData,
		false
	);

	const handleClick = (path) => {
		history.push(path);
	};

	if (loading) {
		return <div>Loading...</div>;
	} else {
		return (
			<Wrapper>
				<Title>Movies</Title>
				{categories.map((category, index) => (
					<Fragment key={category.title}>
						<Category>
							<CategoryTitle>{category.title}</CategoryTitle>
							<SeeAllBtn onClick={() => handleClick(`${category.path}/1`)}>
								See all
							</SeeAllBtn>
						</Category>
						<Movies>
							{movies &&
								movies[index]?.map((movie) => (
									<Movie
										key={movie.id}
										onClick={() => handleClick(`/movies/id/${movie.id}`)}
									>
										<Image
											src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										/>
										<MovieTitle>{movie.title}</MovieTitle>
										<VoteAverage>{movie.vote_average}</VoteAverage>
										<ReleaseDate>{movie.release_date}</ReleaseDate>
										<ReleaseDateText>Release date</ReleaseDateText>
									</Movie>
								))}
						</Movies>
					</Fragment>
				))}
			</Wrapper>
		);
	}
};

export default withRouter(Home);
