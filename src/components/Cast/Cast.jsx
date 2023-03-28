import { getMovieCredits } from 'api/moviedb-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  console.dir(cast);

  useEffect(() => {
    getMovieCredits(id).then(response => {
      console.dir(response);
      setCast(response);
    });
  }, [id]);

  return <div>It's cast</div>;
};

export default Cast;
