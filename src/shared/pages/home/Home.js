import React, { useState, useEffect, Fragment } from "react";
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

const Home = ({ location, fetchInitialData, history }) => {
	// const [movies, setMovies] = useState([]);
	const categories = [
		{ title: "Now playing", path: "/now-playing" },
		{ title: "Popular", path: "/popular" },
		{ title: "Top rated", path: "/top-rated" },
		{ title: "Upcoming", path: "/upcoming" },
	];
	const { movies, loading } = useFetch(
		location.pathname,
		fetchInitialData,
		true
	);

	const handleClick = (path) => {
		history.push(`${path}/1`);
	};

	if (loading) {
		return <div>Loading...</div>;
	} else {
		return (
			<Wrapper>
				<Title>Movies</Title>
				{movies && console.log(movies[0])}
				{categories.map((category, index) => (
					<Fragment key={category.title}>
						<Category>
							<CategoryTitle>{category.title}</CategoryTitle>
							<SeeAllBtn onClick={() => handleClick(category.path)}>
								See all
							</SeeAllBtn>
						</Category>
						<Movies>
							{movies &&
								movies[index]?.map((movie) => (
									<Movie key={movie.id}>
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
