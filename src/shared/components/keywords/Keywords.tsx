import React, { FC } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import { RootState } from "../../reducers/interface";
import { IKeyword } from "../../reducers/movieKeywords.reducer";

type Props = {};

const Keyword: FC<{ keyword: string }> = ({ keyword }) => {
	return (
		<p
			style={{
				backgroundColor: colors.primary,
				color: "white",
				padding: ".5rem",
				width: "fit-content",
				margin: ".25rem .25rem 0 0",
				borderRadius: 10,
			}}
		>
			{keyword}
		</p>
	);
};

const Keywords: FC<Props> = () => {
	const { keywords, error } = useSelector((state: RootState) => state.movieKeywordsReducer);

	return (
		<div style={{ margin: "2rem 0 0 2vw", width: "13vw" }}>
			<h2>Keywords</h2>
			<div style={{ display: "flex", flexWrap: "wrap", margin: "2rem 0 0 0" }}>
				{keywords.length > 0 &&
					keywords.map((k: IKeyword) => (
						<Keyword key={k.id} keyword={k.name}>
							{k.name}
						</Keyword>
					))}
				{error && <p>{error}</p>}
			</div>
		</div>
	);
};

export default Keywords;
