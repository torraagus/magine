import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import Pagination from "../pagination/Pagination";
import actionTypes from "../../sagas/actionTypes";
import Movie from "../movie/Movie";
import St from "../../styles/wrappers";
import { Title } from "./category.styles";

interface Props {
	title: string;
	category: string;
}

const Category: FC<Props> = ({ title, category }) => {
	const { movies, loading, error } = useSelector((state: RootState) => state.movieReducer[category]);

	// if (loading)
	// 	return (
	// 		<>
	// 			<h2>{title}</h2>
	// 			<p>Loading movies...</p>
	// 		</>
	// 	);
	if (error)
		return (
			<>
				<Title>{title}</Title>
				<p style={{ color: "red" }}>Error: {error}</p>
			</>
		);

	return (
		<St.CategoryWrapper>
			<Title>{title}</Title>
			{movies.length > 0 && (
				<>
					<St.MoviesWrapper>
						{movies.map((movie) => (
							<Movie key={movie.id} movie={movie} />
						))}
					</St.MoviesWrapper>
					{/* <Pagination action={actionTypes[category]} category={category} /> */}
				</>
			)}
		</St.CategoryWrapper>
	);
};

export default Category;
