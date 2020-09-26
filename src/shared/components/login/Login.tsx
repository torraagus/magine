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
				height: "70vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>Login</h1>
			{error && <p style={{ margin: ".5rem 0 0 0", color: "red" }}>{error}</p>}
			<form
				onSubmit={(e) => handleOnSubmit(e)}
				style={{
					display: "flex",
					flexDirection: "column",
					border: "1px solid #ccc",
					padding: ".5rem 1rem 1rem 1rem",
					margin: "1rem 0 0 0",
					backgroundColor: "white",
					MozBoxShadow: "10px 10px 5px 0px #651a1b2f",
					WebkitBoxShadow: "10px 10px 5px 0px #651a1b31",
					boxShadow: "5px 5px 5px 0px #651a1b27",
					borderRadius: 15,
				}}
			>
				<h4
					style={{
						color: colors.primary,
						letterSpacing: 3,
						textAlign: "center",
						padding: "1rem 0 1rem 0",
						borderBottom: `1px solid ${colors.primary}`,
					}}
					onClick={() => history.push("/")}
				>
					Moviar
				</h4>
				<label style={{ margin: "1rem 0 .5rem 0", letterSpacing: 2 }}>
					<small>Username</small>
				</label>
				<input
					style={{ height: 40, width: 200, border: `1px solid #ccc`, borderRadius: 10, textIndent: ".5rem" }}
					ref={inputRef}
					type="text"
					value={username}
					placeholder="Your username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label style={{ margin: "1rem 0 .5rem 0", letterSpacing: 2 }}>
					<small>Password</small>
				</label>
				<input
					style={{ height: 40, width: 200, border: `1px solid #ccc`, borderRadius: 10, textIndent: ".5rem" }}
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					style={{
						height: 40,
						width: 200,
						border: `1px solid ${colors.primary}`,
						backgroundColor: colors.primary,
						margin: "1rem 0 .25rem 0",
						color: colors.terciary,
						fontWeight: "bold",
						borderRadius: 10,
					}}
					type="submit"
					value="Login"
				/>
				<input
					style={{
						height: 40,
						width: 200,
						border: `1px solid ${colors.secondary}`,
						backgroundColor: colors.secondary,
						color: colors.terciary,
						fontWeight: "bold",
						borderRadius: 10,
					}}
					type="button"
					value="Login as guest"
					onClick={loginAsGuest}
				/>
			</form>
		</div>
	);
};

export default withRouter(Login);
