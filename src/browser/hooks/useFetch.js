import { useEffect, useState } from "react";

export const useFetch = (url, fetch, isPaginated, params) => {
	const [state, setState] = useState({
		movies: [],
		page: 1,
		totalPages: "",
		loading: true,
	});

	console.log(url, "in fetch");
	const param = url.split("/").pop();

	useEffect(() => {
		setState({ loading: true });
		(async () => {
			console.log(__isBrowser__, "is Browser in fetch");
			console.log(window.__INITIAL_DATA__, "window obj in fetch");
			if (__isBrowser__ && window.__INITIAL_DATA__) {
				setState({
					page: !isPaginated ? window.__INITIAL_DATA__ : window.__INITIAL_DATA__.page,
					results: !isPaginated ? window.__INITIAL_DATA__ : window.__INITIAL_DATA__.results,
					totalPages: !isPaginated ? window.__INITIAL_DATA__ : window.__INITIAL_DATA__.total_pages,
					loading: false,
				});
				console.log(window.__INITIAL_DATA__, "use window");
				delete window.__INITIAL_DATA__;
			} else {
				console.log(params, "params in fetch");
				const res = params ? await fetch(params) : await fetch(param);

				setState({
					page: !isPaginated ? res : res?.page,
					results: !isPaginated ? res : res?.results,
					totalPages: !isPaginated ? res : res?.total_pages,
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
