import { getImagePath } from 'api/moviedb-api';
import InfoLine from 'components/InfoLine';
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  MovieCardWrapper,
} from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movieInfo }) => {
  const createGenre = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

  const getReleaseYear = releaseDate => {
    return releaseDate !== '' ? `(${new Date(releaseDate).getFullYear()})` : '';
  };
  return (
    <MovieCardWrapper>
      <ImageWrapper>
        <Image
          src={
            movieInfo.poster_path
              ? getImagePath(movieInfo.poster_path)
              : 'https://via.placeholder.com/300x400'
          }
        ></Image>
      </ImageWrapper>
      <InfoWrapper>
        <h1>
          {movieInfo.title} {getReleaseYear(movieInfo.release_date)}
        </h1>
        <p>{movieInfo.tagline}</p>
        <InfoLine title="Vote:" description={movieInfo.vote_average} />
        <InfoLine title="Popularity:" description={movieInfo.popularity} />
        <InfoLine title="Overview:" description={movieInfo.overview} />
        <InfoLine title="Genre:" description={createGenre(movieInfo.genres)} />
      </InfoWrapper>
    </MovieCardWrapper>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    id: PropTypes.number.isRequired,
    overview: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard;
