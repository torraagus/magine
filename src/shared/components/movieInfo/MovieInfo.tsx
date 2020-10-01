import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import { IMovie } from "../../reducers/movies.reducer";
import Co from "../../constants/constants";
import utils from "../selectedMovie/utils";
import St from "./movieInfo.styles";

type Props = { movie: IMovie };

const MovieInfo: FC<Props> = ({ movie }) => {
	return (
		<St.Wrapper>
			<St.Poster src={`${Co.IMAGE_SRC_PREFIX}${movie.poster_path}`} />
			<St.Container>
				<St.Title>{movie.title}</St.Title>
				<St.SubTitleWrapper>
					<St.ReleaseDate>{movie.release_date}</St.ReleaseDate>
					<St.Genres>
						{movie.genres.map((genre) => (
							<St.Genre key={genre.id}>{genre.name}</St.Genre>
						))}
					</St.Genres>
					<St.Runtime>{utils.formatRuntime(movie.runtime)}</St.Runtime>
				</St.SubTitleWrapper>
				<St.ScoreWrapper>
					<St.VoteAverage>{movie.vote_average}</St.VoteAverage>
					<St.UserScore>User score</St.UserScore>
				</St.ScoreWrapper>
				{movie.tagline && <St.Tagline>{movie.tagline}</St.Tagline>}
				<St.OverviewTitle>Overview</St.OverviewTitle>
				<St.OverviewValue>{movie.overview}</St.OverviewValue>
			</St.Container>
		</St.Wrapper>
	);
};

export default MovieInfo;
