import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/interface";

interface Props {
	action: string;
	category: string;
}

const Pagination: FC<Props> = ({ action, category }) => {
	const { page } = useSelector((state: RootState) => state.movieReducer[category]);
	const dispatch = useDispatch();

	return (
		<div style={{ display: "flex" }}>
			<button disabled={page == 1} onClick={() => dispatch({ type: action, page: page - 1 })}>
				Prev
			</button>
			<p>Page {page}</p>
			<button onClick={() => dispatch({ type: action, page: page + 1 })}>Next</button>
		</div>
	);
};

export default Pagination;
