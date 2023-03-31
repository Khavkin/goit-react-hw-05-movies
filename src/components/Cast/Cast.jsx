import { getMovieCredits } from 'api/moviedb-api';
import CastCard from 'components/CastCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import MessageBox from 'components/MessageBox/MessageBox';

const Cast = () => {
  const { moveID } = useParams();
  const [casts, setCasts] = useState(null);

  //console.dir(casts);

  useEffect(() => {
    getMovieCredits(moveID).then(response => {
      const cast = response.map(item => {
        return {
          profile_path: item.profile_path,
          name: item.name ?? '',
          character: item.character ?? '',
          id: item.id,
        };
      });
      setCasts(cast);
    });
  }, [moveID]);
  if (casts?.length !== 0)
    return (
      <CastList>
        {casts && casts.map(cast => <CastCard key={cast.id} cast={cast} />)}
      </CastList>
    );
  if (casts?.length === 0)
    return <MessageBox>We don't have any casts for this movie</MessageBox>;
};

export default Cast;
