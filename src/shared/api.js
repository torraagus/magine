import fetch from "isomorphic-fetch";

export const fetchMovies = () => {
	const apiKey = "986ff47b5082746e703a6f7cb592b5b7";

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
