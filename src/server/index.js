import express from "express";
import cors from "cors";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import React from "react";
import serialize from "serialize-javascript";
import { matchPath, StaticRouter as Router } from "react-router-dom";
import routes from "../shared/routes";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/favicon.ico", (req, res) => res.status(204));

app.get("*", (req, res, next) => {
	const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

	const promise = activeRoute.fetchInitialData
		? activeRoute.fetchInitialData(req.params[0].split("/").pop())
		: Promise.resolve();

	promise
		.then((data) => {
			const markup = renderToString(
				<Router location={req.url} context={{ data }}>
					<App />
				</Router>
			);

			res.send(`
				<!DOCTYPE html>
				<html lang="en">
					<head>
						<meta charset="UTF-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Moviar</title>
						<script src="/bundle.js" defer></script>
						<script>window.__INITIAL_DATA__=${serialize(data)}</script>
						<link rel="stylesheet" type="text/css" href="/styles.css">
						<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap" rel="stylesheet">
					</head>
			
					<body>
						<div id="app">${markup}</div>
					</body>
				</html>
        `);
		})
		.catch(next);
});

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
