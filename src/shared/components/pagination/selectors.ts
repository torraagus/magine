import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";

const getSelector = () => {
	return {
		nowPlaying: useSelector((state: RootState) => state.moviesReducer.nowPlaying),
		popular: useSelector((state: RootState) => state.moviesReducer.popular),
		upcoming: useSelector((state: RootState) => state.moviesReducer.upcoming),
		search: useSelector((state: RootState) => state.searchMoviesReducer),
	};
};

export default getSelector;
