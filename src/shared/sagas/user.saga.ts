import { call, put, delay } from "redux-saga/effects";
import UserService from "../../services/userService/UserService";

function* guestLogin() {
  yield put({ type: "START_LOADING_BAR" });
  // yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
  try {
    // yield delay(1000);
    const result = yield call(UserService.guestLogin);
    yield put({
      type: "GUEST_LOGIN_SUCCEEDED",
      session_id: result.guest_session_id,
    });
  } catch (e) {
    yield put({ type: "GUEST_LOGIN_FAILED", error: e.message });
  }
  yield put({ type: "FULL_LOADING_BAR" });
}

function* userLogin() {
  yield put({ type: "START_LOADING_BAR" });
  // yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
  try {
    // yield delay(1000);
    const result = yield call(UserService.userLogin);
    yield put({ type: "USER_LOGIN_SUCCEEDED", result });
  } catch (e) {
    yield put({ type: "USER_LOGIN_FAILED", error: e.message });
  }
  yield put({ type: "FULL_LOADING_BAR" });
}

function* logout({ isGuest }) {
  console.log(isGuest, "ISGUEST?");
  yield put({ type: "START_LOADING_BAR" });
  // yield put({ type: "NOW-PLAYING_MOVIES_FETCHING" });
  try {
    // yield delay(1000);
    if (isGuest) {
      yield put({ type: "USER_LOGOUT_SUCCEEDED" });
    } else {
      const result = yield call(UserService.userLogin);
      yield put({ type: "USER_LOGOUT_SUCCEEDED", result });
    }
  } catch (e) {
    yield put({ type: "USER_LOGOUT_FAILED", error: e.message });
  }
  yield put({ type: "FULL_LOADING_BAR" });
}

export { userLogin, guestLogin, logout };
