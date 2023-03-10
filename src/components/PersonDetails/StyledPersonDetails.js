import styled from 'styled-components';

export const WrapDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 130px;
  }
`;

export const BoxListDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.div`
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  width: 200px;
  margin-bottom: 10px;
  @media screen and (min-width: 480px) {
    width: 300px;
    margin-right: 0;
  }
`;

export const TitleDetails = styled.h2`
  font-size: 20px;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 5px;
  color: black;
  @media screen and (min-width: 480px) {
    font-size: 25px;
    line-height: 1.2;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const ListDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  list-style: none;
`;

export const ItemDetails = styled.li`
  color: black;
  font-size: 12px;
  line-height: 1.1;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const ButtonAddRemove = styled.button`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  position: relative;
  padding: 5px 10px;
  border: 1px solid;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: black;

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

  &:hover::before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
`;
