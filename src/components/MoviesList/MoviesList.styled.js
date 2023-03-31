import styled from '@emotion/styled';

export const MoviesListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MoviesListItemCard = styled.li`
  flex-basis: calc((100% - 4 * 10px) / 5);
  background-color: #607d8b;
`;

export const Title = styled.p`
  text-decoration: none;
  color: #fff;
  padding: 5px;
  text-align: center;
  &:hover {
    color: yellow;
  }
`;
