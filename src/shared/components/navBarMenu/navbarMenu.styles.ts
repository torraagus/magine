import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface ItemProps {
	active: boolean;
	href: string;
}

export const Menu = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: white;
	&.menuActive {
		transform: translateX(0%);
	}
	@media (max-width: 768px) {
		flex-direction: column;
		position: absolute;
		top: 10vh;
		right: 0;
		height: 90vh;
		width: 60vw;
		transform: translateX(100%);
		transition: transform 0.3s ease;
	}
`;

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

export const Item = styled.div<ItemProps>`
	color: ${({ active }) => (active ? colors.primary : "black")};
	font-weight: ${({ active }) => (active ? "900" : "400")};
	text-decoration: none;
	letter-spacing: 2px;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	align-self: center;
	text-align: center;

	:nth-child(5) {
		border-right: 2px solid ${colors.primary};
		padding-right: 1rem;
	}

	:hover {
		cursor: pointer;
		color: ${colors.primary};
	}

	@media (max-width: 768px) {
		padding: 1rem 0 1rem 0;
		border-bottom: 1px solid #eee;
	}
`;

export const LogInBtn = styled.button`
	margin-left: 0.5rem;

	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

export const UserLogged = styled.div`
	padding: 0.5rem;
	border-radius: 10px;
	background-color: ${colors.primary};
	color: white;
	font-size: 14px;

	:hover {
		opacity: 75%;
	}
`;

export const Logout = styled.button``;
