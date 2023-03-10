import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Table = styled.table`
  border-collapse: collapse;
`;

export const Th = styled.th`
  color: #ffebcd;
  background: ${({ theme }) => theme.tableHeadColor};
  width: 150px;
  height: 40px;
  text-align: center;
  border: 2px solid #846868;
  //   cursor: pointer;
`;

export const Td = styled.td`
  width: 150px;
  height: 40px;
  text-align: center;
  border: 2px solid #846868;
  background: ${({ theme }) => theme.tableColor};
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
