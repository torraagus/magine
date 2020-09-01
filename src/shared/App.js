import React, { useState } from "react";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import NavBar from "./components/navBar/Navbar";

const App = () => {
	const [componentLoaded, setComponentLoaded] = useState(false);

	const showTheRest = () => {
		setComponentLoaded(true);
	};

	return (
		<>
			<Switch>
				{routes.map(({ path, exact, pushTo, component: C, ...rest }) => (
					<Route
						key={path}
						path={path}
						exact={exact}
						render={(props) => (
							<>
								{componentLoaded && <NavBar />}
								<C {...props} {...rest} OnFinishLoading={showTheRest} />
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
