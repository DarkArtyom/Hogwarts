import defaultImage from '../../../images/noname.jpg';
import PropTypes from 'prop-types';
import {
  ImgBox,
  TitleDetails,
  ItemDetails,
  ButtonAddRemove,
  ListDetails,
  WrapDetails,
  BoxListDetails,
  Img,
} from './StyledPersonDetails';

export const PersonDetails = ({
  chosenId,
  allStaff,
  isInLS,
  addRemovePerson,
}) => {
  const chosenHero = allStaff.find(({ id }) => id === chosenId);
  const {
    image,
    name,
    house,
    ancestry,
    gender,
    wizard,
    dateOfBirth,
    patronus,
    species,
    wand: { wood, core, length },
  } = chosenHero;

  return (
    <WrapDetails>
      <ImgBox>
        <Img src={image ? image : defaultImage} alt={name} width={200} />
      </ImgBox>
      <BoxListDetails className="modal_content">
        <TitleDetails>{name}</TitleDetails>
        <ListDetails>
          <ItemDetails>
            <strong>Faculty:</strong> {house ? house : 'have no info'}
          </ItemDetails>
          <ItemDetails>
            <strong>Ancestry:</strong> {ancestry ? ancestry : 'have no info'}
          </ItemDetails>
          <ItemDetails>
            <strong>Gender:</strong> {gender ? gender : 'have no info'}
          </ItemDetails>
          <ItemDetails>
            <strong>Wizard:</strong> {wizard ? 'oh yes' : 'no :('}
          </ItemDetails>
          <ItemDetails>
            <strong>Date of birth:</strong>
            {dateOfBirth ? dateOfBirth : 'have no info'}
          </ItemDetails>
          <ItemDetails>
            <strong>Patronus:</strong>
            {patronus ? patronus : 'have no info'}
          </ItemDetails>
          <ItemDetails>
            <strong>Species:</strong>
            {species ? species : 'have no info'}
          </ItemDetails>
          <ItemDetails>
            <p>
              <strong>Wand:</strong> {wood ? wood : 'have no info'}
            </p>
            <p>
              <strong>Core:</strong> {core ? core : 'have no info'}
            </p>
            <p>
              <strong>Length:</strong> {length ? length : 'have no info'}
            </p>
          </ItemDetails>
        </ListDetails>
        <ButtonAddRemove onClick={() => addRemovePerson(chosenHero)}>
          {!isInLS ? 'Add to Favorites' : 'Delete from Favorites'}
        </ButtonAddRemove>
      </BoxListDetails>
    </WrapDetails>
  );
};

PersonDetails.propTypes = {
  chosenId: PropTypes.string,
  allStaff: PropTypes.array,
  addRemovePerson: PropTypes.func,
  isInLS: PropTypes.bool,
};
