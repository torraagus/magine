import React, { FC } from "react";
import Category from "../categories/Category";
import W from "../../styles/wrappers";

interface Props {}

const Home: FC<Props> = () => {
	return (
		<W.Main>
			<Category title={"Now playing"} category="nowPlaying" />
			<Category title={"Popular"} category="popular" />
			<Category title={"Upcoming"} category="upcoming" />
		</W.Main>
	);
};

export default Home;
