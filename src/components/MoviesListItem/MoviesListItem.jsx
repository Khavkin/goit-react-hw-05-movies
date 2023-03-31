import { Title } from 'components/MoviesList/MoviesList.styled';
import { Image, Thumb } from './MoviesListItem.styled';
import PropTypes from 'prop-types';

const MoviesListItem = ({ movieName, movieImage }) => {
  return (
    <>
      <Thumb>
        <Image src={movieImage} alt={`Image for ${movieName}`}></Image>
      </Thumb>

      <Title>{movieName}</Title>
    </>
  );
};

MoviesListItem.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieImage: PropTypes.string.isRequired,
};
export default MoviesListItem;
