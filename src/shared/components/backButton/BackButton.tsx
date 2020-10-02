import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Wrapper } from "./backButton.styles";

type Props = {
	light?: boolean;
	noNavBar?: boolean;
};

const BackButton: FC<RouteComponentProps<any> & Props> = ({ history, light, noNavBar }) => {
	return (
		<Wrapper light={light} noNavBar={noNavBar}>
			<Button onClick={() => history.goBack()} />
		</Wrapper>
	);
};

export default withRouter(BackButton);
