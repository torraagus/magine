import React, { FC, useEffect } from "react";
import { RootState } from "../../reducers/interface";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { colors } from "../../../browser/styles/colors";
import RatedMovies from "../ratedMovies/RatedMovies";

type Props = RouteComponentProps<any>;

const Profile: FC<Props> = ({ history }) => {
	const dispatch = useDispatch();
	const { isLoggedIn, username } = useSelector((state: RootState) => state.loginReducer);

	useEffect(() => {
		if (!isLoggedIn) history.push(`/`);
	}, [isLoggedIn]);

	return isLoggedIn ? (
		<div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
			<div style={{ width: "70vw", padding: "15vh 0 0 0" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "0 0 1rem 0",
						margin: "0 0 1rem 0",
						borderBottom: `1px solid ${colors.primary}`,
					}}
				>
					<h1 style={{ letterSpacing: 3 }}>{username}</h1>
					<p onClick={() => dispatch({ type: "USER_LOGOUT_REQUESTED" })}>Logout</p>
				</div>
				<RatedMovies />
			</div>
		</div>
	) : null;
};

export default withRouter(Profile);
