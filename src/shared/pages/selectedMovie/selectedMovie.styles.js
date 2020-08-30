import styled from "styled-components";

export const PosterImage = styled.img`
	height: 280px;
	margin-right: 1.5rem;
`;
export const Overview = styled.p`
	font-weight: 500;
	letter-spacing: 3px;
	margin: 0;
`;
export const MainWrapper = styled.div`
	margin-top: 1rem;
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
`;
export const Value = styled.p`
	margin: 0;
	display: ${(props) => (props.flex ? "flex" : "inline-block")};
	overflow-x: ${(props) => (props.overflow ? "auto" : "none")};
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
`;
export const UpperInfo = styled.div`
	display: flex;
`;
export const DownInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Logo = styled.img`
	height: 50px;
	padding-right: 0.5rem;
`;