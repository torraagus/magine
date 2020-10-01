import React from "react";
import util from "../selectedMovie/utils";
import { Value } from "./sidebarMovieInfo.styles";

interface Info {
	title: string;
	name: string;
	component: (arg: string | number) => JSX.Element;
}

const info: Info[] = [
	{
		title: "Status",
		name: "status",
		component: (arg: string): JSX.Element => {
			return <Value>{arg}</Value>;
		},
	},
	{
		title: "Original language",
		name: "original_language",
		component: (arg: string): JSX.Element => {
			return <Value>{util.formatLanguage(arg)}</Value>;
		},
	},
	{
		title: "Budget",
		name: "budget",
		component: (arg: number): JSX.Element => {
			return <Value>{util.formatNumber(arg)}</Value>;
		},
	},
	{
		title: "Revenue",
		name: "revenue",
		component: (arg: number): JSX.Element => {
			return <Value>{util.formatNumber(arg)}</Value>;
		},
	},
	{
		title: "Popularity",
		name: "popularity",
		component: (arg: string): JSX.Element => {
			return <Value>{arg}</Value>;
		},
	},
	{
		title: "Homepage",
		name: "homepage",
		component: (arg: string): JSX.Element => {
			return arg !== "" ? (
				<Value>
					<a style={{ lineBreak: "anywhere" }} href={arg} target="blank">
						Go to page
					</a>
				</Value>
			) : (
				<p>-</p>
			);
		},
	},
];

export default info;
