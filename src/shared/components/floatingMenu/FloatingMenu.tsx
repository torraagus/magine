import React, { FC } from "react";
import { Wrapper, FloatingMenuItem, FloatingMenuSeparator } from "./floatingMenu.styles";

interface Props {
	isOpen: boolean;
	left: number;
	width: number;
	logout: () => void;
	goToProfile: () => void;
}

const FloatingMenu: FC<Props> = ({ isOpen, left, width, logout, goToProfile }) => {
	return isOpen ? (
		<Wrapper left={left} width={width}>
			{true && (
				<>
					<FloatingMenuItem onClick={goToProfile}>Profile</FloatingMenuItem>
					<FloatingMenuSeparator />
				</>
			)}
			<FloatingMenuItem onClick={logout}>Logout</FloatingMenuItem>
		</Wrapper>
	) : null;
};

export default FloatingMenu;
