import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'api/fetchFilm';
import { CastList } from './Cast.styled';

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
    <CastList>
      {casts.map(cast => {
        if (cast.profile_path) {
          return (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} //!!!!!!!!!!!!!!!!!!!!!!
                alt={cast.name}
              />
              <p>Name: {cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        } else {
          return (
            <li key={cast.id}>
              <img
                src="" //!!!!!!!!!!!!!!!!!!!!!!
                alt={cast.name}
              />
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
