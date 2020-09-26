export interface ICastMember {
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	name: string;
	order: number;
	profile_path: string;
}

export interface IState {
	cast: Partial<ICastMember>[];
	loading: boolean;
	error: string;
}

interface IAction {
	type: string;
	cast: ICastMember[];
	error: string;
}

const INITIAL_STATE = {
	cast: [],
	loading: false,
	error: "",
};

const movieCastReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, cast, error } = action;
	switch (type) {
		case "MOVIE_CAST_FETCH_SUCCEEDED":
			return { ...state, cast: cast.slice(0, 10), loading: false };
		case "MOVIE_CAST_WAITING_FETCH":
			return { ...state, loading: true };
		case "MOVIE_CAST_FETCH_FAILED":
			return { ...state, error, loading: false };
		default:
			return state;
	}
};

export default movieCastReducer;
