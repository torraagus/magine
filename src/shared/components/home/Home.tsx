import React, { FC } from "react";
import Category from "../categories/Category";
import W from "../../styles/wrappers";
import Footer from "../footer/Footer";

interface Props {}

const Home: FC<Props> = () => {
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
