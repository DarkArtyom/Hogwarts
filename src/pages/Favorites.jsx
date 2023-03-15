import { parseDataFromLS } from '../Services/LS/parseDataFromLS';
import { useState, useEffect } from 'react';
import { Container } from '../components/Layout/Layout.styled';
import { userId } from '../Services/auth/fireBase';
import { CardFavoriteItem } from '../components/CardFavorite/CardFavoriteItem';
import { CardList } from '../components/CardFavorite/StyledCardFavorite';
import { toast } from 'react-toastify';
import { useUserAuth } from '../components/Auth/UserAuthContext';
import { nanoid } from 'nanoid';
import { fetchSpellBook } from '../Services/fetches';
import { SpellBook } from '../components/SpellBook/SpellBook';
import { GiSpellBook } from 'react-icons/gi';
import { Modal } from '../components/Modal/Modal';

import { StyledSpellButton } from '../components/SpellBook/StyledSpellBook';

export const Favorites = () => {
  const [heroes, setHeroes] = useState(() =>
    parseDataFromLS(`${userId}`, userId)
  );
  const [modalActive, setModalActive] = useState(true);
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setIsInLs } = useUserAuth();

  useEffect(() => {
    localStorage.setItem(`${userId}`, JSON.stringify(heroes));
  }, [heroes]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function () {
      try {
        const dataFetch = await fetchSpellBook(signal);
        if (!dataFetch) {
          return;
        }
        setSpells([...dataFetch.data]);
      } catch (error) {
        throw new Error(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (spells.length > 0) {
      setLoading(false);
    }
  }, [spells]);

  const removeHeroFromLs = heroToRemove => {
    setHeroes(p => p.filter(({ hero }) => hero.id !== heroToRemove.id));
    setIsInLs(false);
    toast.error('Person has deleted from Favorites');
  };

  return (
    <main>
      <Container>
        <StyledSpellButton
          onClick={() => {
            setModalActive(false);
          }}
        >
          <GiSpellBook style={{ fontSize: 50 }} />
        </StyledSpellButton>
        <Modal active={modalActive} setActive={setModalActive}>
          <SpellBook spells={spells} />
        </Modal>

        <CardList>
          {heroes.length > 0 ? (
            heroes.map(({ hero }) => (
              <CardFavoriteItem
                key={nanoid(4)}
                heroRender={hero}
                handleRemove={removeHeroFromLs}
              />
            ))
          ) : (
            <p>Sorry, there is no heroes yet</p>
          )}
        </CardList>
      </Container>
    </main>
  );
};
