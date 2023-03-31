import {
  CastCardWrapper,
  CastCharacter,
  CastDescription,
  CastImage,
  CastName,
  CastThumb,
} from './CastCard.styled';
import PropTypes from 'prop-types';

const CastCard = ({ cast }) => {
  return (
    <CastCardWrapper>
      <CastThumb>
        <CastImage src={cast.profile_path} alt="" />
      </CastThumb>
      <CastDescription>
        <CastName>{cast.name}</CastName>
        <CastCharacter>Character: {cast.character}</CastCharacter>
      </CastDescription>
    </CastCardWrapper>
  );
};

CastCard.propTypes = {
  cast: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
};

export default CastCard;
