import React, { FC } from "react";
import { IMovie } from "../../reducers/movies.reducer";
import { Img, Title, ReleaseDate } from "./movie.styles";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Co from "../../constants/constants";
import W from "../../styles/wrappers";
import { useDispatch } from "react-redux";

interface IProps {
	movie: IMovie;
}

type Props = RouteComponentProps<any, {}> & IProps;

const Movie: FC<Props> = ({ movie, history }) => {
	const dispatch = useDispatch();
	const onMovieSelected = () => {
		history.push(`/movies/id/${movie.id}`);
	};

	return (
		<W.Movie onClick={onMovieSelected}>
			<Img src={`${Co.IMAGE_SRC_PREFIX}${movie.poster_path}`} />
			<Title>{movie.title}</Title>
			<ReleaseDate>{movie.release_date}</ReleaseDate>
		</W.Movie>
	);
};

export default withRouter(Movie);
