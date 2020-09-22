import movieReducer from "./movie.reducer";
import loadingBarReducer from "./loadingBar.reducer";
import { combineReducers } from "redux";

export default combineReducers({
	movieReducer,
	loadingBarReducer,
});
