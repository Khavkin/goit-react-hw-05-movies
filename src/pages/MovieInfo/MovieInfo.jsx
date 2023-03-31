import { getMovieInfo } from 'api/moviedb-api';
import { Container, Section } from 'components/common.styled';
import MovieCard from 'components/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalInfoContainer,
  AdditionalInfoLink,
  BackLink,
} from './MovieInfo.styled';

const MovieInfo = () => {
  const { moveID } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieInfo(moveID).then(responce => {
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
  }, [moveID]);

  return (
    <Section>
      <Container>
        {/* Movie Info */}
        <BackLink to={backLinkHref.current} state={{ from: location }}>
          Go back
        </BackLink>
        {movieInfo && movieInfo.id && (
          <MovieCard movieInfo={movieInfo}></MovieCard>
        )}
        <AdditionalInfoContainer>
          <h3>Additional information</h3>
          <AdditionalInfo>
            <li>
              <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
            </li>
            <li>
              <AdditionalInfoLink to="review">Review</AdditionalInfoLink>
            </li>
          </AdditionalInfo>
        </AdditionalInfoContainer>

        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};

export default MovieInfo;
