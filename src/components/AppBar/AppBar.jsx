import { Container } from "../Layout/Layout.styled";
import { StyledButton, AwatarImg } from "./AppBarStyled";
export const AppBar = ({ user, logOut }) => {
  return (
    <Container>
      {user ? (
        <div>
          <AwatarImg></AwatarImg>
          <p>{`Signed In as ${user.email}`}</p>
          <StyledButton onClick={logOut}>Leave</StyledButton>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </Container>
  );
};
