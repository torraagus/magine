import React, { FC } from "react";
import { Container, Title } from "./ratedMovies.styles";

type Props = {
	children: React.ReactNode;
	movies?: boolean;
};

const Wrapper: FC<Props> = ({ children, movies }) => {
	return (
		<>
			<Title>Rated movies</Title>
			<Container movies={movies}>{children}</Container>
		</>
	);
};

export default Wrapper;
