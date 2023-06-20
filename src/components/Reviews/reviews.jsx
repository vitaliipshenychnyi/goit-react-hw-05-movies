import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'api/fetchFilm';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        const reviews = data.results;
        setReviews(reviews);
      } catch (error) {}
    };

    fetchReviews();
  }, [id]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
