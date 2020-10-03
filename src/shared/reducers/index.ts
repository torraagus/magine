import moviesReducer from "./movies.reducer";
import loadingBarReducer from "./loadingBar.reducer";
import selectedMovieReducer from "./selectedMovie.reducer";
import loginReducer from "./login.reducer";
import ratedMoviesReducer from "./ratedMovies.reducer";
import searchMoviesReducer from "./searchMovies.reducer";
import movieCastReducer from "./movieCast.reducer";
import similarMoviesReducer from "./similarMovies.reducer";
import movieKeywordsReducer from "./movieKeywords.reducer";
import reviewsReducer from "./reviews.reducer";
import { combineReducers } from "redux";

export default combineReducers({
	movieCastReducer,
	moviesReducer,
	loadingBarReducer,
	selectedMovieReducer,
	loginReducer,
	ratedMoviesReducer,
	searchMoviesReducer,
	similarMoviesReducer,
	movieKeywordsReducer,
	reviewsReducer,
});
