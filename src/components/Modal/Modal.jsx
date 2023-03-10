import { BackDrop, StyledModal, ButtonExit } from './StyledModal';
import { GiExitDoor } from 'react-icons/gi';
export const Modal = ({ active, setActive, children }) => {
  return (
    <BackDrop
      className={active ? 'backdrop active' : 'backdrop'}
      onClick={() => {
        setActive(false);
      }}
    >
      <StyledModal className="modal" onClick={e => e.stopPropagation()}>
        <ButtonExit
          onClick={() => {
            setActive(!active);
          }}
        >
          <GiExitDoor style={{ fontSize: '25' }} />
        </ButtonExit>
        <div>{children}</div>
      </StyledModal>
    </BackDrop>
  );
};
