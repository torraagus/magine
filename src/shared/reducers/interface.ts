import { IState as IMovieState } from "./movie.reducer";
import { IState as ILoadingBarState } from "./loadingBar.reducer";

export interface RootState {
	movieReducer: IMovieState;
	loadingBarReducer: ILoadingBarState;
}
