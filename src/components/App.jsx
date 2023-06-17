import { getMovies } from 'api/fetchFilm';

export const App = () => {
  const data = getMovies();
  console.log(data.results);
  return <div></div>;
};
