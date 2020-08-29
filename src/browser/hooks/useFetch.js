import { useEffect, useState } from "react";

export const useFetch = (url, fetchMovies, fromHome) => {
	const [state, setState] = useState({
		movies: [],
		page: 1,
		totalPages: "",
		loading: true,
	});

	const page = url.split("/").pop();

	useEffect(() => {
		setState({ loading: true });
		(async () => {
			if (__isBrowser__ && window.__INITIAL_DATA__) {
				setState({
					page: fromHome
						? window.__INITIAL_DATA__
						: window.__INITIAL_DATA__.page,
					movies: fromHome
						? window.__INITIAL_DATA__
						: window.__INITIAL_DATA__.results,
					totalPages: fromHome
						? window.__INITIAL_DATA__
						: window.__INITIAL_DATA__.total_pages,
					loading: false,
				});
				console.log(window.__INITIAL_DATA__, "use window");
			} else {
				const res = await fetchMovies(page);
				setState({
					page: fromHome ? res : res.page,
					movies: fromHome ? res : res.results,
					totalPages: fromHome ? res : res.total_pages,
					loading: false,
				});
				console.log(res, "use fetch");
			}
		})();
		return () => {
			delete window.__INITIAL_DATA__;
		};
	}, [url]);

	return state;
};
