import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'api/fetchFilm';
import { CastList } from './Cast.styled';

// зображення користувача за замовчуванням
import defaultPicture from './avatar-picture.png';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(id);
        const casts = data.cast;

        if (!casts.length) {
          setError(`Перелік акторів відсутній :(`);
          setStatus('rejected');
        }

        setCasts(casts);
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchCast();
  }, [id]);

  return (
    <CastList>
      {status === 'rejected' && <p>{error}</p>}

      {casts.map(cast => {
        if (cast.profile_path) {
          return (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
              />
              <p>Name: {cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        } else {
          return (
            <li key={cast.id}>
              <img src={defaultPicture} alt={cast.name} height={225} />
              <p>Name: {cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        }
      })}
    </CastList>
  );
};

export default Cast;
