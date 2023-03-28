const { getImagePath } = require('api/moviedb-api');

const CastCard = ({ cast }) => {
  return (
    <li>
      <img src={getImagePath(cast.profile_path)}></img>
    </li>
  );
};
