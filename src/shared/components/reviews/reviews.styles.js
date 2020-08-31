import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";
import { SectionTitleSC } from "../../styled-components/components";

export const Title = styled(SectionTitleSC)``;

export const ReviewsWrapper = styled.ul`
	list-style: none;
`;

export const Review = styled.li`
	border-bottom: 1px solid ${colors.secondary};
	padding-bottom: 1rem;
	margin-top: 1rem;
`;

export const ReviewContent = styled.p`
	-webkit-user-modify: read-write-plaintext-only;
	text-align: justify;
`;

export const Author = styled.p`
	text-align: end;
	font-weight: 400;
	outline: none;
	padding-top: 2rem;
`;

export const AuthorName = styled.span`
	font-weight: 900;
	color: ${colors.primary};
`;
