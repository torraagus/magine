import React, { useState } from "react";
import { useFetch } from "../../../browser/hooks/useFetch";
import Pagination from "../pagination/Pagination";
import { fetchMovieReview } from "../../api";
import { withRouter } from "react-router-dom";
import { Title, ReviewsWrapper, Review, ReviewContent, Author, AuthorName } from "./reviews.styles";

const Reviews = ({ match }) => {
	const [count, setCount] = useState(1);
	const { results: reviews, loading, page, totalPages } = useFetch(
		`/reviews/${count ? count : 1}`,
		fetchMovieReview,
		true,
		{
			movieId: match.params.id,
			page: count ? count : 1,
		}
	);

	const handleOnPageChange = (page) => {
		setCount(page);
	};

	if (loading) {
		return <div>Loading reviews...</div>;
	}

	return reviews?.length > 0 ? (
		<>
			<Title>Reviews</Title>
			<Pagination upper page={page} totalPages={totalPages} onPageChange={handleOnPageChange} />
			<ReviewsWrapper>
				{reviews.map((review) => (
					<Review key={review.id}>
						<ReviewContent>{review.content}</ReviewContent>
						<Author>
							from <AuthorName>{review.author}</AuthorName>
						</Author>
					</Review>
				))}
			</ReviewsWrapper>
			<Pagination page={page} totalPages={totalPages} onPageChange={handleOnPageChange} />
		</>
	) : null;
};

export default withRouter(Reviews);
