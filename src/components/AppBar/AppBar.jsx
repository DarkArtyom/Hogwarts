import { Container } from '../Layout/Layout.styled';
import { AwatarImg, Button, WrapBar, BarText, StyledDiv } from './AppBarStyled';

import { ToggleSwitch } from '../../Services/Switch/ToggleSwitch';
import PropTypes from 'prop-types';
import { ImExit } from 'react-icons/im';

export const AppBar = ({ user, logOut, theme }) => {
  return (
    <Container>
      {user ? (
        <WrapBar>
          <ToggleSwitch theme={theme} />
          <WrapBar>
            <BarText>{`Signed In as ${user.email}`}</BarText>
            <StyledDiv>
              <AwatarImg></AwatarImg>
            </StyledDiv>
          </WrapBar>
          <Button onClick={logOut}>
            <ImExit />
          </Button>
        </WrapBar>
      ) : (
        <p>Signed Out</p>
      )}
    </Container>
  );
};

AppBar.propType = {
  user: PropTypes.object,
  logOut: PropTypes.func,
  theme: PropTypes.func,
};
