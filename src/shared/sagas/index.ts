import { all, takeLatest } from "redux-saga/effects";
import {
	fetchNowPlayingMovies,
	fetchPopularMovies,
	fetchUpcomingMovies,
	fetchMovie,
	searchMovies,
	fetchMovieCast,
} from "./movies.saga";
import { guestLogin, userLogin, logout, rateMovie, removeVote, fetchRatedMovies } from "./user.saga";

function* watchAll() {
	yield all([
		// Movies
		takeLatest("NOW-PLAYING_MOVIES_FETCH_REQUESTED", fetchNowPlayingMovies),
		takeLatest("POPULAR_MOVIES_FETCH_REQUESTED", fetchPopularMovies),
		takeLatest("UPCOMING_MOVIES_FETCH_REQUESTED", fetchUpcomingMovies),
		takeLatest("MOVIE_FETCH_REQUESTED", fetchMovie),
		takeLatest("MOVIE_CAST_FETCH_REQUESTED", fetchMovieCast),

		// User
		takeLatest("GUEST_LOGIN_REQUESTED", guestLogin),
		takeLatest("USER_LOGIN_REQUESTED", userLogin),
		takeLatest("USER_LOGOUT_REQUESTED", logout),

		takeLatest("MOVIE_VOTE_REQUESTED", rateMovie),
		takeLatest("REMOVE_MOVIE_VOTE_REQUESTED", removeVote),
		takeLatest("RATED_MOVIES_FETCH_REQUESTED", fetchRatedMovies),

		// Search
		takeLatest("SEARCH_MOVIES_FETCH_REQUESTED", searchMovies),
	]);
}

export default watchAll;
