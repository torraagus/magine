import React, { useState, useEffect } from "react";
import { Nav, Logo, Menu, MenuItem, Item, BurguerMenu, MenuLine, BlackScreen } from "./navBar.styles";
import { withRouter } from "react-router-dom";

const NavBar = ({ history, location }) => {
	const [activeItem, setActiveItem] = useState("");
	const menuItems = [
		{ name: "Home", path: "/" },
		{ name: "Now playing", path: "/now-playing/page/1" },
		{ name: "Popular", path: "/popular/page/1" },
		{ name: "Top rated", path: "/top-rated/page/1" },
		{ name: "Upcoming", path: "/upcoming/page/1" },
		{ name: "Log in", path: "" },
		{ name: "Sign up", path: "" },
	];
	const [isOpen, setIsOpen] = useState(false);

	const handleOnClick = (item) => {
		setIsOpen(false);
		setActiveItem(item.name.toLowerCase());
		goToPath(item.path);
	};

	const goToPath = (path) => {
		history.push(path);
	};

	useEffect(() => {
		setActiveItem(location.pathname.split("/")[1] === "" ? "home" : location.pathname.split("/")[1].replace("-", " "));
	}, [location.pathname]);

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Nav>
				<Logo onClick={() => goToPath("/")}>Moviar</Logo>
				<Menu className={`${isOpen ? "menuActive" : ""}`}>
					{menuItems.map((item) => (
						<MenuItem key={item.name}>
							<Item
								active={activeItem === item.name.toLowerCase()}
								href={item.path}
								onClick={() => handleOnClick(item)}
							>
								{item.name}
							</Item>
						</MenuItem>
					))}
				</Menu>
				<BurguerMenu onClick={() => setIsOpen(!isOpen)}>
					<MenuLine className={`${isOpen ? "toggle" : ""} line1`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line2`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line3`} />
				</BurguerMenu>
			</Nav>
		</>
	);
};

export default withRouter(NavBar);
