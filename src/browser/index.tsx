import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../shared/App";
import "./index.scss";
import configureStore from "../shared/configureStore";

const store = configureStore();

hydrate(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);
