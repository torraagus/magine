import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";
import { Wrapper, Container, Results, Error, Title, Subtitle, Query } from "./searchResults.styles";

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
		<Wrapper>
			<Container>
				<Title>Search</Title>
				<Subtitle>
					{movies.length > 0 ? "Results for keyword" : "No results for keyword"} <Query>{search.substr(1)}</Query>
				</Subtitle>
				{error && <Error>{error}</Error>}
				{movies.length > 0 && (
					<>
						<Pagination action={"SEARCH_MOVIES_FETCH_REQUESTED"} args={{ query }} selector={"search"} />
						<Results>
							{movies.map((m) => (
								<Movie key={m.id} movie={m} />
							))}
						</Results>
						<Pagination action={"SEARCH_MOVIES_FETCH_REQUESTED"} args={{ query }} selector={"search"} />
					</>
				)}
			</Container>
		</Wrapper>
	);
};

export default withRouter(SearchResults);
