import { getMovieReview } from 'api/moviedb-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [reviews, setReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!reviews) {
      getMovieReview(id).then(response => {
        setReview(response);
        console.log('review');
        console.dir(response);
      });
    }
  }, [id, reviews]);

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
};

export default Review;
