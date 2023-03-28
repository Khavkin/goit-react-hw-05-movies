import { InfoLineWrapper } from './InfoLine.styled';

const InfoLine = ({ title, description }) => {
  return (
    <InfoLineWrapper>
      <span>{title}</span>
      <span>{description}</span>
    </InfoLineWrapper>
  );
};
export default InfoLine;
