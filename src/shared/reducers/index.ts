import moviesReducer from "./movies.reducer";
import loadingBarReducer from "./loadingBar.reducer";
import selectedMovieReducer from "./selectedMovie.reducer";
import loginReducer from "./login.reducer";
import ratedMoviesReducer from "./ratedMovies.reducer";
import searchMoviesReducer from "./searchMovies.reducer";
import { combineReducers } from "redux";

export default combineReducers({
	// userReducer,
	moviesReducer,
	loadingBarReducer,
	selectedMovieReducer,
	loginReducer,
	ratedMoviesReducer,
	searchMoviesReducer,
});
