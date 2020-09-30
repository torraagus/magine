import React, { FC } from "react";
import Category from "../categories/Category";
import { Wrapper } from "./home.styles";
import Footer from "../footer/Footer";

interface Props {}

const Home: FC<Props> = () => {
	return (
		<>
			<Wrapper>
				<Category title={"Now playing"} category="nowPlaying" />
				<Category title={"Popular"} category="popular" />
				<Category title={"Upcoming"} category="upcoming" />
			</Wrapper>
			<Footer />
		</>
	);
};

export default Home;
