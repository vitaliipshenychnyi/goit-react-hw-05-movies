import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'api/fetchFilm';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(id);
        const casts = data.cast;
        setCasts(casts);
      } catch (error) {}
    };

    fetchCast();
  }, [id]);

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img src="" alt={cast.name} />
          <p>Name: {cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
