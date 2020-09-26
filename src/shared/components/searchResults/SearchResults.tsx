import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import searchMoviesReducer from "../../reducers/searchMovies.reducer";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";

type Props = {};

const SearchResults: FC<RouteComponentProps<any> & Props> = ({ location: { search } }) => {
	const { movies, error } = useSelector((state: RootState) => state.searchMoviesReducer);
	const [query, setQuery] = useState(search.substr(1));
	const dispatch = useDispatch();

	useEffect(() => {
		setQuery(search.substr(1));
		dispatch({ type: "SEARCH_MOVIES_FETCH_REQUESTED", query: search.substr(1), page: 1 });
	}, [search]);

	return (
		<div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
			<div style={{ width: "70vw", padding: "15vh 0 0 0" }}>
				<h1>Search</h1>
				<i>
					Results for keyword <b style={{ color: colors.primary }}>{search.substr(1)}</b>
				</i>
				<Pagination action={"SEARCH_MOVIES_FETCH_REQUESTED"} args={{ query }} selector={"search"} />
				<div style={{ display: "flex", flexWrap: "wrap", margin: "1rem 0 0 0" }}>
					{movies.map((m) => (
						<Movie key={m.id} movie={m} />
					))}
				</div>
				<Pagination action={"SEARCH_MOVIES_FETCH_REQUESTED"} args={{ query }} selector={"search"} />
			</div>
		</div>
	);
};

export default withRouter(SearchResults);
