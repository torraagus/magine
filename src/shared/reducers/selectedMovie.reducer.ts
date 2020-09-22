import { IMovie } from "./movies.reducer";

export interface IState {
	movie: IMovie;
	loading: boolean;
	error: string;
}

export interface IRes {
	result: IMovie;
	success: boolean;
	status_message: string;
}

interface IAction {
	type: string;
	result: IRes;
	error: string;
}

const INITIAL_STATE = {
	movie: null,
	loading: false,
	error: "",
};

const selectedMovieReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, result, error } = action;
	switch (type) {
		case "MOVIE_FETCH_SUCCEEDED":
			return {
				...state,
				movie: { ...result },
				loading: false,
			};
		case "MOVIE_WAITING_FETCH":
			return {
				...state,
				loading: true,
			};
		case "MOVIE_CLEAN":
			return { ...state, movie: null };
		case "MOVIE_FETCH_FAILED":
			return { ...state, error, loading: false };
		default:
			return state;
	}
};

export default selectedMovieReducer;
