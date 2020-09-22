import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface BlackScreenProps {
	show: boolean;
}

export const Nav = styled.nav`
	position: fixed;
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	min-height: 8vh;
	z-index: 3;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	@media (max-height: 768px) {
		min-height: 10vh;
	}
	// @media (max-height: 512px) {
	// 	min-height: 12vh;
	// }
	@media (max-width: 768px) {
		width: 96vw;
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}
	@media (max-width: 512px) {
		width: 94vw;
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}
	@media (max-width: 384px) {
		width: 92vw;
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}
`;

export const BlackScreen = styled.div<BlackScreenProps>`
	position: absolute;
	display: none;
	height: 600vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
	@media (max-width: 768px) {
		display: ${({ show }) => (show ? "block" : "none")};
	}
`;

export const Logo = styled.div`
	color: ${colors.primary};
	font-weight: 900;
	letter-spacing: 3px;
	font-size: 18px;
	text-transform: uppercase;

	:hover {
		cursor: pointer;
	}
`;

// export const Menu = styled.ul`
// 	display: flex;
// 	list-style: none;
// 	margin: 0;
// 	padding: 0;
// 	background-color: white;
// 	&.menuActive {
// 		transform: translateX(0%);
// 	}
// 	@media (max-width: 768px) {
// 		flex-direction: column;
// 		position: absolute;
// 		top: 10vh;
// 		right: 0;
// 		height: 90vh;
// 		width: 60vw;
// 		transform: translateX(100%);
// 		transition: transform 0.3s ease;
// 	}
// 	// @media ((max-height: 768px) and (max-width: 768px)) {
// 	// 	top: 10vh;
// 	// 	height: 90vh;
// 	// }
// 	// @media ((max-height: 512px) and (max-width: 768px)) {
// 	// 	top: 12vh;
// 	// 	height: 88vh;
// 	// }
// `;

// export const MenuItem = styled.li`
// 	letter-spacing: 2px;
// 	padding-left: 0.5rem;
// 	padding-right: 0.5rem;
// 	align-self: center;

// 	:nth-child(5) {
// 		border-right: 2px solid ${colors.primary};
// 		padding-right: 1rem;
// 	}

// 	@media (max-width: 768px) {
// 		:nth-child(n) {
// 			display: flex;
// 			align-items: center;
// 			align-self: unset;
// 			justify-content: center;
// 			padding: 0;
// 			margin: 0;
// 			:hover {
// 				font-weight: bold;
// 				cursor: pointer;
// 				background-color: ${colors.terciary};
// 			}
// 			:hover > a {
// 				color: white;
// 			}
// 		}
// 	}
// `;

// export const Item = styled.div<ItemProps>`
// 	color: ${({ active }) => (active ? colors.primary : "black")};
// 	font-weight: ${({ active }) => (active ? "900" : "400")};
// 	text-decoration: none;
// 	width: 100%;
// 	text-align: center;
// 	:hover {
// 		cursor: pointer;
// 		color: ${colors.primary};
// 	}
// 	@media (max-width: 768px) {
// 		padding: 1rem 0 1rem 0;
// 		border-bottom: 1px solid #eee;
// 	}
// `;

// export const BurguerMenu = styled.div`
// 	display: none;
// 	:hover {
// 		cursor: pointer;
// 	}
// 	@media (max-width: 768px) {
// 		display: block;
// 	}
// `;

// export const MenuLine = styled.div`
// 	background-color: black;
// 	margin: 5px;
// 	height: 2px;
// 	width: 25px;
// 	transition: all 0.3s ease;
// 	&.toggle {
// 		background-color: ${colors.secondary};
// 	}
// 	&.toggle.line1 {
// 		transform: rotate(-45deg) translate(-5px, 5px);
// 	}
// 	&.toggle.line2 {
// 		opacity: 0;
// 	}
// 	&.toggle.line3 {
// 		transform: rotate(45deg) translate(-5px, -5px);
// 	}
// `;

// export const LogInBtn = styled.button`
// 	margin-left: 0.5rem;

// 	@media (max-width: 768px) {
// 		margin-left: 0;
// 	}
// `;
// export const SignUpBtn = styled.button``;
// export const UserLogged = styled.div`
// 	padding: 0.5rem;
// 	border-radius: 10px;
// 	background-color: ${colors.primary};
// 	color: white;
// 	font-size: 14px;

// 	:hover {
// 		opacity: 75%;
// 	}
// `;
// export const FloatingMenu = styled.div<FloatingMenuProps>`
// 	position: absolute;
// 	top: 10vh;
// 	left: ${({ left, width }) => (left && width ? `${left - (200 - width)}px` : 0)};
// 	width: 200px;
// 	background-color: white;

// 	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
// 	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
// 	box-shadow: 3px 3px 10px 0px #651a1b27;
// `;
// export const FloatingMenuItem = styled.div`
// 	color: ${colors.primary};
// 	text-align: center;
// 	padding: 1rem 0 1rem 0;

// 	:hover {
// 		cursor: pointer;
// 		background-color: ${colors.primary};
// 		color: white;
// 		font-weight: 500;
// 	}
// `;
// export const FloatingMenuSeparator = styled.hr`
// 	border: 1px solid ${colors.primary};
// `;
