import React, { useState } from "react";
import {
	Nav,
	Logo,
	NavButtons,
	Button,
	ResumeBtn,
	Menu,
	MenuItem,
	Item,
	BurguerMenu,
	MenuLine,
	BlackScreen,
} from "./navBar.styles";
import { withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
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

	const handleOnClick = (path) => {
		setIsOpen(false);
		history.push(path);
	};

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Nav>
				<Logo>MOVIAR</Logo>
				{/* <NavButtons>
					<Button href="#my-work" onClick={() => handleOnClick(false)}>
						My work
					</Button>
					<ResumeBtn onClick={handleOnClickResume}>Resume</ResumeBtn>
				</NavButtons> */}
				<Menu className={`${isOpen ? "menuActive" : ""}`}>
					{menuItems.map((item) => (
						<MenuItem key={item.name}>
                            <Item href={item.path} onClick={() => handleOnClick(item.path)}>
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
