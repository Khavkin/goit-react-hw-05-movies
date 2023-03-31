//import Movies from 'pages/Movies';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesListItem from 'components/MoviesListItem';
import { MoviesListItemCard, MoviesListWrapper } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  //console.log('movieList', location);
  return (
    <MoviesListWrapper>
      {movies &&
        movies.map(item => (
          <MoviesListItemCard key={item.id}>
            <Link
              to={`${location.pathname === '/' ? 'movies/' : ''}${item.id}`}
              state={{ from: location }}
            >
              {/* {item.name} */}
              <MoviesListItem
                movieName={item.name}
                movieImage={item.poster_path}
              />
            </Link>
          </MoviesListItemCard>
        ))}
    </MoviesListWrapper>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
export default MoviesList;
