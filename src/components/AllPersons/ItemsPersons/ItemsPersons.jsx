import PropTypes from 'prop-types';
import { Td, LinkStyled } from '../StyledAllPersons';

export const ItemsPersons = ({ studentData, openModal }) => {
  const { id, name, dateOfBirth, house, wizard, ancestry, hogwartsStaff } =
    studentData;

  return (
    <tr onClick={() => openModal(id)} className="student-table-name" id={id}>
      <Td>
        <LinkStyled>{name}</LinkStyled>
      </Td>
      <Td>
        {dateOfBirth ? (
          <LinkStyled>{dateOfBirth}</LinkStyled>
        ) : (
          <LinkStyled>Top Secret</LinkStyled>
        )}
      </Td>
      <Td>
        {house ? (
          <LinkStyled>{house}</LinkStyled>
        ) : (
          <LinkStyled>No info</LinkStyled>
        )}
      </Td>
      <Td>
        {wizard ? (
          <LinkStyled>Wizard</LinkStyled>
        ) : (
          <LinkStyled>Not a wizard</LinkStyled>
        )}
      </Td>
      <Td>
        {ancestry ? (
          <LinkStyled>{ancestry}</LinkStyled>
        ) : (
          <LinkStyled>No info</LinkStyled>
        )}
      </Td>
      <Td>
        {hogwartsStaff ? (
          <LinkStyled>Stuff</LinkStyled>
        ) : (
          <LinkStyled>Student</LinkStyled>
        )}
      </Td>
    </tr>
  );
};

ItemsPersons.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateOfBirth: PropTypes.string,
  house: PropTypes.string,
  wizard: PropTypes.bool,
  ancestry: PropTypes.string,
  hogwartsStaff: PropTypes.bool,
};
