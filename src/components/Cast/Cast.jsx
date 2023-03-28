import { getMovieCredits } from 'api/moviedb-api';
import CastCard from 'components/CastCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);

  console.dir(casts);

  useEffect(() => {
    getMovieCredits(id).then(response => {
      console.dir(response);
      setCasts(response);
    });
  }, [id]);

  return (
    <ul>
      {casts && casts.map(cast => <CastCard key={cast.id} cast={cast} />)}
    </ul>
  );
};

export default Cast;
