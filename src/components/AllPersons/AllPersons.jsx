import { Container } from '../Layout/Layout.styled';
import CircleLoader from 'react-spinners/CircleLoader';
import PropTypes from 'prop-types';
import { ItemsPersons } from './ItemsPersons/ItemsPersons';
import { Table } from './StyledAllPersons';
import { ScrollButton } from '../../Services/ButtonUp/Button.Up';
import { nanoid } from 'nanoid';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { TableHead } from './ItemsPersons/TableHead';

export const AllPersons = ({ isLoading, students }) => {
  const [modalActive, setModalActive] = useState(true);
  const [personId, setPersonId] = useState('');

  const handleClick = id => {
    setPersonId(id);
    setModalActive(!true);
  };

  console.log(personId);
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isLoading ? (
        <CircleLoader color="#36d7b7" />
      ) : (
        <Table className="table_sort" id="table">
          <TableHead />
          <tbody>
            {students.map(student => (
              <ItemsPersons
                openModal={handleClick}
                key={nanoid(11)}
                studentData={student}
              />
            ))}
          </tbody>
        </Table>
      )}
      <ScrollButton />
      <Modal active={modalActive} setActive={setModalActive}>
        {personId && <PersonDetails chosen={personId} allStaff={students} />}
      </Modal>
    </Container>
  );
};

AllPersons.propTypes = {
  isLoading: PropTypes.bool,
  students: PropTypes.array,
};
