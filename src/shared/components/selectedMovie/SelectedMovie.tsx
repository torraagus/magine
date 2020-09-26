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
import MovieCast from "../movieCast/MovieCast";
import MoreMovieInfo from "../moreMovieInfo/MoreMovieInfo";

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
		dispatch({ type: "MOVIE_CAST_FETCH_REQUESTED", id });
		return () => {
			dispatch({ type: "MOVIE_CLEAN" });
		};
	}, []);

	useEffect(() => {
		if (!movie) return;
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
						<div style={{ display: "flex", alignItems: "center", margin: ".5rem 0" }}>
							<p style={{ fontSize: 40, fontWeight: "bold" }}>{movie.vote_average}</p>
							<p style={{ fontWeight: "bold", padding: "0 0 0 1rem" }}>User score</p>
							{/* <button style={{ padding: ".5rem", fontWeight: "bold", margin: "0 0 0 1rem" }}>Rate it!</button> */}
						</div>
						<p style={{ color: colors.primary, margin: ".5rem 0" }}>
							<i>{movie.tagline}</i>
						</p>
						<p style={{ fontWeight: "bold", fontSize: 20, margin: ".5rem 0" }}>Overview</p>
						<p>{movie.overview}</p>
					</div>
				</div>
			</W.Main>
			<W.Main>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "70%",
						padding: "0 1rem 0 0",
						borderLeft: `3px solid ${colors.primary}`,
						MozBoxShadow: "10px 10px 5px 0px #651a1b2f",
						WebkitBoxShadow: "10px 10px 5px 0px #651a1b31",
						boxShadow: "5px 5px 5px 0px #651a1b27",
						borderRadius: 10,
						margin: "1rem 0 0 0",
					}}
				>
					<h2 style={{ borderRadius: 10, padding: "1rem" }}>Your vote</h2>
					{ratedMovieError && <p>{ratedMovieError}</p>}
					{!isLoggedIn && (
						<>
							{/* <p>You must be logged in to vote!</p> */}
							<button
								onClick={() => history.push("/login")}
								style={{
									width: 150,
									padding: ".5rem",
									// margin: "1rem 0 0 0",
									border: "none",
									backgroundColor: colors.primary,
									color: "white",
									borderRadius: 10,
									outline: "none",
									fontWeight: "bold",
								}}
							>
								Login to rate
							</button>
						</>
					)}
					{isLoggedIn && (
						<>
							{ratedMovie ? (
								<>
									<div style={{ display: "flex", alignItems: "center", padding: "0 1rem 0 1rem" }}>
										<b style={{ fontSize: 18, color: colors.secondary }}>{ratedMovie.rating} Points</b>
									</div>
									<div style={{ display: "flex", alignItems: "center", padding: "0 1rem 0 1rem" }}>
										<b style={{ fontSize: 18, color: colors.primary }}>{ratedMovie.rating / 2} Stars</b>
									</div>
									<Stars stars={ratedMovie.rating / 2} />
									<button
										style={{
											padding: ".5rem 1rem .5rem 1rem",
											border: "none",
											backgroundColor: colors.secondary,
											color: "white",
											borderRadius: 10,
											outline: "none",
											fontWeight: "bold",
										}}
										onClick={() => dispatch({ type: "REMOVE_MOVIE_VOTE_REQUESTED", movie, isGuest, session_id })}
									>
										Remove
									</button>
								</>
							) : (
								<Stars
									stars={-1}
									onVote={(vote) => dispatch({ type: "MOVIE_VOTE_REQUESTED", movie, vote, isGuest, session_id })}
								/>
							)}
						</>
					)}
				</div>
				<div style={{ display: "flex" }}>
					<MovieCast />
					<MoreMovieInfo movie={movie} />
				</div>
			</W.Main>
		</>
	) : null;
};

export default withRouter(SelectedMovie);
