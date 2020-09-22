import { all, put, takeLatest } from "redux-saga/effects";
import { fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies, fetchMovie } from "./movies.saga";

function* watchAll() {
	yield all([
		takeLatest("NOW-PLAYING_MOVIES_FETCH_REQUESTED", fetchNowPlayingMovies),
		takeLatest("POPULAR_MOVIES_FETCH_REQUESTED", fetchPopularMovies),
		takeLatest("UPCOMING_MOVIES_FETCH_REQUESTED", fetchUpcomingMovies),
		takeLatest("MOVIE_FETCH_REQUESTED", fetchMovie),
	]);
}

export default watchAll;
