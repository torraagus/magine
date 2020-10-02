import React, { FC } from "react";
import actionTypes from "../../sagas/actionTypes";
import BackButton from "../backButton/BackButton";
import Pagination from "../pagination/Pagination";
import { Wrapper, Title, Container, InnerWrapper } from "./movies.styles";

type Props = {
	title: string;
	pagination?: boolean;
	category?: string;
};

const MoviesW: FC<Props> = ({ children, title, pagination, category }) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<BackButton />
				<Title>{title}</Title>
				{pagination && <Pagination action={actionTypes[category]} selector={category} />}
				<Container>{children}</Container>
				{pagination && <Pagination action={actionTypes[category]} selector={category} />}
			</InnerWrapper>
		</Wrapper>
	);
};

export default MoviesW;
