import { call, put, delay } from "redux-saga/effects";
import MovieService from "../../services/movieService/MovieService";
import { IRes } from "../reducers/movies.reducer";

function* fetchNowPlayingMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
	try {
		// yield delay(1000);
		const result: IRes = yield call(MovieService.fetchNowPlayingMovies, action.page);
		yield put({ type: "NOW-PLAYING_MOVIES_FETCH_SUCCEEDED", result });
	} catch (e) {
		yield put({ type: "NOW-PLAYING_MOVIES_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* fetchPopularMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "POPULAR_MOVIES_FETCHING" });
	try {
		// yield delay(1500);
		const result = yield call(MovieService.fetchPopularMovies, action.page);
		yield put({ type: "POPULAR_MOVIES_FETCH_SUCCEEDED", result });
	} catch (e) {
		yield put({ type: "POPULAR_MOVIES_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* fetchUpcomingMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "POPULAR_MOVIES_FETCHING" });
	try {
		// yield delay(1500);
		const result = yield call(MovieService.fetchUpcomingMovies, action.page);
		yield put({ type: "UPCOMING_MOVIES_FETCH_SUCCEEDED", result });
	} catch (e) {
		yield put({ type: "UPCOMING_MOVIES_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* fetchMovie(action) {
	yield put({ type: "START_LOADING_BAR" });
	yield put({ type: "MOVIE_WAITING_FETCH" });
	try {
		//yield delay(1500);
		const result = yield call(MovieService.fetchMovie, action.id);
		yield put({ type: "MOVIE_FETCH_SUCCEEDED", result });
	} catch (e) {
		yield put({ type: "MOVIE_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* fetchMovieCast(action) {
	yield put({ type: "START_LOADING_BAR" });
	yield put({ type: "MOVIE_CAST_WAITING_FETCH" });
	try {
		// yield delay(1500);
		const cast = yield call(MovieService.fetchMovieCast, action.id);
		yield put({ type: "MOVIE_CAST_FETCH_SUCCEEDED", cast });
	} catch (e) {
		yield put({ type: "MOVIE_CAST_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* searchMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	try {
		// yield delay(1500);
		const result = yield call(MovieService.searchMovies, action.query, action.page);
		yield put({ type: "SEARCH_MOVIES_SUCCEEDED", result });
	} catch (e) {
		yield put({ type: "SEARCH_MOVIES_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* fetchSimilarMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	try {
		const movies = yield call(MovieService.fetchSimilarMovies, action.id);
		yield put({ type: "SIMILAR_MOVIES_FETCH_SUCCEEDED", movies });
	} catch (e) {
		yield put({ type: "SIMILAR_MOVIES_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

export {
	fetchNowPlayingMovies,
	fetchPopularMovies,
	fetchUpcomingMovies,
	fetchMovie,
	searchMovies,
	fetchMovieCast,
	fetchSimilarMovies,
};
