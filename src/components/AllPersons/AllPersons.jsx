import { Container } from '../Layout/Layout.styled';
import CircleLoader from 'react-spinners/CircleLoader';
import PropTypes from 'prop-types';
import { ItemsPersons } from './ItemsPersons/ItemsPersons';
import { Table } from './StyledAllPersons';
import { ScrollButton } from '../../Services/ButtonUp/Button.Up';
import { nanoid } from 'nanoid';
import { Modal } from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { TableHead } from './ItemsPersons/TableHead';
import { parseDataFromLS } from '../../Services/LS/parseDataFromLS';
import { userId } from '../../Services/auth/fireBase';
import { toast } from 'react-toastify';

import { useUserAuth } from '../Auth/UserAuthContext';

export const AllPersons = ({ isLoading, students }) => {
  const [heroes, setHeroes] = useState(() =>
    parseDataFromLS(`${userId}`, userId)
  );
  const [personId, setPersonId] = useState('');
  const [modalActive, setModalActive] = useState(true);
  const { isInLs } = useUserAuth();
  const { setIsInLs } = useUserAuth();

  useEffect(() => {
    localStorage.setItem(`${userId}`, JSON.stringify(heroes));
  }, [heroes]);

  const addRemovePerson = heroToCheck => {
    const heroCheck = heroes.find(({ hero }) => hero.id === heroToCheck.id);
    if (heroCheck) {
      setHeroes(p => p.filter(({ hero }) => hero.id !== heroToCheck.id));
      setIsInLs(false);
      toast.error('Person has deleted from Favorites');
    } else {
      const newHero = { id: userId, hero: heroToCheck };
      setHeroes(p => [...p, newHero]);
      setIsInLs(true);
      toast.success('Person has added to Favorites');
    }
  };

  const handleModal = idPer => {
    setPersonId(idPer);
    setModalActive(!true);
    const heroCheck = heroes.find(({ hero }) => hero.id === idPer);
    heroCheck ? setIsInLs(true) : setIsInLs(false);
  };

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
        <Table>
          <TableHead />
          <tbody>
            {students.map(student => (
              <ItemsPersons
                openModal={handleModal}
                key={nanoid(11)}
                studentData={student}
              />
            ))}
          </tbody>
        </Table>
      )}
      <ScrollButton />
      <Modal active={modalActive} setActive={setModalActive}>
        {personId && (
          <PersonDetails
            chosenId={personId}
            allStaff={students}
            isInLS={isInLs}
            addRemovePerson={addRemovePerson}
          />
        )}
      </Modal>
    </Container>
  );
};

AllPersons.propTypes = {
  isLoading: PropTypes.bool,
  students: PropTypes.array,
};
