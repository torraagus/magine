import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

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
