import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	width: fit-content;
`;

interface IStarIcon {
	painted: boolean;
	disabled: boolean;
}

export const StarIcon = styled(BsStarFill)<IStarIcon>`
	color: ${({ painted }) => (painted ? colors.primary : "#ccc")};
	margin: 0 0.25rem 0 0.25rem;

	:nth-child(1) {
		margin: 0;
	}

	${({ disabled }) =>
		!disabled &&
		`:hover {
		cursor: pointer;
		color: ${colors.primary};
	}`}
`;
