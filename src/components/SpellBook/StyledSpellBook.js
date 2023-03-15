import styled, { keyframes } from 'styled-components';
const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

export const StyledSpellButton = styled.button`
  color: #ffffff;
  border: none;
  cursor: pointer;
  animation: ${bounce} 0.5s infinite alternate;
  transition: 500ms;

  background-color: transparent;

  &:hover {
    color: #0077ff;
  }
`;

export const StyledSpellList = styled.ul`
  border-top: 3px solid black;
  overflow: auto;
  height: 50vh;
  width: 100%;
`;

export const StyledSpellItem = styled.li`
  display: flex;
  padding: 10px 20px;
  justify-content: space-around;
`;

export const StyledSpellText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  cursor: pointer;

  &:hover {
    color: #0077ff;
  }
`;

export const SpellText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const WrapText = styled.div`
  color: black;
  width: 100%;
`;
