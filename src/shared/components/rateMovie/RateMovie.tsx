import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { IMovie } from "../../reducers/movies.reducer";
import Stars from "../stars/Stars";
import { Wrapper, Title, Vote, Error, Button } from "./rateMovie.styles";

type Props = { movie: IMovie };

const RateMovie: FC<RouteComponentProps<any> & Props> = ({ history, movie }) => {
	const { isLoggedIn, isGuest, session_id } = useSelector((state: RootState) => state.loginReducer);
	const { ratedMovies, error } = useSelector((state: RootState) => state.ratedMoviesReducer);
	const [ratedMovie, setRatedMovie] = useState<IMovie>();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!movie) return;
		setRatedMovie(ratedMovies?.find((r) => r.id === movie.id));
	}, [movie, ratedMovies]);

	return (
		<Wrapper>
			<Title>Your vote</Title>
			{error && <Error>{error}</Error>}
			{isLoggedIn ? (
				<>
					{ratedMovie ? (
						<>
							<Vote>{ratedMovie.rating} Points</Vote>
							<Vote>{ratedMovie.rating / 2} Stars</Vote>
							<Stars stars={ratedMovie.rating / 2} />
							<Button onClick={() => dispatch({ type: "REMOVE_MOVIE_VOTE_REQUESTED", movie, isGuest, session_id })}>
								Remove
							</Button>
						</>
					) : (
						<Stars
							stars={-1}
							onVote={(vote) => dispatch({ type: "MOVIE_VOTE_REQUESTED", movie, vote, isGuest, session_id })}
						/>
					)}
				</>
			) : (
				<Button primary onClick={() => history.push("/login")}>
					Login to rate
				</Button>
			)}
		</Wrapper>
	);
};

export default withRouter(RateMovie);
