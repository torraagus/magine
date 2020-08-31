import React from "react";
import { fetchSimilarMovies as fetch } from "../../api";
import { useFetch } from "../../../browser/hooks/useFetch";
import { withRouter } from "react-router-dom";
import MovieList from "../movies/MovieList";
import { Loader, Title } from "./similarMovies.styles";

const SimilarMovies = ({ match, history }) => {
	const { results: movies, loading } = useFetch(`url`, fetch, true, { page: 1, movieId: match.params.id });

	if (loading) {
		return <Loader>Loading similar movies...</Loader>;
	}

	return movies?.length > 0 ? (
		<>
			<Title>Similar movies</Title>
			<MovieList movies={movies} index={0} history={history} />
		</>
	) : null;
};

export default withRouter(SimilarMovies);
