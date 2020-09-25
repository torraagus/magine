import { IMovie } from "./movies.reducer";

export interface IState {
	session_id: string;
	isLoggedIn: boolean;
	isGuest: boolean;
	username: string;
	error: string;
}

export interface IAction {
	type: string;
	session_id: string;
	error: string;
	username: string;
}

const INITIAL_STATE: IState = {
	session_id: "",
	isLoggedIn: false,
	isGuest: false,
	username: "",
	error: null,
};

const userReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { type, session_id, error, username } = action;

	switch (type) {
		case "GUEST_LOGIN_SUCCEEDED":
			return {
				...state,
				session_id,
				isGuest: true,
				isLoggedIn: true,
				username: "Guest",
			};
		case "USER_LOGIN_SUCCEEDED":
			return {
				...state,
				session_id,
				isGuest: false,
				isLoggedIn: true,
				username,
			};
		case "LOGIN_FAILED":
			return { ...state, error };
		case "USER_LOGOUT_SUCCEEDED":
			return {
				...state,
				session_id: "",
				isGuest: false,
				isLoggedIn: false,
				username: "",
			};
		case "USER_LOGOUT_FAILED":
			return { ...state, error };
		default:
			return state;
	}
};

export default userReducer;
