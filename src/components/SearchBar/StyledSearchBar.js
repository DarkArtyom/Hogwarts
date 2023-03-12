import styled from 'styled-components';

export const SearchInput = styled.input`
  display: inline-block;
  border-radius: 50px;
  padding: 5px 5px 5px 10px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
