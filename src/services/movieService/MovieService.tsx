import fetch from "isomorphic-fetch";

const apiKey = process.env.TMDB_API_KEY;

interface Response {
	results: [Movie[]];
}

interface Movie {
	id: string;
	title: string;
	rating: number;
	rateMovie: (vote: number) => void;
}

export const fetchMovies = async (): Promise<Movie[]> => {
	let urls = [
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
		`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
	];

	let requests = urls.map((url) => fetch(url));

	return Promise.all(requests)
		.then((responses) => Promise.all(responses.map((r) => r.json())))
		.then((data) => Promise.all(data.map((r: Response) => r.results)))
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

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

export const fetchTopRatedMovies = (page) => {
	let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
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
