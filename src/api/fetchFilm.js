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

// функція отримання переліку топових фільмів на день
export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

// функція отримання детальної інформації по обраному фільму
export const getDetailMovie = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}?language=en-US`,
    options
  );
  return response.data;
};

// функція отримання детальної інформації про акторський склад для сторінки кінофільму
export const getCast = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?language=en-US`,
    options
  );
  return response.data;
};

// функція запиту оглядів для сторінки кінофільму
export const getReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?language=en-US`,
    options
  );
  return response.data;
};

// функція пошуку фільма за назвою
export const getFilm = async filmName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${filmName}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};
