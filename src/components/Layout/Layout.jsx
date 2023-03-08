// import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import {
  Container,
  StyledLink,
  Nav,
  LinkList,
  ListItem,
} from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <LinkList>
            <ListItem>
              <StyledLink to="/all-students">All Students</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="slytherin">Slytherin</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="gryffindor">Gryffindor</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="hufflepuff">Hufflepuff</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="ravenclaw">Ravenclaw</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink>Favorites</StyledLink>
            </ListItem>
          </LinkList>
        </Nav>
      </header>
      <ToastContainer />
      {/* <Outlet /> */}
    </Container>
  );
};
