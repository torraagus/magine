import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Wrapper, FirstPageBtn, PrevPageBtn, NextPageBtn, LastPageBtn, Page } from "./pagination.styles";
import selectors from "./selectors";
import { FaStepForward, FaStepBackward, FaCaretLeft, FaCaretRight } from "react-icons/fa";
interface Props {
	action: string;
	selector: string;
	args?: {};
}

const Pagination: FC<Props> = ({ action, args, selector }) => {
	const { page, total_pages } = selectors()[selector];
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<FirstPageBtn page={page} disabled={page == 1} onClick={() => dispatch({ type: action, ...args, page: 1 })}>
				<FaStepBackward />
			</FirstPageBtn>
			<PrevPageBtn page={page} disabled={page == 1} onClick={() => dispatch({ type: action, ...args, page: page - 1 })}>
				<FaCaretLeft size={20} />
			</PrevPageBtn>
			<Page>
				{page}/{total_pages}
			</Page>
			<NextPageBtn
				page={page}
				totalPages={total_pages}
				disabled={page == total_pages}
				onClick={() => dispatch({ type: action, ...args, page: page + 1 })}
			>
				<FaCaretRight size={20} />
			</NextPageBtn>
			<LastPageBtn
				page={page}
				totalPages={total_pages}
				disabled={page == total_pages}
				onClick={() => dispatch({ type: action, ...args, page: total_pages })}
			>
				<FaStepForward />
			</LastPageBtn>
		</Wrapper>
	);
};

export default Pagination;
