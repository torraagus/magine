import React, { FC, useEffect, useState } from "react";
import { Wrapper, StarIcon } from "./stars.styles";

type Props = {
	onVote?: (vote: number) => void;
	stars: number;
};

const Stars: FC<Props> = ({ onVote, stars }) => {
	const [selected, setSelected] = useState<number>(stars);

	const handleVote = (stars: number) => {
		onVote(stars * 2);
		setSelected(stars);
	};

	const container = [];
	for (let i = 0; i < 5; i++) {
		container.push(
			<StarIcon
				disabled={onVote ? false : true}
				key={i}
				painted={i < selected ? true : false}
				size={24}
				onClick={() => (onVote ? handleVote(i + 1) : null)}
				onMouseEnter={() => (onVote ? setSelected(i + 1) : null)}
			/>
		);
	}

	useEffect(() => {
		setSelected(stars);
	}, [stars]);

	return (
		<Wrapper onMouseLeave={() => (!stars ? setSelected(-1) : setSelected(stars))}>
			{container.map((star) => star)}
		</Wrapper>
	);
};

export default Stars;
