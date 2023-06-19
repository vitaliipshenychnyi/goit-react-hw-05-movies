// import { Route, Routes } from 'react-router-dom';
import { FilmList } from './FilmList/FilmList';
import { getMovies } from 'api/fetchFilm';
import { useEffect, useState } from 'react';
import { Header } from './header/header';

export const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getMovies();
        const films = data.results;
        setFilms(films);
        console.log(films);
      } catch (error) {}
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <Header />
      <FilmList films={films} />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
};
