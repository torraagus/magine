import React, { useState, useEffect, useRef, useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { useSelector, useDispatch } from "react-redux";

type Props = {
	history: RouteComponentProps["history"];
};

const Login: React.FC<Props> = ({ history }) => {
	const { isLoggedIn, error } = useSelector((state: RootState) => state.loginReducer);
	const dispatch = useDispatch();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({ type: "USER_LOGIN_REQUESTED", credentials: { username, password } });
	};

	const loginAsGuest = () => {
		dispatch({ type: "GUEST_LOGIN_REQUESTED" });
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	useEffect(() => {
		if (isLoggedIn) history.push("/profile");
	}, [isLoggedIn]);

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h4 onClick={() => history.push("/")}>Moviar</h4>
			<h1>Login</h1>
			<form
				onSubmit={(e) => handleOnSubmit(e)}
				style={{
					display: "flex",
					flexDirection: "column",
					border: "1px solid #ccc",
				}}
			>
				<label>Username</label>
				<input ref={inputRef} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label>Password</label>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<input type="submit" value="Login" />
				<input type="button" value="Login as guest" onClick={loginAsGuest} />
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
};

export default withRouter(Login);
