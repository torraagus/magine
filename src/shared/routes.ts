import Home from "./components/home/Home";
import SelectedMovie from "./components/selectedMovie/SelectedMovie";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Movies from "./components/movies/Movies";
import SearchResults from "./components/searchResults/SearchResults";

export interface IRoute {
	path: string;
	exact?: boolean;
	component: any;
	noNavBar?: boolean;
	category?: string;
	title?: string;
}

type Routes = Array<IRoute>;

const routes: Routes = [
	{
		path: "/",
		exact: true,
		component: Home,
	},
	{
		path: "/movies/id/:id",
		component: SelectedMovie,
	},
	{
		path: "/login",
		component: Login,
		noNavBar: true,
	},
	{
		path: "/profile",
		component: Profile,
	},
	{
		path: "/now-playing",
		component: Movies,
		title: "Now playing",
		category: "nowPlaying",
	},
	{
		path: "/popular",
		component: Movies,
		title: "Popular",
		category: "popular",
	},
	{
		path: "/upcoming",
		component: Movies,
		title: "Upcoming",
		category: "upcoming",
	},
	{
		path: "/search",
		component: SearchResults,
	},
];

export default routes;
