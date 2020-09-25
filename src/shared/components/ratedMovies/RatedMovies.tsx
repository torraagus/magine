import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import Movie from "../movie/Movie";

type Props = {};

const RatedMovies: FC<Props> = () => {
	const { isGuest, session_id, username } = useSelector((state: RootState) => state.loginReducer);
	const { ratedMovies, error } = useSelector((state: RootState) => state.ratedMoviesReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "RATED_MOVIES_FETCH_REQUESTED", isGuest, session_id, username });
	}, []);

	if (error)
		return (
			<>
				<h4 style={{ letterSpacing: 2, color: colors.primary }}>Rated movies</h4>
				<div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
					<p style={{ color: "red" }}>{error}</p>
				</div>
			</>
		);

	return ratedMovies.length > 0 ? (
		<div>
			<h4 style={{ letterSpacing: 2, color: colors.primary }}>Rated movies</h4>
			<div style={{ display: "flex", flexWrap: "wrap", margin: "1rem 0 0 0" }}>
				{ratedMovies.map((movie) => (
					<Movie movie={movie} />
				))}
			</div>
		</div>
	) : (
		<>
			<h4 style={{ letterSpacing: 2, color: colors.primary }}>Rated movies</h4>
			<div style={{ display: "flex", height: "70%", alignItems: "center", justifyContent: "center" }}>
				<p>You dont have any rated movies</p>
			</div>
		</>
	);
};

export default RatedMovies;
