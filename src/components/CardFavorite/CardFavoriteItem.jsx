import defaultImage from '../../../images/noname.jpg';
import { StyledButton } from '../../Styles/StyledFormsBtn';
import PropTypes from 'prop-types';
import {
  CardItems,
  CardWrap,
  CardImg,
  CardTitle,
  CardText,
} from './StyledCardFavorite';

export const CardFavoriteItem = ({ heroRender, handleRemove }) => {
  const { name, image, house } = heroRender;

  return (
    <>
      <CardItems>
        <div>
          <CardImg src={image ? image : defaultImage} alt={name} width={200} />
        </div>
        <CardWrap>
          <CardTitle>{name}</CardTitle>
          <CardText>
            <strong>House:</strong> {house}
          </CardText>
          <StyledButton onClick={() => handleRemove(heroRender)}>
            Remove from Favorites
          </StyledButton>
        </CardWrap>
      </CardItems>
    </>
  );
};

CardFavoriteItem.propTypes = {
  heroRender: PropTypes.object,
  handleRemove: PropTypes.func,
};
