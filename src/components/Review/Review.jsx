import { getMovieReview } from 'api/moviedb-api';
import MessageBox from 'components/MessageBox/MessageBox';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [reviews, setReview] = useState(null);
  const { moveID } = useParams();

  useEffect(() => {
    if (!reviews) {
      getMovieReview(moveID).then(response => {
        setReview(response);
      });
    }
  }, [moveID, reviews]);

  if (reviews?.length !== 0)
    return (
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h2>Author:{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    );
  if (reviews?.length === 0)
    return <MessageBox>We don't have any reviews for this movie</MessageBox>;
};

export default Review;
