import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDetailMovie } from 'api/fetchFilm';

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
    <>
      <img src={film.poster_path} alt="" />
      <div>
        <h1>
          {title} ({date})
        </h1>
        <p>User Score: {(vote_average*10).toFixed(0)} %</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(el => el.name).join(' ')}</p>
      </div>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default FilmDetails;
