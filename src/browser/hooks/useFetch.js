import { useEffect, useState } from "react";

export const useFetch = (url, fetchMovies, isPaginated) => {
	const [state, setState] = useState({
		movies: [],
		page: 1,
		totalPages: "",
		loading: true,
	});

	const param = url.split("/").pop();

	useEffect(() => {
		setState({ loading: true });
		(async () => {
			if (__isBrowser__ && window.__INITIAL_DATA__) {
				setState({
					page: !isPaginated
						? window.__INITIAL_DATA__
						: window.__INITIAL_DATA__.page,
					results: !isPaginated
						? window.__INITIAL_DATA__
						: window.__INITIAL_DATA__.results,
					totalPages: !isPaginated
						? window.__INITIAL_DATA__
						: window.__INITIAL_DATA__.total_pages,
					loading: false,
				});
				console.log(window.__INITIAL_DATA__, "use window");
			} else {
				const res = await fetchMovies(param);
				setState({
					page: !isPaginated ? res : res.page,
					results: !isPaginated ? res : res.results,
					totalPages: !isPaginated ? res : res.total_pages,
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
