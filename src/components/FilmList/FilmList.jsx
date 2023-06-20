import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'api/fetchFilm';
import { Title, Container, ListOfFilm } from './FilmList.stylaed';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getMovies();
        const films = data.results;
        setFilms(films);
        // console.log(films);
      } catch (error) {}
    };

    fetchFilms();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ListOfFilm>
    </Container>
  );
};

export default FilmList;
