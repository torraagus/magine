import Home from "./components/home/Home";
import SelectedMovie from "./components/selectedMovie/SelectedMovie";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

export interface IRoute {
	path: string;
	exact?: boolean;
	component: any;
	actions?: string[];
	noNavBar?: boolean;
}

type Routes = Array<IRoute>;

const routes: Routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		actions: ["NOW-PLAYING_MOVIES_FETCH_REQUESTED", "POPULAR_MOVIES_FETCH_REQUESTED"],
	},
	{
		path: "/movies/id/:id",
		component: SelectedMovie,
	},
	{
		path: "/login",
		component: Login,
		noNavBar: true
	},
	{
		path: "/profile",
		component: Profile,
	},
];

export default routes;
