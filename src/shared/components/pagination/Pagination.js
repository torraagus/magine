import React from "react";
import { Wrapper, Next, Prev } from "./pagination.styles";

const Pagination = ({ page, totalPages, onPageChange, upper }) => {
	return totalPages > 1 ? (
		<Wrapper upper={upper}>
			{page > 1 && <Prev onClick={() => onPageChange(page - 1)}>Previous</Prev>}
			{page < totalPages && (
				<Next onClick={() => onPageChange(page + 1)}>Next</Next>
			)}
		</Wrapper>
	) : null;
};

export default Pagination;
