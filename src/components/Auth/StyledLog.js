import styled from 'styled-components';

export const WrapForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;

  @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-top: 10px;
`;
