import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import { isEmpty } from "../../utils";
import CastMember from "../castMember/CastMember";
import { Loading, Cast, Error } from "./movieCast.styles";
import Container from "./MovieCastContainer";

type Props = {};

const MovieCast: FC<Props> = () => {
	const { cast, error, loading } = useSelector((state: RootState) => state.movieCastReducer);

	return !isEmpty(cast) ? (
		<Container>
			<Cast>
				{cast.map((member) => (
					<CastMember key={member.id} member={member} />
				))}
			</Cast>
			{error && <Error>{error}</Error>}
			{loading && <Loading>Loading...</Loading>}
		</Container>
	) : null;
};

export default MovieCast;
