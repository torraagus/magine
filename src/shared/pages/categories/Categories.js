import React, { useEffect } from "react";
import {
	Pages,
	Image,
	Movie,
	Movies,
	Name,
	Title,
	Wrapper,
	Category,
	VoteAverage,
	ReleaseDate,
	ReleaseDateText,
} from "./categories.styles";
import { BackButton } from "../../styled-components/components";
import { useFetch } from "../../../browser/hooks/useFetch";
import Pagination from "../../components/pagination/Pagination";

const AllMovies = ({ location, fetchInitialData, history, name, basePath, OnFinishLoading }) => {
	const { results: movies, page, totalPages, loading } = useFetch(location.pathname, fetchInitialData, true);

	const handleOnPageChange = (page) => {
		history.push(`${basePath}/${page}`);
	};

	useEffect(() => {
		if (!loading) OnFinishLoading();
	}, [loading]);

	return (
		<Wrapper>
			<BackButton size={36} onClick={() => history.push("/")} />
			<Category>
				<Name>{name}</Name>
				{page && (
					<Pages>
						Page {page} of {totalPages}
					</Pages>
				)}
			</Category>
			{loading && <Pages>Loading...</Pages>}
			<Pagination upper page={page} totalPages={totalPages} onPageChange={handleOnPageChange} />
			{!loading && (
				<Movies>
					{movies?.map((movie) => (
						<Movie key={movie.id} onClick={() => history.push(`/movies/id/${movie.id}`)}>
							<Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
							<Title>{movie.title}</Title>
							<VoteAverage>{movie.vote_average}</VoteAverage>
							<ReleaseDate>{movie.release_date}</ReleaseDate>
							<ReleaseDateText>Release date</ReleaseDateText>
						</Movie>
					))}
				</Movies>
			)}
			<Pagination page={page} totalPages={totalPages} onPageChange={handleOnPageChange} />
		</Wrapper>
	);
};

export default AllMovies;
