import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Category, CategoryTitle, Movies, Title, Wrapper, SeeAllBtn } from "./home.styles";
import { useFetch } from "../../../browser/hooks/useFetch";
import MovieList from "../../components/movies/MovieList";

const Home = ({ location, fetchInitialData, history, categories, OnFinishLoading }) => {
	const { results: movies, loading } = useFetch(location.pathname, fetchInitialData, false);

	const handleClick = (path) => {
		history.push(path);
	};

	useEffect(() => {
		if (!loading) OnFinishLoading();
	}, [loading]);

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
							<SeeAllBtn onClick={() => handleClick(`${category.path}/1`)}>See all</SeeAllBtn>
						</Category>
						<Movies>{movies && <MovieList movies={movies[index]} index={index} history={history} />}</Movies>
					</Fragment>
				))}
			</Wrapper>
		);
	}
};

export default withRouter(Home);
