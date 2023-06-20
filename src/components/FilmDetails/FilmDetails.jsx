import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDetailMovie } from 'api/fetchFilm';
import {
  Additional,
  Container,
  DataText,
  Genres,
  ListOfAdditional,
  Overview,
  Title,
  WrapperAdditional,
  WrapperMain,
} from './FilmDetails.styled';

const FilmDetails = () => {
  const { id } = useParams();

  const [film, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const film = await getDetailMovie(id);
        const genres = film.genres; // отримання жанру
        const date = film.release_date.split('-')[0]; // отримання дати виходу
        console.log(film);

        setGenres(genres);
        setFilms(film);
        setDate(date);
      } catch (error) {}
    };

    fetchFilms();
  }, [id]);

  const { title, overview, vote_average } = film;

  return (
    <Container>
      <WrapperMain>
        <img src={film.poster_path} alt={title} />
        <div>
          <Title>
            {title} <span> ({date})</span>
          </Title>
          <DataText>User Score: {(vote_average * 10).toFixed(0)} %</DataText>
          <Overview>Overview</Overview>
          <DataText>{overview}</DataText>
          <Genres>Genres</Genres>
          <DataText>{genres.map(el => el.name).join(' / ')}</DataText>
        </div>
      </WrapperMain>
      <WrapperAdditional>
        <Additional>Additional information</Additional>
        <ListOfAdditional>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ListOfAdditional>
      </WrapperAdditional>
      <Outlet />
    </Container>
  );
};

export default FilmDetails;
