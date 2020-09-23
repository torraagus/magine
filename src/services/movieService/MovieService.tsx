import fetch from "isomorphic-fetch";

const apiKey = process.env.TMDB_API_KEY;

const fetchNowPlayingMovies = async (page) => {
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success && !data.results) throw new Error(data.status_message);

	return data;
};

const fetchPopularMovies = async (page) => {
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success && !data.results) throw new Error(data.status_message);

	return data;
};

const fetchUpcomingMovies = async (page) => {
	const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success && !data.results) throw new Error(data.status_message);

	return data;
};

const fetchMovie = async (id) => {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
	const response = await fetch(url);
	const data = await response.json();

	if (data.success !== undefined && !data.success) throw new Error(data.status_message);

	return data;
};

export const fetchMovieReview = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=${apiKey}&language=en-US&page=${params.page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchSimilarMovies = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=${apiKey}&language=en-US&page=${params.page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchRecommendations = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/recommendations?api_key=${apiKey}&language=en-US&page=${params.page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export default { fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies, fetchMovie };
