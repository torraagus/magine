import React, { FC, useEffect } from "react";
import { RootState } from "../../reducers/interface";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import RatedMovies from "../ratedMovies/RatedMovies";
import { Wrapper, Container, Header, Username, Logout } from "./profile.styles";

type Props = RouteComponentProps<any>;

const Profile: FC<Props> = ({ history }) => {
	const dispatch = useDispatch();
	const { isLoggedIn, username } = useSelector((state: RootState) => state.loginReducer);

	useEffect(() => {
		if (!isLoggedIn) history.push(`/`);
	}, [isLoggedIn]);

	return isLoggedIn ? (
		<Wrapper>
			<Container>
				<Header>
					<Username>{username}</Username>
					<Logout onClick={() => dispatch({ type: "USER_LOGOUT_REQUESTED" })}>Logout</Logout>
				</Header>
				<RatedMovies />
			</Container>
		</Wrapper>
	) : null;
};

export default withRouter(Profile);
