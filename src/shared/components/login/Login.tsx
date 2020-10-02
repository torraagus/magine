import React, { useState, useEffect, useRef, useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Form, Label, Input, UserLoginBtn, GuestLoginBtn, Header, Error, Brand } from "./login.styles";
import BackButton from "../backButton/BackButton";

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
		<Wrapper>
			<BackButton noNavBar />
			<Header>Login</Header>
			{error && <Error>{error}</Error>}
			<Form onSubmit={(e) => handleOnSubmit(e)}>
				<Brand onClick={() => history.push("/")}>Moviar</Brand>
				<Label>Username</Label>
				<Input
					ref={inputRef}
					type="text"
					value={username}
					placeholder="Your username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Label>Password</Label>
				<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<UserLoginBtn type="submit" value="Login" />
				<GuestLoginBtn type="button" value="Login as guest" onClick={loginAsGuest} />
			</Form>
		</Wrapper>
	);
};

export default withRouter(Login);
