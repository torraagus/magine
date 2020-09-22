import React, { useState, useEffect, useRef, useContext } from "react";
import { Nav, Logo, BlackScreen } from "./navBar.styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import FloatingMenu from "../floatingMenu/FloatingMenu";
import { IMenuItem } from "../navBarMenu/menuItems";
import { NavbarMenu as Menu } from "../navBarMenu/NavbarMenu";

type Props = {
	history: RouteComponentProps["history"];
	location: RouteComponentProps["location"];
};

const NavBar: React.FC<Props> = ({ history, location }) => {
	const [activeItem, setActiveItem] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handleOnClick = (item: IMenuItem) => {
		setIsOpen(false);
		setActiveItem(item.name.toLowerCase());
		goToPath(item.path);
	};

	const goToPath = (path: string) => {
		history.push(path);
	};

	const logout = async () => {
		// await user.logout();
		// setCurrentUser(user);
	};

	useEffect(() => {
		setActiveItem(location.pathname.split("/")[1] === "" ? "home" : location.pathname.split("/")[1].replace("-", " "));
	}, [location.pathname]);

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Nav>
				<Logo onClick={() => goToPath("/")}>Moviar</Logo>
				{/* <Menu isOpen={isOpen} activeItem={activeItem} /> */}
				<BurguerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
			</Nav>
		</>
	);
};

export default withRouter(NavBar);
