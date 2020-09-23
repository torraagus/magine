import { IState as IMovieState } from "./movies.reducer";
import { IState as ILoadingBarState } from "./loadingBar.reducer";
import { IState as ISelectedMovieState } from "./selectedMovie.reducer";
import { IState as IUserState } from "./user.reducer";

export interface RootState {
	moviesReducer: IMovieState;
	loadingBarReducer: ILoadingBarState;
	selectedMovieReducer: ISelectedMovieState;
	userReducer: IUserState;
}
