import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: -30px;
  }
`;
export const CardItems = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 30px) / 2);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 30px) / 3);
  }
`;

export const CardImg = styled.img`
  background-color: #ffffff;
  object-fit: cover;
  display: block;
  width: 280px;
  height: 398px;
`;

export const CardWrap = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  padding: 20px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const CardTitle = styled.h2`
  color: black;
`;

export const CardText = styled.p`
  color: black;
  margin-bottom: 5px;
`;
