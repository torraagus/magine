import React, { useState } from "react";
import { Nav, Logo, BlackScreen, SearchIcon, MenuItem, Wrapper, Button, Menu, BtnsWrapper } from "./navBar.styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { RootState } from "../../reducers/interface";
import { useSelector } from "react-redux";
import items from "../navMenu/items";

type Props = {
	onSearch: () => void;
};

const NavBar: React.FC<RouteComponentProps<any> & Props> = ({ history, onSearch }) => {
	const { isLoggedIn, username } = useSelector((state: RootState) => state.loginReducer);
	const [isOpen, setIsOpen] = useState(false);

	const handleOnClick = (path?: string, isSearch?: boolean) => {
		setIsOpen(false);
		isSearch ? onSearch() : history.push(path);
	};

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Wrapper>
				<Nav>
					<Logo onClick={() => handleOnClick("/", false)}>Moviar</Logo>
					<Menu className={isOpen ? "isActive" : ""}>
						{items.map((item) => (
							<MenuItem key={item.name} onClick={() => handleOnClick(item.path, false)}>
								{item.name}
							</MenuItem>
						))}
						<BtnsWrapper>
							<SearchIcon onClick={() => handleOnClick("", true)} />
							<Button onClick={() => handleOnClick(`${isLoggedIn ? "/Profile" : "/login"}`, false)}>
								{isLoggedIn ? `Hi ${username}` : "Login"}
							</Button>
						</BtnsWrapper>
					</Menu>
					<BurguerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
				</Nav>
			</Wrapper>
		</>
	);
};

export default withRouter(NavBar);
