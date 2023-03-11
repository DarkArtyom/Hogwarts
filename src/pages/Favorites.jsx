import { parseDataFromLS } from '../Services/LS/parseDataFromLS';
import { useState, useEffect } from 'react';
import { Container } from '../components/Layout/Layout.styled';
import { userId } from '../Services/auth/fireBase';

export const Favorites = () => {
  const [heroes, setHeroes] = useState(() =>
    parseDataFromLS(`${userId}`, userId)
  );
  console.log(heroes);

  // useEffect(() => {
  //   localStorage.setItem('heroes', JSON.stringify(heroes));
  // }, [heroes]);

  return (
    <Container>
      <ul>
        {heroes.length > 0 ? (
          heroes.map(({ hero }, index) => <li key={index}>{hero.name}</li>)
        ) : (
          <p>Sorry, there is no heroes yet</p>
        )}
      </ul>
    </Container>
  );
};
