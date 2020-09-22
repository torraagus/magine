import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

interface FloatingMenuProps {
	left: number;
	width: number;
}

export const Wrapper = styled.div<FloatingMenuProps>`
	position: absolute;
	top: 10vh;
	left: ${({ left, width }) => (left && width ? `${left - (200 - width)}px` : 0)};
	width: 200px;
	background-color: white;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 3px 3px 10px 0px #651a1b27;
`;
export const FloatingMenuItem = styled.div`
	color: ${colors.primary};
	text-align: center;
	padding: 1rem 0 1rem 0;

	:hover {
		cursor: pointer;
		background-color: ${colors.primary};
		color: white;
		font-weight: 500;
	}
`;
export const FloatingMenuSeparator = styled.hr`
	border: 1px solid ${colors.primary};
`;
