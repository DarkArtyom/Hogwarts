import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px 0;
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Nav = styled.nav`
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: 1200px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  display: inline-block;
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  position: relative;
  padding: 5px 10px;
  border: 1px solid;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.02em;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    .sliding-button:hover {
      background: rgba(255, 255, 255, 0);
    }
  }
  &:hover::before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }

  @media screen and (min-width: 1200px) {
    display: inline-block;
    padding: 15px 20px;
    letter-spacing: 2px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
      justify-content: center;
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1200px) {
      margin-bottom: 50px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 15px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
