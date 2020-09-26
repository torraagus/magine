import { IMovie, IRes } from "./movies.reducer";

export interface IState {
	ratedMovies: IMovie[];
	error: string;
}

export interface IAction {
	type: string;
	error: string;
	ratedMovie: IMovie;
	rating: number;
	ratedMovies: IRes;
}

const INITIAL_STATE: IState = {
	error: null,
	ratedMovies: [],
};

const ratedMoviesReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, error, ratedMovie, rating, ratedMovies } = action;

	switch (type) {
		case "MOVIE_VOTE_SUCCEEDED":
			console.log(state, "STATE IN USER REDUCER");
			const index = state.ratedMovies.findIndex((movie) => movie.id === ratedMovie.id);
			if (index !== -1) state.ratedMovies.splice(index, 1);
			return { ...state, ratedMovies: [...state.ratedMovies, { ...ratedMovie, rating }] };
		case "MOVIE_VOTE_FAILED":
			return { ...state, error };
		case "REMOVE_MOVIE_VOTE_SUCCEEDED":
			const i = state.ratedMovies.findIndex((movie) => movie.id === ratedMovie.id);
			if (index !== -1) state.ratedMovies.splice(i, 1);
			return { ...state, ratedMovies: [...state.ratedMovies] };
		case "REMOVE_MOVIE_VOTE_FAILED":
			return { ...state, error };
		case "RATED_MOVIES_FETCH_SUCCEEDED":
			return { ...state, ratedMovies: [...ratedMovies.results] };
		case "RATED_MOVIES_FETCH_FAILED":
			return { ...state, error };
		case "RATED_MOVIES_CLEAN_SUCCEEDED":
			return { ...state, ratedMovies: [] };
		default:
			return state;
	}
};

export default ratedMoviesReducer;
