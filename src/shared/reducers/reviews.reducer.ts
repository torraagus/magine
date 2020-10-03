export interface IReview {
	id: number;
	author: string;
	content: string;
	url: string;
}

export interface IState {
	reviews: Partial<IReview>[];
	error: string;
}

interface IAction {
	type: string;
	reviews: IReview[];
	error: string;
}

const INITIAL_STATE = {
	reviews: [],
	error: "",
};

const reviewsReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, reviews, error } = action;
	switch (type) {
		case "MOVIE_REVIEWS_FETCH_SUCCEEDED":
			console.log(reviews);
			return { ...state, reviews: reviews.slice(0, 1) };
		case "MOVIE_REVIEWS_FETCH_FAILED":
			return { ...state, error };
		default:
			return state;
	}
};

export default reviewsReducer;
