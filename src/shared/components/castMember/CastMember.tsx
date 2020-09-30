import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import constants from "../../constants/constants";
import { ICastMember } from "../../reducers/movieCast.reducer";
import { Wrapper, Photo, Name, Character } from "./castMember.styles";

type Props = {
	member: Partial<ICastMember>;
};

const CastMember: FC<Props> = ({ member }) => {
	return (
		<Wrapper>
			<Photo src={`${constants.IMAGE_SRC_PREFIX}${member.profile_path}`} />
			<Name>{member.name}</Name>
			<Character>{member.character}</Character>
		</Wrapper>
	);
};

export default CastMember;
