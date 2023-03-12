import { parseDataFromLS } from '../Services/LS/parseDataFromLS';
import { useState, useEffect } from 'react';
import { Container } from '../components/Layout/Layout.styled';
import { userId } from '../Services/auth/fireBase';
import { CardFavoriteItem } from '../components/CardFavorite/CardFavoriteItem';
import { CardList } from '../components/CardFavorite/StyledCardFavorite';
import { toast } from 'react-toastify';
import { useUserAuth } from '../components/Auth/UserAuthContext';

export const Favorites = () => {
  const [heroes, setHeroes] = useState(() =>
    parseDataFromLS(`${userId}`, userId)
  );
  const { setIsInLs } = useUserAuth();

  useEffect(() => {
    localStorage.setItem(`${userId}`, JSON.stringify(heroes));
  }, [heroes]);

  const removeHeroFromLs = heroToRemove => {
    setHeroes(p => p.filter(({ hero }) => hero.id !== heroToRemove.id));
    setIsInLs(false);
    toast.error('Person has deleted from Favorites');
  };

  return (
    <main>
      <Container>
        <CardList>
          {heroes.length > 0 ? (
            heroes.map(({ hero }, index) => (
              <CardFavoriteItem
                key={index}
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
