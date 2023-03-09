import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 50px;
  padding: 12px;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }

  @media screen and (min-width: 480px) {
    max-width: 150px;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  border: none;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }

  @media screen and (min-width: 480px) {
    max-width: 200px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;
