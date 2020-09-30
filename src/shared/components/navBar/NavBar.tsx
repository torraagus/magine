import React, { useState } from "react";
import { Nav, Logo, BlackScreen, SearchIcon, MenuItem, Wrapper, Button, Menu } from "./navBar.styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { useSelector } from "react-redux";
import items from "../navMenu/items";

type Props = {
	onSearch: () => void;
};

const NavBar: React.FC<RouteComponentProps<any> & Props> = ({ history, onSearch }) => {
	const { isLoggedIn, username } = useSelector((state: RootState) => state.loginReducer);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Wrapper>
				<Nav>
					<Logo onClick={() => history.push("/")}>Moviar</Logo>
					<Menu>
						{items.map((item) => (
							<MenuItem key={item.name} onClick={() => history.push(item.path)}>
								{item.name}
							</MenuItem>
						))}
						<SearchIcon onClick={onSearch} />
						<Button onClick={() => history.push(`${isLoggedIn ? "/Profile" : "/login"}`)}>
							{isLoggedIn ? `Hi ${username}` : "Login"}
						</Button>
						<BurguerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
					</Menu>
				</Nav>
			</Wrapper>
		</>
	);
};

export default withRouter(NavBar);
