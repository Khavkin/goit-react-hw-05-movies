import styled from '@emotion/styled';

export const CastCardWrapper = styled.li`
  flex-basis: Calc((100% - 5 * 10px) / 6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const CastThumb = styled.div`
  height: 200px;
  width: 100%;
`;

export const CastImage = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const CastName = styled.p`
  font-weight: 700;
  padding: 5px;
  margin: 0;
`;
export const CastCharacter = styled.p`
  padding: 5px;
  margin: 0;
  color: #bdbdbd;
`;

export const CastDescription = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
`;
