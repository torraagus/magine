import React, { FC } from "react";
import { menuItems, IMenuItem } from "./menuItems";
import { Item, Menu, LogInBtn, UserLogged, Logout } from "./navbarMenu.styles";

interface Props {
	activeItem: string;
	isOpen: boolean;
	onItemClick: (item: IMenuItem | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const NavbarMenu: FC<Props> = ({ activeItem, isOpen }) => {
	return (
		<>
			<Menu className={`${isOpen ? "menuActive" : ""}`}>
				{menuItems.map((item) => (
					<>
						{item.name !== "Log in" && (
							<Item key={item.name} active={activeItem === item.name.toLowerCase()} href={item.path}>
								{item.name}
							</Item>
						)}
						{/* {item.name === "Log in" && (
						<Item key={item.name} active={activeItem === item.name.toLowerCase()} href={item.path}>
						</Item>
					)} */}
					</>
				))}
			</Menu>
			<LogInBtn>Login</LogInBtn>
		</>
	);
};
