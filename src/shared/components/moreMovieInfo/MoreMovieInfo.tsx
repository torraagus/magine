import React, { FC } from "react";
import { IMovie } from "../../reducers/movies.reducer";
import util from "../selectedMovie/utils";

type Props = {
	movie: IMovie;
};

const MoreMovieInfo: FC<Props> = ({ movie }) => {
	return (
		<div
			style={{
				width: "13vw",
				textAlign: "start",
				margin: "2rem 0 1rem 2vw",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<h2>More info</h2>
			<div>
				<div style={{ margin: "2rem 0 1rem 0" }}>
					<p>
						<b>Status</b>
					</p>
					<p>{movie.status}</p>
				</div>
				<div style={{ margin: "0 0 1rem 0" }}>
					<p>
						<b>Original language</b>
					</p>
					<p>{util.formatLanguage(movie.original_language)}</p>
				</div>
				<div style={{ margin: "0 0 1rem 0" }}>
					<p>
						<b>Budget</b>
					</p>
					<p>{util.formatNumber(movie.budget)}</p>
				</div>
				<div style={{ margin: "0 0 1rem 0" }}>
					<p>
						<b>Revenue</b>
					</p>
					<p>{util.formatNumber(movie.revenue)}</p>
				</div>
				<div style={{ margin: "0 0 1rem 0" }}>
					<p>
						<b>Popularity</b>
					</p>
					<p>{movie.popularity}</p>
				</div>
				{movie.homepage && (
					<div style={{ margin: "0 0 1rem 0", lineBreak: "anywhere" }}>
						<p>
							<b>Homepage</b>
						</p>
						<p>
							<a href={movie.homepage} target="blank">
								{movie.homepage}
							</a>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MoreMovieInfo;
