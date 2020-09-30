import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	max-width: 150;
	height: auto;
	margin: 0 0.5rem 0 0.5rem;
	text-align: center;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	box-shadow: 5px 5px 5px 0px #651a1b27;
	padding: 0 0 1rem 0;
	border-radius: 0 0 15px 15px;
`;

export const Photo = styled.img`
	max-width: 150px;
`;
export const Name = styled.p`
	padding: 0 0.5rem 0 0.5rem;
	color: ${colors.primary};
	font-weight: bold;
`;
export const Character = styled.p`
	padding: 0 0.5rem 0 0.5rem;
`;
