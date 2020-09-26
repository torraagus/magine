import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import constants from "../../constants/constants";
import { ICastMember } from "../../reducers/movieCast.reducer";

type Props = {
	member: Partial<ICastMember>;
};

const CastMember: FC<Props> = ({ member }) => {
	return (
		<div
			style={{
				maxWidth: 150,
				height: "auto",
				margin: "0 .5rem 0 .5rem",
				textAlign: "center",
				MozBoxShadow: "10px 10px 5px 0px #651a1b2f",
				WebkitBoxShadow: "10px 10px 5px 0px #651a1b31",
				boxShadow: "5px 5px 5px 0px #651a1b27",
				padding: "0 0 1rem 0",
				borderRadius: "0 0 15px 15px",
			}}
		>
			<img style={{ maxWidth: 150 }} src={`${constants.IMAGE_SRC_PREFIX}${member.profile_path}`} />
			<p style={{ padding: "0 .5rem 0 .5rem", color: colors.primary, fontWeight: "bold" }}>{member.name}</p>
			<p style={{ padding: "0 .5rem 0 .5rem" }}>{member.character}</p>
		</div>
	);
};

export default CastMember;
