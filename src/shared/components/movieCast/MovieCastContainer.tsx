import React, { FC } from "react";
import { Wrapper, Header } from "./movieCast.styles";

type Props = {};

const Container: FC<Props> = ({ children }) => {
	return (
		<div>
			<Wrapper>
				<Header>Top billed cast</Header>
				{children}
			</Wrapper>
		</div>
	);
};

export default Container;
