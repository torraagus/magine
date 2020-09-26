import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import actionTypes from "../../sagas/actionTypes";
import Movie from "../movie/Movie";
import St from "../../styles/wrappers";
import { Title } from "./category.styles";

interface Props {
	title: string;
	category: string;
}

const Category: FC<Props> = ({ title, category }) => {
	const { movies, error } = useSelector((state: RootState) => state.moviesReducer[category]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (movies.length == 0) dispatch({ type: actionTypes[category], page: 1 });
	}, []);

	if (error)
		return (
			<>
				<Title>{title}</Title>
				<p style={{ color: "red" }}>Error: {error}</p>
			</>
		);

	return movies.length > 0 ? (
		<St.CategoryWrapper>
			<Title>{title}</Title>
			{movies.length > 0 && (
				<>
					<St.MoviesWrapper>
						{movies.map((movie) => (
							<Movie key={movie.id} movie={movie} />
						))}
					</St.MoviesWrapper>
				</>
			)}
		</St.CategoryWrapper>
	) : null;
};

export default Category;
