import { useParams } from 'react-router-dom';
import { getDetailMovie } from 'api/fetchFilm';

export const FilmDetails = () => {
  const { movie_id } = useParams();

  const film = getDetailMovie(697843);
  console.log(film);

  return (
    <main>
      <img src="" alt="" />
      <div>
        <h1>title</h1>
        <p>use score</p>
        <h2>Over</h2>
        <p>text</p>
        <h3>Genres</h3>
        <p>text</p>
      </div>
      <h4>Additional information</h4>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </main>
  );
};
