import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import actionTypes from "../../sagas/actionTypes";
import Movie from "../movie/Movie";
import { Title, Movies, Wrapper, Error, TitleW, EnterBtn } from "./category.styles";
import { IMovie } from "../../reducers/movies.reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import routes from "./routesByCategory";

interface Props {
	title: string;
	category: string;
}

const Category: FC<RouteComponentProps<any> & Props> = ({ title, category, history }) => {
	const { movies, error } = useSelector((state: RootState) => state.moviesReducer[category]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (movies.length == 0) dispatch({ type: actionTypes[category], page: 1 });
	}, []);

	if (error)
		return (
			<>
				<Title>{title}</Title>
				<Error>Error: {error}</Error>
			</>
		);

	return movies.length > 0 ? (
		<Wrapper>
			<TitleW>
				<Title>{title}</Title>
				<EnterBtn onClick={() => history.push(routes[category])}>See all</EnterBtn>
			</TitleW>
			{movies.length > 0 && (
				<>
					<Movies>
						{movies.map((movie: IMovie) => (
							<Movie key={movie.id} movie={movie} />
						))}
					</Movies>
				</>
			)}
		</Wrapper>
	) : null;
};

export default withRouter(Category);
