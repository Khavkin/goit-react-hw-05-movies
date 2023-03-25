import Movies from 'pages/Movies';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`} state={{ from: location }}>
              item.name
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
