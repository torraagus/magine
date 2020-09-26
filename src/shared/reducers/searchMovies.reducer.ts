import { IMovie, IRes } from "./movies.reducer";

export interface IState {
	movies: IMovie[];
	loading: boolean;
	error: string;
	page: number;
	total_pages: number;
}

export interface IAction {
	type: string;
	error: string;
	result: IRes;
}

const INITIAL_STATE: IState = {
	movies: [],
	loading: false,
	error: null,
	page: 1,
	total_pages: 1,
};

const searchMoviesReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, error, result } = action;

	switch (type) {
		case "SEARCH_MOVIES_SUCCEEDED":
			return { ...state, movies: result.results, loading: false, page: result.page, total_pages: result.total_pages };
		case "SEARCH_MOVIES_FAILED":
			return { ...state, error, loading: false };
		default:
			return state;
	}
};

export default searchMoviesReducer;
