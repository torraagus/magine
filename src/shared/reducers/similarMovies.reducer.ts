import { IMovie } from "./movies.reducer";

export interface IState {
	movies: IMovie[];
	error: string;
}

interface IAction {
	type: string;
	movies: IMovie[];
	error: string;
}

const INITIAL_STATE = {
	movies: [],
	error: "",
};

const similarMoviesReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, movies, error } = action;
	switch (type) {
		case "SIMILAR_MOVIES_FETCH_SUCCEEDED":
			console.log(movies);
			return { ...state, movies };
		case "SIMILAR_MOVIES_FETCH_FAILED":
			return { ...state, error };

		default:
			return state;
	}
};

export default similarMoviesReducer;
