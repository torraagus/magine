import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	padding: 0.5rem 1rem 1rem 1rem;
	margin: 1rem 0 0 0;
	background-color: white;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	box-shadow: 5px 5px 5px 0px #651a1b27;
	border-radius: 15px;
`;

export const Label = styled.label`
	margin: 1rem 0 0.5rem 0;
	letter-spacing: 2px;
`;

export const Input = styled.input`
	height: 40px;
	width: 200px;
	border-radius: 10px;
	text-indent: 0.5rem;
	outline: none;
	border: 1px solid #ccc;

	:focus {
		border: 1px solid ${colors.primary};
	}
`;

export const UserLoginBtn = styled.input`
	height: 40px;
	width: 200px;
	border: 1px solid ${colors.primary};
	background-color: ${colors.primary};
	margin: 1rem 0 0.25rem 0;
	color: ${colors.terciary};
	font-weight: bold;
	border-radius: 10px;
	outline: none;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const GuestLoginBtn = styled(UserLoginBtn)`
	background-color: ${colors.secondary};
	margin: 0;
`;

export const Error = styled.p`
	margin: 0.5rem 0 0 0;
	color: red;
`;

export const Brand = styled.h4`
	color: ${colors.primary};
	letter-spacing: 3px;
	text-align: center;
	padding: 1rem 0 1rem 0;
	border-bottom: 1px solid ${colors.primary};

	:hover {
		cursor: pointer;
		opacity: 75%;
	}
`;

export const Header = styled.h1``;
