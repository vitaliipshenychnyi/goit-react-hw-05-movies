// import { Route, Routes } from 'react-router-dom';

// import Layout from './Layout';
// import Home from 'pages/home';
// import Movies from 'pages/movies';
// import FilmDetails from './FilmDetails/FilmDetails';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path=":id" element={<FilmDetails />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import Home from 'pages/home';
import Movies from 'pages/movies';
import { Route, Routes } from 'react-router-dom';
import FilmDetails from './FilmDetails/FilmDetails';
import Layout from './Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
