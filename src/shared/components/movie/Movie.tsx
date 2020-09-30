import React, { FC } from "react";
import { IMovie } from "../../reducers/movies.reducer";
import { Img, Title, ReleaseDate, Wrapper, Rating } from "./movie.styles";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Co from "../../constants/constants";

interface IProps {
	movie: IMovie;
}

type Props = RouteComponentProps<any, {}> & IProps;

const Movie: FC<Props> = ({ movie, history }) => {
	const onMovieSelected = () => {
		history.push(`/movies/id/${movie.id}`);
	};

	return (
		<Wrapper onClick={onMovieSelected}>
			<Img src={`${Co.IMAGE_SRC_PREFIX}${movie.poster_path}`} />
			<Title>{movie.title}</Title>
			{movie.rating && <Rating>{`Your score: ${movie.rating}`}</Rating>}
			<ReleaseDate>{movie.release_date}</ReleaseDate>
		</Wrapper>
	);
};

export default withRouter(Movie);
