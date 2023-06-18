import { Link } from 'react-router-dom';
import { Title, Container, ListOfFilm } from './FilmList.stylaed';

export const FilmList = ({ films }) => {
  return (
    <main>
      <Container>
        <Title>Trending today</Title>
        <ListOfFilm>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ListOfFilm>
      </Container>
    </main>
  );
};
