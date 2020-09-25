import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Co from "../../constants/constants";
import W from "../../styles/wrappers";
import { withRouter } from "react-router-dom";
import { RootState } from "../../reducers/interface";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import util from "./utils";
import Stars from "../stars/Stars";
import { IMovie } from "../../reducers/movies.reducer";

type Props = RouteComponentProps<any, {}>;

const SelectedMovie: FC<Props> = ({ match, history }) => {
	const { movie, loading, error } = useSelector((state: RootState) => state.selectedMovieReducer);
	const { isLoggedIn, isGuest, session_id } = useSelector((state: RootState) => state.loginReducer);
	const { ratedMovies, error: ratedMovieError } = useSelector((state: RootState) => state.ratedMoviesReducer);

	const [ratedMovie, setRatedMovie] = useState<IMovie>();
	const dispatch = useDispatch();

	useEffect(() => {
		const id = match.url.split("/").pop();
		dispatch({ type: "MOVIE_FETCH_REQUESTED", id });
		return () => {
			dispatch({ type: "MOVIE_CLEAN" });
		};
	}, []);

	useEffect(() => {
		if (!movie) return;
		console.log(ratedMovies);
		setRatedMovie(ratedMovies?.find((r) => r.id === movie.id));
	}, [movie, ratedMovies]);

	if (error)
		return (
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }}>
				<p>{error}</p>
			</div>
		);

	if (loading)
		return (
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }}>
				<p>Loading...</p>
			</div>
		);

	return movie ? (
		<>
			{/* {console.log("render times")} */}
			<W.Main isFirst bg={colors.secondary} height={60}>
				<div style={{ display: "flex", width: "70%", padding: "2rem 0 2rem 0", color: "white" }}>
					<img style={{ width: "25%", borderRadius: "15px" }} src={`${Co.IMAGE_SRC_PREFIX}${movie.poster_path}`} />
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							padding: "0 0 0 2rem",
							width: "75%",
						}}
					>
						<p style={{ fontSize: 36, fontWeight: "bold" }}>{movie.title}</p>
						<div style={{ display: "flex" }}>
							<p style={{ padding: "0 1rem 0 0" }}>{movie.release_date}</p>
							{movie.genres.map((genre) => (
								<p key={genre.id} style={{ padding: "0 .25rem 0 .25rem" }}>
									{genre.name}
								</p>
							))}
							<p style={{ padding: "0 0 0 1rem" }}>{util.formatRuntime(movie.runtime)}</p>
						</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<p style={{ fontSize: 36, fontWeight: "bold" }}>{movie.vote_average}</p>
							<p style={{ fontWeight: "bold", padding: "0 0 0 1rem" }}>User score</p>
							{/* <button style={{ padding: ".5rem", fontWeight: "bold", margin: "0 0 0 1rem" }}>Rate it!</button> */}
						</div>
						<p style={{ color: colors.primary }}>
							<i>{movie.tagline}</i>
						</p>
						<p style={{ fontWeight: "bold", fontSize: 20 }}>Overview</p>
						<p>{movie.overview}</p>
					</div>
				</div>
			</W.Main>
			<W.Main>
				<div style={{ width: "70%", padding: "2rem 0 2rem 0" }}>
					<h2>Your vote</h2>
					{ratedMovieError && <p>{ratedMovieError}</p>}
					{!isLoggedIn && (
						<>
							<p>You must be logged in to vote!</p>
							<button
								onClick={() => history.push("/login")}
								style={{
									width: 150,
									padding: ".5rem",
									margin: "1rem 0 0 0",
									border: "none",
									backgroundColor: colors.primary,
									color: "white",
									borderRadius: 10,
									outline: "none",
									fontWeight: "bold",
								}}
							>
								Get in
							</button>
						</>
					)}
					{isLoggedIn && (
						<>
							{ratedMovie ? (
								<>
									<p>
										<b style={{ fontSize: 36, color: colors.secondary }}>{ratedMovie.rating}</b>
									</p>
									<p>Points</p>
									<Stars stars={ratedMovie.rating / 2} />
									<p>
										<b style={{ color: colors.primary }}>Stars: {ratedMovie.rating / 2}</b>{" "}
									</p>
									<button
										style={{
											width: 150,
											padding: ".5rem",
											margin: "1rem 0 0 0",
											border: "none",
											backgroundColor: colors.secondary,
											color: "white",
											borderRadius: 10,
											outline: "none",
											fontWeight: "bold",
										}}
										onClick={() => dispatch({ type: "REMOVE_MOVIE_VOTE_REQUESTED", movie, isGuest, session_id })}
									>
										Remove vote
									</button>
								</>
							) : (
								<>
									<p>You didn't vote for this movie</p>
									<Stars
										stars={-1}
										onVote={(vote) => dispatch({ type: "MOVIE_VOTE_REQUESTED", movie, vote, isGuest, session_id })}
									/>
								</>
							)}
						</>
					)}
				</div>
			</W.Main>
		</>
	) : null;
};

export default withRouter(SelectedMovie);
