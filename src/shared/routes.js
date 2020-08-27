import Home from "./pages/home/Home";
import { fetchMovies } from "./api";

const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		fetchInitialData: () => fetchMovies(),
	},
];

export default routes;
