import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '91e9e43bc5abd62bce4a412250ca2b4a';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU',
  },
};

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  console.log(response.data.results);
  return response.data.results;
};
