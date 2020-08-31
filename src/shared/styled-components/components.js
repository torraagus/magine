import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import { colors } from "../../browser/styles/colors";

export const PrimaryBtnSC = styled.button`
	background-color: ${colors.primary};
	color: ${colors.terciary};
	padding: 0.5rem 1rem 0.5rem 1rem;
	font-weight: 500;
	letter-spacing: 2px;
	border-radius: 15px;
	border: none;
	outline: none;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	:hover {
		cursor: pointer;
		color: ${colors.terciary};
		background-color: ${colors.secondary};
	}

	:active {
		opacity: 90%;
		box-shadow: none;
	}
`;

export const MovieTitleSC = styled.p`
	padding: 0.5rem 0.5rem 0 0.5rem;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 1px;
`;

export const MovieImageSC = styled.img`
	border-radius: 15px 15px 0 0;
	border-bottom: 10px solid ${colors.terciary};
	width: 100%;
`;

export const MovieSC = styled.li`
	border-radius: 15px 15px 0 0;
	text-align: center;
	background-color: white;
	padding-bottom: 1rem;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	:nth-child(1) {
		margin-left: 0;
	}

	:hover {
		cursor: pointer;
		-webkit-box-shadow: 10px 10px 5px 0px ${colors.primary};
		-moz-box-shadow: 10px 10px 5px 0px ${colors.primary};
		box-shadow: 5px 5px 5px 0px ${colors.primary};
	}
`;

export const MoviesWrapperSC = styled.div`
	text-align: center;

	@media (max-width: 768px) {
		// margin: 1rem 0 1rem 0;
	}
`;

export const VoteAverageSC = styled.p`
	font-size: 36px;
	margin: 0;
	font-weight: 900;
`;

export const ReleaseDateSC = styled.p`
	margin-bottom: 0;
	font-weight: 500;
`;

export const ReleaseDateTextSC = styled.small`
	font-weight: 300;
`;

export const BackButton = styled(TiArrowBack)`
	font-size: 36px;
	opacity: 50%;
	padding: 0.5rem;
	margin-top: 12vh;

	:hover {
		cursor: pointer;
		opacity: 100%;
	}
`;

export const PageTitleSC = styled.h1`
	font-weight: 900;
	letter-spacing: 5px;
	color: ${colors.primary};
`;

export const SectionTitleSC = styled.p`
	width: 100%;
	padding: 2rem 0 1rem 0;
	border-top: 2px solid ${colors.primary};
	text-align: center;
	color: ${colors.secondary};
	border-radius: 15px;
	letter-spacing: 5px;
	text-transform: uppercase;
	font-weight: 500;
`;
