import { InfoLineWrapper } from './InfoLine.styled';
import PropTypes from 'prop-types';

const InfoLine = ({ title, description }) => {
  return (
    <InfoLineWrapper>
      <span>{title}</span>
      <span>{description}</span>
    </InfoLineWrapper>
  );
};

InfoLine.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
export default InfoLine;
