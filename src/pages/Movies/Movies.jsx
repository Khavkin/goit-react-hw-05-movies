import { searchMovie } from 'api/moviedb-api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStr = searchParams.get('query') ?? '';
  const [query, setQuery] = useState(queryStr);

  console.log(queryStr);

  const onSearch = toSearch => {
    setQuery(toSearch);
  };

  const onQueryChange = value => {
    const newQuery = value !== '' ? { query: value } : {};
    setSearchParams(newQuery);
  };

  useEffect(() => {
    if (query !== '') {
      searchMovie(query).then(response => {
        //onQueryChange()
        setMovies(response);
      });
    }
  }, [query]);

  return (
    <div>
      It's Movies
      <SearchForm
        query={queryStr}
        onSubmit={onSearch}
        onChange={onQueryChange}
      />
      <MoviesList movies={movies}></MoviesList>
    </div>
  );
};

export default Movies;
