import { Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieInfo = () => {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  return (
    <div>
      Movie Info
      <Link to="cast">Cast</Link>
      <Link to="review">Review</Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieInfo;
