//import Movies from 'pages/Movies';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <Link
              to={`${location.pathname === '/' ? 'movies/' : ''}${item.id}`}
              state={{ from: location }}
            >
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default MoviesList;
