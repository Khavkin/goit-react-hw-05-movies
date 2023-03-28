import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from '../../api/moviedb-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(results => setMovies(results));
  }, []);
  // const movies = (async () => {
  //   const result = await getTrending();
  //   return result;
  // })();

  // console.dir(movies);
  return (
    <main>
      <h1>It's Home</h1>
      <MoviesList movies={movies}></MoviesList>
    </main>
  );
};
export default Home;
