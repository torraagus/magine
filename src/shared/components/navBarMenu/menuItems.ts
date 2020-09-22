export interface IMenuItem {
	name: string;
	path: string;
}

export const menuItems: IMenuItem[] = [
	{ name: "Home", path: "/" },
	{ name: "Now playing", path: "/now-playing/page/1" },
	{ name: "Popular", path: "/popular/page/1" },
	{ name: "Top rated", path: "/top-rated/page/1" },
	{ name: "Upcoming", path: "/upcoming/page/1" },
	{ name: "Log in", path: "/login" },
];
