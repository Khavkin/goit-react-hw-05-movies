import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const AdditionalInfo = styled.ul`
  display: flex;
  gap: 10px;
  height: 30px;
  font-weight: 700;
`;

export const AdditionalInfoLink = styled(NavLink)`
  color: #fff;
  &.active,
  :hover {
    color: yellow;
  }
`;
export const AdditionalInfoContainer = styled.div`
  border-bottom: 1px solid #757575;
  margin-bottom: 20px;
  padding: 20px;
`;
export const BackLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`;
