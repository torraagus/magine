import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";

type Props = {};

const Footer: FC<Props> = () => (
	<div style={{ margin: "2rem 0 0 0", padding: "2rem", backgroundColor: colors.secondary, textAlign: "center" }}>
		<p>
			<i style={{ color: colors.terciary }}>Developed by</i>{" "}
			<b style={{ color: colors.primary }}>Agustin Ignacio Torra</b>
		</p>
	</div>
);

export default Footer;
