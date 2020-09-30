import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import Movie from "../movie/Movie";
import { Error, NoData } from "./ratedMovies.styles";
import Wrapper from "./RatedMoviesWrapper";

type Props = {};

const RatedMovies: FC<Props> = () => {
	const { isGuest, session_id, username } = useSelector((state: RootState) => state.loginReducer);
	const { ratedMovies, error } = useSelector((state: RootState) => state.ratedMoviesReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "RATED_MOVIES_FETCH_REQUESTED", isGuest, session_id, username });
	}, []);

	return ratedMovies.length > 0 ? (
		<Wrapper movies>
			{ratedMovies.map((movie) => (
				<Movie movie={movie} />
			))}
		</Wrapper>
	) : (
		<Wrapper>{error ? <Error>{error}</Error> : <NoData>You dont have any rated movies</NoData>}</Wrapper>
	);
};

export default RatedMovies;
