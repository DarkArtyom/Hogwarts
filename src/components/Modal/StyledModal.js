import styled from 'styled-components';
export const BackDrop = styled.div`
  &.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(48, 48, 48, 0.499);
    transition: opacity 300ms, visibility 300ms;
    display: flex;
    justify-content: center;
  }

  &.active {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  &.backdrop.active .modal {
    transform: rotate(-290deg);
  }
`;

export const StyledModal = styled.div`
  &.modal {
    width: 300px;
    position: absolute;
    background-color: #ffffff;
    padding: 50px 20px 40px 20px;
    transition: transform 250ms;
    top: 3%;
    border-radius: 12px;

    @media screen and (min-width: 480px) {
      width: 450px;
    }

    @media screen and (min-width: 768px) {
      width: 700px;
      transform: translate(-50%, -50%) scale(1);
      transform: translate(-50%, -50%) rotate(0);
      top: 50%;
      left: 50%;
    }
  }
`;

export const ButtonExit = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 15px;
  color: red;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
