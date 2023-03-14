import styled from 'styled-components';

export const WrapBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AwatarImg = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url("https://files.fm/thumb_show.php?i=m6a6xfvg7");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 25px;
  color: red;
  &:hover {
    color: blue;
  }
`;

export const BarText = styled.p`
  font-size: 18px;
  margin-right: 10px;
`;
