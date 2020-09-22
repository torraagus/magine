import moviesReducer from "./movies.reducer";
import loadingBarReducer from "./loadingBar.reducer";
import selectedMovieReducer from "./selectedMovie.reducer";
import { combineReducers } from "redux";

export default combineReducers({
	moviesReducer,
	loadingBarReducer,
	selectedMovieReducer,
});
