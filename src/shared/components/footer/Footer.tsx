import React, { FC } from "react";
import { Wrapper, By, Name } from "./footer.styles";

type Props = {};

const Footer: FC<Props> = () => (
	<Wrapper>
		<By>Developed by</By> <Name>Agustin Ignacio Torra</Name>
	</Wrapper>
);

export default Footer;
