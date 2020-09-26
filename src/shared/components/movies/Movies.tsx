import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
	const { movies, error } = useSelector((state: RootState) => state.moviesReducer[category]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (movies.length == 0) dispatch({ type: actionTypes[category], page: 1 });
	}, []);

	// if (loading)
	// 	return (
	// 		<div
	// 			style={{
	// 				display: "flex",
	// 				padding: "10vh 0 0 0",
	// 				flexDirection: "column",
	// 				width: "-webkit-fill-available",
	// 				alignItems: "center",
	// 			}}
	// 		>
	// 			<h1 style={{ color: colors.primary }}>{title}</h1>
	// 			<div style={{ display: "flex", width: "70%", flexWrap: "wrap", margin: "1rem", justifyContent: "center" }}>
	// 				<p>Loading movies...</p>
	// 			</div>
	// 		</div>
	// 	);
	if (error)
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
				<h1 style={{ color: colors.primary }}>{title}</h1>
				<div style={{ display: "flex", width: "70%", flexWrap: "wrap", margin: "1rem", justifyContent: "center" }}>
					<p style={{ color: "red" }}>Error: {error}</p>{" "}
				</div>
			</div>
		);

	return movies.length > 0 ? (
		<div
			style={{
				display: "flex",
				padding: "10vh 0 0 0",
				flexDirection: "column",
				width: "-webkit-fill-available",
				alignItems: "center",
			}}
		>
			<h1 style={{ color: colors.primary }}>{title}</h1>
			<Pagination action={actionTypes[category]} selector={category} />
			<div style={{ display: "flex", width: "70%", flexWrap: "wrap", margin: "1rem", justifyContent: "center" }}>
				{movies.map((movie: IMovie) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>
			<Pagination action={actionTypes[category]} selector={category} />
		</div>
	) : null;
};

export default Movies;
