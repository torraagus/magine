import React from "react";
import { useFetch } from "../../../browser/hooks/useFetch";
import { BackButton } from "../../styled-components/components";
import {
	Logo,
	MainWrapper,
	MovieWrapper,
	UpperInfo,
	PosterImage,
	MovieInfo,
	Title,
	Tagline,
	Field,
	Value,
	DownInfo,
	Companies,
	SpokenLanguages,
	Budget,
	Popularity,
	Average,
	Count,
	Overview,
	Votes,
	SectionWrapper,
} from "./selectedMovie.styles";
import Reviews from "../../components/reviews/Reviews";
import SimilarMovies from "../../components/similarMovies/SimilarMovies";
import Recommendations from "../../components/recommendations/Recommendations";

const SelectedMovie = ({ location, fetchInitialData }) => {
	const { results: movie, loading } = useFetch(location.pathname, fetchInitialData, false);

	if (loading) {
		return <div>Loading movie...</div>;
	} else {
		return (
			<>
				{movie && (
					<MainWrapper>
						<MovieWrapper>
							{/* <BackButton size={36} onClick={() => history.goBack()}></BackButton> */}
							<UpperInfo>
								<PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
								<MovieInfo>
									<Title>{movie.title}</Title>
									<Tagline>{movie.tagline}</Tagline>
									<Field>Overview</Field>
									<Overview>{movie.overview}</Overview>
								</MovieInfo>
							</UpperInfo>
							<DownInfo>
								<Companies>
									<Field>Produced by</Field>
									<Value flex overflow="true">
										{movie.production_companies.map((pc) => (
											<Logo key={pc.id} src={`https://image.tmdb.org/t/p/w500${pc.logo_path}`} alt={pc.name} />
										))}
									</Value>
								</Companies>
								<Budget>
									<Field>Budget</Field>
									<Value>${movie.budget / 1000000} millions</Value>
								</Budget>
								<Popularity>
									<Field>Popularity</Field>
									<Value>{movie.popularity}</Value>
								</Popularity>
								<Votes>
									<Field>Votes</Field>
									<Value>
										<Average>{movie.vote_average}</Average>
										<Count>({movie.vote_count})</Count>
									</Value>
								</Votes>
								<SpokenLanguages>
									<Field>Spoken languages</Field>
									{movie.spoken_languages.map((lang) => (
										<Value key={lang.name}>{lang.name}</Value>
									))}
								</SpokenLanguages>
							</DownInfo>
							<SectionWrapper>
								<Recommendations />
							</SectionWrapper>
							<SectionWrapper>
								<SimilarMovies />
							</SectionWrapper>
							<SectionWrapper>
								<Reviews />
							</SectionWrapper>
						</MovieWrapper>
					</MainWrapper>
				)}
			</>
		);
	}
};

export default SelectedMovie;
