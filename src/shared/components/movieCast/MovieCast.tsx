import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";
import CastMember from "../castMember/CastMember";

type Props = {};

const MovieCast: FC<Props> = () => {
	const { cast, error, loading } = useSelector((state: RootState) => state.movieCastReducer);

	if (loading)
		return (
			<div
				style={{
					textAlign: "start",
					margin: "2rem 0 1rem 0",
					display: "flex",
					flexDirection: "column",
					width: "70vw",
				}}
			>
				<h2>Top billed cast</h2>
				<p>loading...</p>
			</div>
		);

	if (error)
		return (
			<div
				style={{
					textAlign: "start",
					margin: "2rem 0 1rem 0",
					display: "flex",
					flexDirection: "column",
					width: "70vw",
				}}
			>
				<h2>Top billed cast</h2>
				<p style={{ color: "red" }}>{error}</p>
			</div>
		);

	return (
		<div
			style={{
				textAlign: "start",
				margin: "2rem 0 1rem 0",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<h2>Top billed cast</h2>
			<div
				style={{
					margin: "1rem 0 0 0",
					padding: "1rem 0",
					width: "55vw",
					display: "flex",
					overflowX: "auto",
					alignItems: "flex-start",
				}}
			>
				{cast.map((member) => (
					<CastMember key={member.id} member={member} />
				))}
			</div>
		</div>
	);
};

export default MovieCast;
