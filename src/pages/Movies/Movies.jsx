import { searchMovie } from 'api/moviedb-api';
import { Container, Section } from 'components/common.styled';
import MessageBox from 'components/MessageBox/MessageBox';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm';
import { useData } from 'Contexts/DataContext';
import { useStatus } from 'Contexts/StatusContext';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStr = searchParams.get('query') ?? '';

  const { searchResult, setSearchResult, query, setQuery } = useData();
  const { status, setStatus, appStatus, error, setError } = useStatus();

  const onSearch = toSearch => {
    const newQuery = toSearch !== '' ? { query: toSearch } : {};
    setSearchParams(newQuery);
  };

  useEffect(() => {
    if (queryStr !== '' && queryStr !== query) {
      setStatus(appStatus.PENDING);
      searchMovie(queryStr)
        .then(response => {
          setSearchResult(response);
          setQuery(queryStr);
          setStatus(appStatus.RESOLVED);
          return;
        })
        .catch(error => {
          setStatus(appStatus.REJECTED);
          setSearchResult(null);
          setError(error);
        });
    }
    if (queryStr !== '' && queryStr === query) {
      setStatus(appStatus.RESOLVED);
      return;
    }
    if (queryStr === '') {
      setStatus(appStatus.IDLE);
      setQuery('');
      setSearchResult(null);
      return;
    }
  }, [
    query,
    setSearchResult,
    appStatus.PENDING,
    appStatus.RESOLVED,
    setStatus,
    queryStr,
    setQuery,
    appStatus.IDLE,
    appStatus.REJECTED,
    setError,
  ]);

  return (
    <Section>
      <Container>
        <SearchForm
          query={queryStr}
          onSubmit={onSearch}
          // onChange={onQueryChange}
        />
        {status === appStatus.RESOLVED && searchResult && (
          <MoviesList movies={searchResult} />
        )}
        {status === appStatus.REJECTED && (
          <MessageBox>Error - {error.message}</MessageBox>
        )}

        {status === appStatus.RESOLVED && searchResult?.length === 0 && (
          <MessageBox>Movies whith name "{query}" not found </MessageBox>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
