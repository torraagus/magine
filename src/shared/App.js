import React from "react";
import routes from "./routes";
import { Route, Switch, withRouter } from "react-router-dom";
import NoMatch from "./NoMatch";
import NavBar from "./components/navBar/Navbar";
import { BackButton } from "./styled-components/components";
import { history } from "react-router-dom";

const App = ({ history }) => {
	return (
		<>
			<Switch>
				{routes.map(({ path, exact, component: C, ...rest }) => (
					<Route
						key={path}
						path={path}
						exact={exact}
						render={(props) => (
							<>
								<NavBar />
								<BackButton size={36} onClick={() => history.push("/")}></BackButton>
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

export default withRouter(App);
