import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import W from "../../styles/wrappers";
import { withRouter } from "react-router-dom";
import { RootState } from "../../reducers/interface";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import MovieCast from "../movieCast/MovieCast";
import SidebarMovieInfo from "../sidebarMovieInfo/SidebarMovieInfo";
import RateMovie from "../rateMovie/RateMovie";
import MovieInfo from "../movieInfo/MovieInfo";
import { Wrapper, LeftWrapper, Loading, Error } from "./selectedMovie.styles";

type Props = RouteComponentProps<any, {}>;

const SelectedMovie: FC<Props> = ({ match }) => {
	const { movie, loading, error } = useSelector((state: RootState) => state.selectedMovieReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		const id = match.url.split("/").pop();
		dispatch({ type: "MOVIE_FETCH_REQUESTED", id });
		dispatch({ type: "MOVIE_CAST_FETCH_REQUESTED", id });
		return () => {
			dispatch({ type: "MOVIE_CLEAN" });
		};
	}, []);

	return movie ? (
		<>
			<W.Main isFirst bg={colors.secondary} height={60}>
				<MovieInfo movie={movie} />
			</W.Main>
			<W.Main>
				<RateMovie movie={movie} />
				<Wrapper>
					<LeftWrapper>
						<MovieCast />
						<div>Similar movies</div>
						<div>Recommended movies</div>
					</LeftWrapper>
					<SidebarMovieInfo movie={movie} />
				</Wrapper>
			</W.Main>
		</>
	) : (
		<W.Main vCenter height={90}>
			{loading && <Loading>Loading...</Loading>}
			{error && <Error>{error}</Error>}
		</W.Main>
	);
};

export default withRouter(SelectedMovie);
