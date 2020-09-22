import React, { useEffect } from "react";
import routes from "./routes";
import NoMatch from "./components/noMatch/NoMatch";
import NavBar from "./components/navBar/Navbar";
import LoadingBar from "react-top-loading-bar";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers/interface";

const App: React.FC = (): JSX.Element => {
	const { progress, color } = useSelector((state: RootState) => state.loadingBarReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "NOW-PLAYING_MOVIES_FETCH_REQUESTED", page: 1 });
		dispatch({ type: "POPULAR_MOVIES_FETCH_REQUESTED", page: 1 });
		dispatch({ type: "UPCOMING_MOVIES_FETCH_REQUESTED", page: 1 });
	}, []);

	return (
		<>
			<LoadingBar color={color} progress={progress} />
			<Switch>
				{routes.map(({ path, exact, noNavBar, component: C, ...rest }) => (
					<Route
						key={path}
						path={path}
						exact={exact}
						render={(props) => (
							<>
								{!noNavBar && <NavBar />}
								<C {...props} {...rest} />
							</>
						)}
					/>
				))}
				<Route render={(props) => <NoMatch {...props} />} />
			</Switch>
		</>
	);
};

export default App;
