import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

const Wrapper = styled.div`
	display: flex;
	width: 70%;
	padding: 2rem 0 2rem 0;
	color: white;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 0 0 2rem;
	width: 75%;
`;
const SubTitleWrapper = styled.div`
	display: flex;
`;
const Title = styled.p`
	font-size: 36px;
	font-weight: bold;
`;
const ReleaseDate = styled.p`
	padding: 0 1rem 0 0;
`;
const Genre = styled.p`
	padding: 0 0.25rem 0 0.25rem;
`;
const Runtime = styled.p`
	padding: 0 0 0 1rem;
`;
const ScoreWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0;
`;
const VoteAverage = styled.p`
	font-size: 40px;
	font-weight: bold;
`;
const UserScore = styled.p`
	font-weight: bold;
	padding: 0 0 0 1rem;
`;
const Tagline = styled.p`
	color: ${colors.primary};
	margin: 0.5rem 0;
	font-style: italic;
`;
const OverviewTitle = styled.p`
	font-weight: bold;
	font-size: 20px;
	margin: 0.5rem 0;
`;
const OverviewValue = styled.p``;
const Poster = styled.img`
	width: 25%;
	border-radius: 15px;
`;

export default {
	Poster,
	Wrapper,
	Container,
	SubTitleWrapper,
	Title,
	ReleaseDate,
	Genre,
	Runtime,
	ScoreWrapper,
	VoteAverage,
	UserScore,
	Tagline,
	OverviewTitle,
	OverviewValue,
};
