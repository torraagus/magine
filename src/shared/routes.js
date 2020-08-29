import Home from "./pages/home/Home";
import {
	fetchMovies,
	fetchNowPlayingMovies,
	fetchPopularMovies,
	fetchTopRatedMovies,
	fetchUpcomingMovies,
} from "./api";
import Categories from "./pages/categories/Categories";

const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		categories: [
			{ title: "Now playing", path: "/now-playing" },
			{ title: "Popular", path: "/popular" },
			{ title: "Top rated", path: "/top-rated" },
			{ title: "Upcoming", path: "/upcoming" },
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
];

export default routes;
