import Home from "./components/home/Home";
import SelectedMovie from "./components/selectedMovie/SelectedMovie";

export interface IRoute {
	path: string;
	exact?: boolean;
	component: React.FC<any>;
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
];

export default routes;
