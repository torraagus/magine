import { IState as IMovieState } from "./movies.reducer";
import { IState as ILoadingBarState } from "./loadingBar.reducer";
import { IState as ISelectedMovieState } from "./selectedMovie.reducer";
import { IState as ILoginState } from "./login.reducer";
import { IState as IRatedMoviesState } from "./ratedMovies.reducer";
import { IState as ISearchMoviesState } from "./searchMovies.reducer";
import { IState as IMovieCastState } from "./movieCast.reducer";
import { IState as ISimilarMoviesState } from "./similarMovies.reducer";
import { IState as IMovieKeywordsState } from "./movieKeywords.reducer";

export interface RootState {
	moviesReducer: IMovieState;
	loadingBarReducer: ILoadingBarState;
	selectedMovieReducer: ISelectedMovieState;
	loginReducer: ILoginState;
	ratedMoviesReducer: IRatedMoviesState;
	searchMoviesReducer: ISearchMoviesState;
	movieCastReducer: IMovieCastState;
	similarMoviesReducer: ISimilarMoviesState;
	movieKeywordsReducer: IMovieKeywordsState;
}
