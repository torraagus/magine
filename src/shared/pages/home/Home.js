import React, { useState, useEffect, Fragment } from "react";
import { fetchMovies } from "../../api";
import { Category, Image, Movie, Movies, Title } from "./home.styles";

const Home = (props) => {
	const [movies, setMovies] = useState([]);
	const titles = ["Now playing", "Popular", "Top rated", "Upcoming"];

	useEffect(() => {
		if (__isBrowser__) {
			console.log("browser");
			setMovies(window.__INITIAL_DATA__);
			delete window.__INITIAL_DATA__;
		} else {
			console.log("server");
			setMovies(props.staticContext);
		}
	}, []);

	// useEffect(() => {
	// 	(async () => {
	// 		const movies = await fetchNowPlayingMovies("en:US");
	// 		setMovies(movies);
	// 	})();
	// }, [movies]);

	return (
		<>
			{titles.map((title, index) => (
				<Fragment key={title}>
					<Category>{title}</Category>
					<Movies>
						{movies[index]?.map((movie) => (
							<Movie key={movie.id}>
								<Image
									style={{ height: 300 }}
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								/>
								<Title>{movie.title}</Title>
							</Movie>
						))}
					</Movies>
				</Fragment>
			))}
		</>
	);
};

export default Home;
