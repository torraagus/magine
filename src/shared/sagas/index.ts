import { all, takeLatest } from "redux-saga/effects";
import { fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies, fetchMovie } from "./movies.saga";
import { guestLogin, userLogin, logout } from "./user.saga";

function* watchAll() {
	yield all([
		// Movies 
		takeLatest("NOW-PLAYING_MOVIES_FETCH_REQUESTED", fetchNowPlayingMovies),
		takeLatest("POPULAR_MOVIES_FETCH_REQUESTED", fetchPopularMovies),
		takeLatest("UPCOMING_MOVIES_FETCH_REQUESTED", fetchUpcomingMovies),
		takeLatest("MOVIE_FETCH_REQUESTED", fetchMovie),

		// User
		takeLatest("GUEST_LOGIN_REQUESTED", guestLogin),
		takeLatest("USER_LOGIN_REQUESTED", userLogin),
		takeLatest("USER_LOGOUT_REQUESTED", logout),
	]);
}

export default watchAll;
