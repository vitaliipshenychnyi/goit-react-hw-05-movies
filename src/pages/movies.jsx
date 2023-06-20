import { useSearchParams } from 'react-router-dom';
import { getFilm } from 'api/fetchFilm';

const Movies = () => {
  const [searchFilm, setSearchFilm] = useSearchParams();
  const filmName = searchFilm.get('filmName') ?? '';
  console.log(filmName);

  const fetchFilm = async () => {
    try {
      const film = await getFilm(filmName);
      console.log(film);
    } catch (error) {}
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
    </div>
  );
};

export default Movies;
