import { call, put, delay } from "redux-saga/effects";
import MovieService from "../../services/movieService/MovieService";
import { IRes } from "../reducers/movie.reducer";

function* fetchNowPlayingMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
	try {
		// yield delay(1000);
		const result: IRes = yield call(MovieService.fetchNowPlayingMovies, action.page);
		yield put({ type: "NOW-PLAYING_MOVIES_FETCH_SUCCEEDED", result });
		yield put({ type: "FULL_LOADING_BAR" });
	} catch (e) {
		yield put({ type: "NOW-PLAYING_MOVIES_FETCH_FAILED", error: e.message });
	}
}

function* fetchPopularMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "POPULAR_MOVIES_FETCHING" });
	try {
		// yield delay(1500);
		const result = yield call(MovieService.fetchPopularMovies, action.page);
		yield put({ type: "POPULAR_MOVIES_FETCH_SUCCEEDED", result });
		yield put({ type: "FULL_LOADING_BAR" });
	} catch (e) {
		yield put({ type: "POPULAR_MOVIES_FETCH_FAILED", error: e.message });
	}
}

function* fetchUpcomingMovies(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "POPULAR_MOVIES_FETCHING" });
	try {
		// yield delay(1500);
		const result = yield call(MovieService.fetchUpcomingMovies, action.page);
		yield put({ type: "UPCOMING_MOVIES_FETCH_SUCCEEDED", result });
		yield put({ type: "FULL_LOADING_BAR" });
	} catch (e) {
		yield put({ type: "UPCOMING_MOVIES_FETCH_FAILED", error: e.message });
	}
}

export { fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies };
