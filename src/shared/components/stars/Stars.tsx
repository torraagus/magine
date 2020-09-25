import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { colors } from "../../../browser/styles/colors";

interface IStarIcon {
	painted: boolean;
	disabled: boolean;
}

const StarIcon = styled(BsStarFill)<IStarIcon>`
	color: ${({ painted }) => (painted ? colors.primary : "#ccc")};
	margin: 0 0.25rem 0 0.25rem;

	:nth-child(1) {
		margin: 0;
	}

	${({ disabled }) =>
		!disabled &&
		`:hover {
		cursor: pointer;
		color: ${colors.primary};
	}`}
`;

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
		<div
			style={{ paddingTop: "1rem", width: "fit-content" }}
			onMouseLeave={() => (!stars ? setSelected(-1) : setSelected(stars))}
		>
			{container.map((star) => star)}
		</div>
	);
};

export default Stars;
