import { Container, Section } from 'components/common.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { useData } from 'Contexts/DataContext';
import { useStatus } from 'Contexts/StatusContext';
import { useEffect } from 'react';
import { getTrending } from '../../api/moviedb-api';
import { HomeTitle } from './Home.styled';
import MessageBox from 'components/MessageBox/MessageBox';

const Home = () => {
  const { movies, setMovies } = useData();
  const { status, setStatus, appStatus, error, setError } = useStatus();
  // const location = useLocation();
  // console.dir(location);
  //const backLinkHref = location.state?.from ?? '/';

  // useEffect(() => {
  //   return () => {
  //     setStatus(appStatus.IDLE);
  //     console.log('Home unmount');
  //   };
  // }, []);

  useEffect(() => {
    if (movies) {
      // console.log('movies from context');
      setStatus(appStatus.RESOLVED);
      return;
    }
    // console.log('get movies from site');
    setStatus(appStatus.PENDING);
    getTrending()
      .then(results => {
        setMovies(results);
        setStatus(appStatus.RESOLVED);
      })
      .catch(error => {
        setStatus(appStatus.REJECTED);
        setMovies(null);
        setError(error);
      });
  });

  return (
    <Section>
      <Container>
        <HomeTitle>Movies Week Trending</HomeTitle>
        {status === appStatus.RESOLVED && movies?.length !== 0 && (
          <MoviesList movies={movies}></MoviesList>
        )}
        {status === appStatus.REJECTED && (
          <MessageBox>Error - {error.message}</MessageBox>
        )}

        {status === appStatus.RESOLVED && movies?.length === 0 && (
          <MessageBox>Information not found</MessageBox>
        )}
      </Container>
    </Section>
  );
};
export default Home;
