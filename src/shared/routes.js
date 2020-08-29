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
		fetchInitialData: () => fetchMovies(),
	},
	{
		path: "/now-playing/:page",
		basePath: "/now-playing",
		component: Categories,
		name: "Now playing",
		fetchInitialData: (page) => fetchNowPlayingMovies(page),
	},
	{
		path: "/popular/:page",
		basePath: "/popular",
		component: Categories,
		name: "Popular",
		fetchInitialData: (page) => fetchPopularMovies(page),
	},
	{
		path: "/top-rated/:page",
		basePath: "/top-rated",
		component: Categories,
		name: "Top rated",
		fetchInitialData: (page) => fetchTopRatedMovies(page),
	},
	{
		path: "/upcoming/:page",
		basePath: "/upcoming",
		component: Categories,
		name: "Upcoming",
		fetchInitialData: (page) => fetchUpcomingMovies(page),
	},
];

export default routes;
