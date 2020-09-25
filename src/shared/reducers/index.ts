import moviesReducer from "./movies.reducer";
import loadingBarReducer from "./loadingBar.reducer";
import selectedMovieReducer from "./selectedMovie.reducer";
// import userReducer from "./user.reducer";
import loginReducer from "./login.reducer";
import ratedMoviesReducer from "./ratedMovies.reducer";
import { combineReducers } from "redux";

export default combineReducers({
	// userReducer,
	moviesReducer,
	loadingBarReducer,
	selectedMovieReducer,
	loginReducer,
	ratedMoviesReducer,
});
