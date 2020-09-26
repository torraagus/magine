import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { colors } from "../../../browser/styles/colors";
import selectors from "./selectors";
interface Props {
	action: string;
	selector: string;
	args?: {};
}

const Pagination: FC<Props> = ({ action, args, selector }) => {
	const { page, total_pages } = selectors()[selector];
	const dispatch = useDispatch();

	return (
		<div style={{ display: "flex", margin: "1rem 0 1rem 0" }}>
			{/* {console.log({ type: action, args, page: 1 })} */}
			<button
				style={{
					padding: ".25rem 1rem .25rem 1rem",
					backgroundColor: colors.secondary,
					opacity: page == 1 ? "50%" : "100%",
					color: "white",
					fontWeight: "bold",
					borderRadius: 10,
					outline: "none",
					marginRight: ".25rem",
				}}
				disabled={page == 1}
				onClick={() => dispatch({ type: action, ...args, page: 1 })}
			>
				First
			</button>
			<button
				style={{
					padding: ".25rem 1rem .25rem 1rem",
					backgroundColor: colors.secondary,
					opacity: page == 1 ? "50%" : "100%",
					color: "white",
					fontWeight: "bold",
					borderRadius: "10px 0 0 10px",
					outline: "none",
				}}
				disabled={page == 1}
				onClick={() => dispatch({ type: action, ...args, page: page - 1 })}
			>
				Prev
			</button>
			<p style={{ background: colors.primary, color: "white", fontWeight: "bold", padding: ".25rem 2rem .25rem 2rem" }}>
				{page}/{total_pages}
			</p>
			<button
				disabled={page == total_pages}
				style={{
					padding: ".25rem 1rem .25rem 1rem",
					backgroundColor: colors.secondary,
					color: "white",
					opacity: page == total_pages ? "50%" : "100%",
					fontWeight: "bold",
					borderRadius: "0 10px 10px 0",
					outline: "none",
				}}
				onClick={() => dispatch({ type: action, ...args, page: page + 1 })}
			>
				Next
			</button>
			<button
				style={{
					padding: ".25rem 1rem .25rem 1rem",
					backgroundColor: colors.secondary,
					opacity: page == total_pages ? "50%" : "100%",
					color: "white",
					fontWeight: "bold",
					borderRadius: 10,
					outline: "none",
					marginLeft: ".25rem",
				}}
				disabled={page == total_pages}
				onClick={() => dispatch({ type: action, ...args, page: total_pages })}
			>
				Last
			</button>
		</div>
	);
};

export default Pagination;
