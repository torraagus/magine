import { call, put, delay } from "redux-saga/effects";
import UserService from "../../services/userService/UserService";

function* guestLogin() {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
	try {
		// yield delay(1000);
		const { guest_session_id } = yield call(UserService.guestLogin);
		yield put({
			type: "GUEST_LOGIN_SUCCEEDED",
			session_id: guest_session_id,
		});
	} catch (e) {
		yield put({ type: "LOGIN_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* userLogin(action) {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
	try {
		// yield delay(1000);
		const { session_id, username } = yield call(UserService.userLogin, action.credentials);
		console.log(session_id, "SESSION ID");
		console.log(username, "USERNAME");
		yield put({
			type: "USER_LOGIN_SUCCEEDED",
			session_id,
			username,
		});
	} catch (e) {
		yield put({ type: "LOGIN_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* logout() {
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
	try {
		// yield delay(1000);
		yield put({ type: "USER_LOGOUT_SUCCEEDED" });
		yield put({ type: "RATED_MOVIES_CLEAN_SUCCEEDED" });
	} catch (e) {
		yield put({ type: "USER_LOGOUT_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* rateMovie(action) {
	const { movie, vote, isGuest, session_id } = action;
	yield put({ type: "START_LOADING_BAR" });
	// yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
	try {
		// yield delay(1000);
		console.log("user saga");
		yield call(UserService.rateMovie, movie.id, vote, isGuest, session_id);
		yield put({ type: "MOVIE_VOTE_SUCCEEDED", ratedMovie: movie, rating: vote });
	} catch (e) {
		console.log(e);
		yield put({ type: "MOVIE_VOTE_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* removeVote(action) {
	const { movie, isGuest, session_id } = action;
	yield put({ type: "START_LOADING_BAR" });
	try {
		yield call(UserService.removeVote, movie.id, isGuest, session_id);
		yield put({ type: "REMOVE_MOVIE_VOTE_SUCCEEDED", ratedMovie: movie });
	} catch (e) {
		console.log(e);
		yield put({ type: "REMOVE_MOVIE_VOTE_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

function* fetchRatedMovies(action) {
	const { username, isGuest, session_id } = action;
	yield put({ type: "START_LOADING_BAR" });
	try {
		const result = yield call(UserService.fetchRatedMovies, username, isGuest, session_id);
		yield put({ type: "RATED_MOVIES_FETCH_SUCCEEDED", ratedMovies: result });
	} catch (e) {
		console.log(e);
		yield put({ type: "RATED_MOVIES_FETCH_FAILED", error: e.message });
	}
	yield put({ type: "FULL_LOADING_BAR" });
}

export { userLogin, guestLogin, logout, rateMovie, removeVote, fetchRatedMovies };
