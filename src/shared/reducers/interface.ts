import { IState as IMovieState } from "./movies.reducer";
import { IState as ILoadingBarState } from "./loadingBar.reducer";
import { IState as ISelectedMovieState } from "./selectedMovie.reducer";

export interface RootState {
	moviesReducer: IMovieState;
	loadingBarReducer: ILoadingBarState;
	selectedMovieReducer: ISelectedMovieState;
}
