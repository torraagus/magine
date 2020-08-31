import fetch from "isomorphic-fetch";

const apiKey = process.env.TMDB_API_KEY;

export const fetchMovies = () => {
	let urls = [
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
		`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
	];

	let requests = urls.map((url) => fetch(url));

	return Promise.all(requests)
		.then((responses) => Promise.all(responses.map((r) => r.json())))
		.then((data) => Promise.all(data.map((r) => r.results)))
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchNowPlayingMovies = (page) => {
	let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchPopularMovies = (page) => {
	let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchTopRatedMovies = (page) => {
	let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchUpcomingMovies = (page) => {
	let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchMovieById = (movieId) => {
	let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchMovieReview = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=${apiKey}&language=en-US&page=${params.page}`;

	console.log("fetching reviews");
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchSimilarMovies = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=${apiKey}&language=en-US&page=${params.page}`;

	console.log("fetching reviews");
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const fetchRecommendations = (params) => {
	let url = `https://api.themoviedb.org/3/movie/${params.movieId}/recommendations?api_key=${apiKey}&language=en-US&page=${params.page}`;

	console.log("fetching reviews");
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};