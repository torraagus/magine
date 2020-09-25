import React, { FC, useEffect } from "react";
import Category from "../categories/Category";
import W from "../../styles/wrappers";
import { useDispatch } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import Footer from "../footer/Footer";

interface Props {}

const Home: FC<Props> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "NOW-PLAYING_MOVIES_FETCH_REQUESTED", page: 1 });
		dispatch({ type: "POPULAR_MOVIES_FETCH_REQUESTED", page: 1 });
		dispatch({ type: "UPCOMING_MOVIES_FETCH_REQUESTED", page: 1 });
	}, []);

	return (
		<>
			<W.Main isFirst height={30}>
				<Category title={"Now playing"} category="nowPlaying" />
				<Category title={"Popular"} category="popular" />
				<Category title={"Upcoming"} category="upcoming" />
			</W.Main>
			<Footer />
		</>
	);
};

export default Home;
