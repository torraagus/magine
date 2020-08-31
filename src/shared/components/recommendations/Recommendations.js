import React from "react";
import { fetchRecommendations as fetch } from "../../api";
import { useFetch } from "../../../browser/hooks/useFetch";
import { withRouter } from "react-router-dom";
import MovieList from "../movies/MovieList";
import { Title, Loader } from "./recommendations.styles";

const Recommendations = ({ match, history }) => {
	const { results: movies, loading } = useFetch(`url`, fetch, true, { page: 1, movieId: match.params.id });

	if (loading) return <Loader>Loading recommendations...</Loader>;

	return movies?.length > 0 ? (
		<>
			<Title>Recommendations</Title>
			<MovieList movies={movies} index={0} history={history} />
		</>
	) : null;
};

export default withRouter(Recommendations);
