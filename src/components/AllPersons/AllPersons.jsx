import { Container } from '../Layout/Layout.styled';
import CircleLoader from 'react-spinners/CircleLoader';
import PropTypes from 'prop-types';
import { ItemsPersons } from './ItemsPersons/ItemsPersons';
import { Table, TextIfNoData } from './StyledAllPersons';
import { ScrollButton } from '../../Services/ButtonUp/Button.Up';
import { nanoid } from 'nanoid';
import { Modal } from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { TableHead } from './ItemsPersons/TableHead';
import { parseDataFromLS } from '../../Services/LS/parseDataFromLS';
import { userId } from '../../Services/auth/fireBase';
import { toast } from 'react-toastify';
import { SearchBar } from '../SearchBar/SearchBar';
import { useUserAuth } from '../Auth/UserAuthContext';

export const AllPersons = ({ isLoading, students }) => {
  const [heroes, setHeroes] = useState(() =>
    parseDataFromLS(`${userId}`, userId)
  );
  const [personId, setPersonId] = useState('');
  const [modalActive, setModalActive] = useState(true);
  const { isInLs } = useUserAuth();
  const { setIsInLs } = useUserAuth();
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    localStorage.setItem(`${userId}`, JSON.stringify(heroes));
  }, [heroes]);

  useEffect(() => {
    const filtered = students.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPersons(filtered);
  }, [searchText, students]);

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

  const filteredFromInput = value => {
    !value && setFilteredPersons(students);
    setSearchText(value);
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
        <CircleLoader color="#085c4b" />
      ) : (
        <div>
          <SearchBar filterData={filteredFromInput} />
          {filteredPersons.length === 0 && (
            <TextIfNoData>Sorry, there is no matches</TextIfNoData>
          )}
          <Table>
            {filteredPersons.length !== 0 && <TableHead />}
            <tbody>
              {filteredPersons.map(student => (
                <ItemsPersons
                  openModal={handleModal}
                  key={nanoid(11)}
                  studentData={student}
                />
              ))}
            </tbody>
          </Table>
        </div>
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
