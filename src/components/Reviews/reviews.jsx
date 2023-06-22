import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'api/fetchFilm';
import { ReviewsList } from './reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        const reviews = data.results;
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <ReviewsList>
      {error && <p>Вибачте, але щось пішло не так :(</p>}

      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewsList>
  );
};

export default Reviews;
