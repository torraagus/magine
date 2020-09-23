export interface IState {
  session_id: string;
  isLoggedIn: boolean;
  isGuest: boolean;
  username: string;
}

export interface IAction {
  type: string;
  session_id: string;
  error: string;
}

const INITIAL_STATE: IState = {
  session_id: "",
  isLoggedIn: false,
  isGuest: false,
  username: "",
};

const userReducer = (state: IState = INITIAL_STATE, action: IAction) => {
  const { type, session_id, error } = action;

  switch (type) {
    case "GUEST_LOGIN_SUCCEEDED":
      return {
        ...state,
        session_id,
        isGuest: true,
        isLoggedIn: true,
        username: "Guest",
      };
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
    case "GUEST_LOGIN_FAILED":
      return { ...state, error };
    default:
      return state;
  }
};

export default userReducer;
