import { ToastContainer } from 'react-toastify';
import {
  Container,
  StyledLink,
  Nav,
  LinkList,
  ListItem,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <LinkList>
          <ListItem>
            <StyledLink to="/all-staff">All Staff</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/slytherin">Slytherin</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/gryffindor">Gryffindor</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/hufflepuff">Hufflepuff</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/ravenclaw">Ravenclaw</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </ListItem>
        </LinkList>
      </Nav>
      <ToastContainer />
    </Container>
  );
};
