import React, { useState } from "react";
import { Nav, Logo, BlackScreen } from "./navBar.styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { useSelector } from "react-redux";

type Props = {
	history: RouteComponentProps["history"];
	location: RouteComponentProps["location"];
};

const NavBar: React.FC<Props> = ({ history }) => {
	const { isLoggedIn, username } = useSelector((state: RootState) => state.loginReducer);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Nav>
				<Logo onClick={() => history.push("/")}>Moviar</Logo>
				<div style={{ display: "flex" }}>
					<button
						style={{
							width: 100,
							padding: ".5rem",
							outline: "none",
							backgroundColor: colors.primary,
							color: "white",
							border: "none",
							fontWeight: "bold",
							borderRadius: 15,
						}}
						onClick={() => history.push(`${isLoggedIn ? "/Profile" : "/login"}`)}
					>
						{isLoggedIn ? `Hi ${username}` : "Login"}
					</button>
					<BurguerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
				</div>
			</Nav>
		</>
	);
};

export default withRouter(NavBar);
