import React, { FC, Fragment } from "react";
import { IMovie } from "../../reducers/movies.reducer";
import { Wrapper, Info, Title, Container, Name } from "./sidebarMovieInfo.styles";
import items from "./info";

type Props = {
	movie: IMovie;
};

const SidebarMovieInfo: FC<Props> = ({ movie }) => {
	return (
		<Wrapper>
			<Title>More info</Title>
			<Info>
				{items.map((item) => (
					<Fragment key={item.name}>
						<Container>
							<Name>{item.title}</Name>
							{item.component(movie[item.name])}
						</Container>
					</Fragment>
				))}
			</Info>
		</Wrapper>
	);
};

export default SidebarMovieInfo;
