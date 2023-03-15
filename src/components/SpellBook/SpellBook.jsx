import { Container } from '../Layout/Layout.styled';
import { TitleDetails } from '../PersonDetails/StyledPersonDetails';
import { nanoid } from 'nanoid';
import { SpellsItems } from './SpellsItems/SpellsItems';
import { StyledSpellList } from './StyledSpellBook';

export const SpellBook = ({ spells }) => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TitleDetails>List of Magic Spells</TitleDetails>
      <StyledSpellList>
        {spells.map(spell => (
          <SpellsItems spell={spell} key={nanoid(5)} />
        ))}
      </StyledSpellList>
    </Container>
  );
};
