import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const PosterImage = styled.img`
	height: 280px;
	margin-right: 1.5rem;
	border-radius: 15px;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	@media (max-width: 600px) {
		width: 100%;
		margin-right: 0;
		height: auto;
	}
`;
export const Overview = styled.p`
	font-weight: 400;
	// letter-spacing: 2px;
	margin: 0;
`;
export const MainWrapper = styled.div`
	// margin-top: 1rem;
	padding-top: 12vh;
	display: flex;
	justify-content: center;
	flexwrap: wrap;
`;
export const MovieInfo = styled.div`
	align-self: center;
`;
export const Companies = styled.div``;
export const Title = styled.p`
	font-size: 24px;
	font-weight: 900;
	letter-spacing: 3px;
	margin: 0;
	padding-top: 1.5rem;
	color: ${colors.primary};
`;
export const Tagline = styled.p`
	margin: 0.25rem 0 0 0;
	font-weight: 500;
	letter-spacing: 2px;
	font-size: 18px;
`;
export const Average = styled.span`
	font-size: 36px;
	font-weight: 900;
`;
export const Count = styled.span`
	margin-left: 1rem;
	vertical-align: super;
`;
export const Field = styled.p`
	padding-top: 1.5rem;
	font-size: 12px;
	text-transform: uppercase;
	color: ${colors.secondary};
`;
export const Value = styled.p`
	margin: 0;
	font-weight: 500;
	display: ${(props) => (props.flex ? "flex" : "block")};
	overflow-x: ${(props) => (props.overflow ? "auto" : "none")};
	padding: 1rem 0 1rem 0;
`;
export const FieldWrapper = styled.div`
	margin: 0;
`;
export const Budget = styled(FieldWrapper)``;
export const Popularity = styled(FieldWrapper)``;
export const Votes = styled(FieldWrapper)``;
export const SpokenLanguages = styled(FieldWrapper)``;

export const MovieWrapper = styled.div`
	width: 60vw;

	@media (max-width: 1366px) {
		width: 80vw;
	}

	@media (max-width: 1024px) {
		width: 90vw;
	}

	@media (max-width: 600px) {
		width: 80vw;
	}

	@media (max-width: 512px) {
		width: 90vw;
	}
`;
export const UpperInfo = styled.div`
	display: flex;
	background-color: #ffffffcc;
	border-radius: 15px;
	padding-right: 1rem;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	@media (max-width: 1024px) {
		padding: 1rem;
	}

	@media (max-width: 600px) {
		flex-wrap: wrap;
		padding: 1rem;
	}
`;
export const DownInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 5rem;
`;
export const Logo = styled.img`
	height: 50px;
	padding-right: 0.5rem;
`;
export const SectionWrapper = styled.div`
	margin-bottom: 2rem;
`;
