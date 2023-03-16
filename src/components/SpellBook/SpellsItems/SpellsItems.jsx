import { useState } from 'react';
import {
  StyledSpellItem,
  StyledSpellText,
  WrapText,
  SpellText,
} from '../StyledSpellBook';

export const SpellsItems = ({ spell }) => {
  const { name, description } = spell;
  const [clickedSpell, setClickedSpell] = useState(false);
  const handleSpellClick = () => {
    !clickedSpell ? setClickedSpell(true) : setClickedSpell(false);
  };

  return (
    <StyledSpellItem>
      <WrapText>
        Name of Spell:
        <StyledSpellText onClick={handleSpellClick}>{name}</StyledSpellText>
      </WrapText>
      {clickedSpell && (
        <WrapText>
          Discription:
          <SpellText> "{description}"</SpellText>
        </WrapText>
      )}
    </StyledSpellItem>
  );
};
