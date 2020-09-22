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

export const generateGuestSessionId = () => {
	let url = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const logoutSessionId = async (sessionId) => {
	let url = `https://api.themoviedb.org/3/authentication/session?api_key=${apiKey}`;

	let response = await fetch(url, {
		method: "DELETE",
		body: JSON.stringify({
			session_id: sessionId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	let data = await response.json();
	return data;
};

export const rateMovie = async (movie, sessionId) => {
	let url = `https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=${apiKey}&session_id=${sessionId}`;

	return fetch(url, {
		method: "POST",
		body: JSON.stringify({ value: movie.rating }),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const generateToken = () => {
	const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;

	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const generateLoginToken = (username, password, token) => {
	const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`;

	return fetch(url, {
		method: "POST",
		body: JSON.stringify({
			username: username,
			password: password,
			request_token: token,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const generateSessionId = (loginToken) => {
	const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;

	return fetch(url, {
		method: "POST",
		body: JSON.stringify({
			request_token: loginToken,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => {
			console.warn(err);
			return null;
		});
};

export const getRatedMovies = async (accountId, sessionId) => {
	const url = `https://api.themoviedb.org/3/account/${accountId}/rated/movies?api_key=${apiKey}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;

	const res = await fetch(url);
	return res.json();
};