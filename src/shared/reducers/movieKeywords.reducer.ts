export interface IKeyword {
	id: number;
	name: string;
}

export interface IState {
	keywords: Partial<IKeyword>[];
	error: string;
}

interface IAction {
	type: string;
	keywords: IKeyword[];
	error: string;
}

const INITIAL_STATE = {
	keywords: [],
	error: "",
};

const movieKeywordsReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, keywords, error } = action;
	switch (type) {
		case "MOVIE_KEYWORDS_FETCH_SUCCEEDED":
			return { ...state, keywords };
		case "MOVIE_KEYWORDS_FETCH_FAILED":
			return { ...state, error };
		default:
			return state;
	}
};

export default movieKeywordsReducer;
