import { getRandomInt } from "../utils";
import { colors } from "../../browser/styles/colors";

export interface IState {
	progress: number;
	color: string;
}

export interface IAction {
	type: string;
}

const INITIAL_STATE = { progress: 0, color: colors.primary };

const loadingBarReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		case "START_LOADING_BAR":
			return { ...state, progress: getRandomInt(1, 60) };
		case "FULL_LOADING_BAR":
			return { ...state, progress: 100 };
		default:
			return state;
	}
};

export default loadingBarReducer;
