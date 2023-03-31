import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  gap: 10px;
  align-content: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #536dfe;
  border-radius: 5px;
`;

export const Input = styled.input`
  flex-grow: 1;
  border-radius: 2px;
  outline: none;
  border: none;
  padding: 5px;
`;

export const Button = styled.button`
  width: 80px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #bdbdbd;
  color: #fff;
  font-weight: 700;
  &:hover {
    background-color: #757575;
    color: yellow;
  }
`;
