import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
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

// зображення користувача за замовчуванням
import defaultPicture from '../Cast/avatar-picture.png';

const FilmDetails = () => {
  const { id } = useParams();
  const location = useLocation(); //для отримання шляху з якого прийшли
  const backLinkRef = useRef(location.state?.from ?? '/'); //для зберігання шляху з якого прийшли
  const [film, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const [urlImg, setUrlImg] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const film = await getDetailMovie(id);
        const genres = film.genres; // отримання жанру
        const date = film.release_date.split('-')[0]; // отримання дати виходу
        const url = film.poster_path
          ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
          : defaultPicture;

        if (film === []) {
          setError(`Інформація по фільму відсутня`);
          setStatus('rejected');
        } else {
          setGenres(genres);
          setFilms(film);
          setDate(date);
          setUrlImg(url);
          setStatus('resolved');
        }
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchFilms();
  }, [id]);

  const { title, overview, vote_average } = film;

  return (
    <Container>
      <NavLink to={backLinkRef.current}>Back</NavLink>

      {status === 'rejected' && <p>{error}</p>}

      {status === 'resolved' && (
        <WrapperMain>
          <img src={urlImg} alt={title} />
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
      )}

      {status === 'resolved' && (
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
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default FilmDetails;
