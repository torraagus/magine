import Home from "./pages/home/Home";
import {
	fetchMovies,
	fetchNowPlayingMovies,
	fetchPopularMovies,
	fetchTopRatedMovies,
	fetchUpcomingMovies,
	fetchMovieById
} from "./api";
import Categories from "./pages/categories/Categories";
import SelectedMovie from "./pages/selectedMovie/SelectedMovie";

const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		categories: [
			{ title: "Now playing", path: "/now-playing/page" },
			{ title: "Popular", path: "/popular/page" },
			{ title: "Top rated", path: "/top-rated/page" },
			{ title: "Upcoming", path: "/upcoming/page" },
		],
		fetchInitialData: () => fetchMovies(),
	},
	{
		path: "/now-playing/page/:page",
		basePath: "/now-playing/page",
		component: Categories,
		name: "Now playing",
		fetchInitialData: (page) => fetchNowPlayingMovies(page),
	},
	{
		path: "/popular/page/:page",
		basePath: "/popular/page",
		component: Categories,
		name: "Popular",
		fetchInitialData: (page) => fetchPopularMovies(page),
	},
	{
		path: "/top-rated/page/:page",
		basePath: "/top-rated/page",
		component: Categories,
		name: "Top rated",
		fetchInitialData: (page) => fetchTopRatedMovies(page),
	},
	{
		path: "/upcoming/page/:page",
		basePath: "/upcoming/page",
		component: Categories,
		name: "Upcoming",
		fetchInitialData: (page) => fetchUpcomingMovies(page),
	},
	{
		path: "/movies/id/:id",
		basePath: "/movies/id",
		component: SelectedMovie,
		fetchInitialData: (id) => fetchMovieById(id),
	},
];

export default routes;
