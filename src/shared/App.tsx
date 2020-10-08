import React, { useState } from "react";
import routes from "./routes";
import NoMatch from "./components/noMatch/NoMatch";
import NavBar from "./components/navBar/NavBar";
import LoadingBar from "react-top-loading-bar";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/interface";
import SearchBar from "./components/searchBar/SearchBar";
import useWindowSize from "./hooks/useWindowHook";

const App: React.FC = (): JSX.Element => {
	const { progress, color } = useSelector((state: RootState) => state.loadingBarReducer);
	const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
	const { width } = useWindowSize();

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
								{searchBarActive && <SearchBar width={width} onClose={() => setSearchBarActive(false)} />}
								{!noNavBar && !searchBarActive && <NavBar onSearch={() => setSearchBarActive(true)} />}
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
