import { useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { getFilm } from 'api/fetchFilm';
import { Link } from 'react-router-dom';

const ListOfFilm = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Movies = () => {
  const [searchFilm, setSearchFilm] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const location = useLocation();
  const filmName = searchFilm.get('filmName') ?? '';

  const fetchFilm = async () => {
    try {
      const date = await getFilm(filmName);
      const films = date.results;
      
      if (!films.length) {
        setError(`Фільми зі словом ${filmName} не знайдені`);
        setFilms([]);
        setStatus('rejected');
      } else {
        setFilms(films);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const updateSearch = event => {
    const filmNameValue = event.target.value;
    if (filmNameValue === '') {
      return setSearchFilm({});
    }
    setSearchFilm({ filmName: filmNameValue });
  };

  return (
    <div>
      <input type="text" value={filmName} onChange={updateSearch} />
      <button onClick={fetchFilm}>Search</button>

      {status === 'rejected' && <p>{error}</p>}

      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListOfFilm>
    </div>
  );
};

export default Movies;
