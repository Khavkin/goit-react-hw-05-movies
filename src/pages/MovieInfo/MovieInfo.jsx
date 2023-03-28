import { getMovieInfo } from 'api/moviedb-api';
import MovieCard from 'components/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieInfo = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const isMount = useRef(true);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  console.log('movieInfo', movieInfo);

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
      getMovieInfo(id).then(responce => {
        //console.dir(responce);
        const {
          genres,
          id,
          overview,
          popularity,
          poster_path,
          release_date,
          tagline,
          title,
          vote_average,
        } = responce;
        setMovieInfo({
          genres,
          id,
          overview,
          popularity,
          poster_path,
          release_date,
          tagline,
          title,
          vote_average,
        });
      });
    }
  }, [id]);

  return (
    <>
      {/* Movie Info */}
      <Link to={backLinkHref}>Go back</Link>
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
      <Link to="cast">Cast</Link>
      <Link to="review">Review</Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
