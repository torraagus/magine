import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	max-width: 150px;
	display: flex;
	flex-direction: column;
	margin: 0.5rem;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		opacity: 90%;
	}
`;

export const Rating = styled.p`
	color: ${colors.secondary};
	font-weight: bold;
`;

export const Img = styled.img`
	width: 150px;
	border-radius: 15px;
	margin: 0 0 0.5rem 0;
`;

export const Title = styled.p`
	color: ${colors.primary};
	font-weight: 900;
`;

export const ReleaseDate = styled.p`
	color: ${colors.light};
`;
