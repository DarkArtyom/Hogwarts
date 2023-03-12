import { BackDrop, StyledModal, ButtonExit } from './StyledModal';
import { GiExitDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
export const Modal = ({ active, setActive, children }) => {
  useEffect(() => {
    !active
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);

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

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.object,
};
