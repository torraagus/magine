import React, { FC } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { IMovie } from "../../reducers/movies.reducer";
import actionTypes from "../../sagas/actionTypes";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";

interface Props {
	category: string;
	title: string;
}

const Movies: FC<Props> = ({ category, title }) => {
	const { movies, loading, error } = useSelector((state: RootState) => state.moviesReducer[category]);

	if (loading)
		return (
			<>
				<h1 style={{ color: colors.secondary }}>{title}</h1>
				<p>Loading movies...</p>
			</>
		);
	if (error)
		return (
			<>
				<h1 style={{ color: colors.secondary }}>{title}</h1>
				<p style={{ color: "red" }}>Error: {error}</p>
			</>
		);

	return (
		<div
			style={{
				display: "flex",
				padding: "10vh 0 0 0",
				flexDirection: "column",
				width: "-webkit-fill-available",
				alignItems: "center",
			}}
		>
			<h1 style={{ color: colors.secondary }}>{title}</h1>
			<Pagination action={actionTypes[category]} selector={category} />
			<div style={{ display: "flex", width: "70%", flexWrap: "wrap", margin: "1rem", justifyContent: "center" }}>
				{movies.map((movie: IMovie) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>
			<Pagination action={actionTypes[category]} selector={category} />
		</div>
	);
};

export default Movies;
