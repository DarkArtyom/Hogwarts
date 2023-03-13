import { SearchInput, SearchFormWrap } from './StyledSearchBar';
import PropTypes from 'prop-types';

export const SearchBar = ({ filterData }) => {
  const handleSearchInput = event => {
    filterData(event.target.value);
  };

  return (
    <SearchFormWrap>
      <SearchInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search person by name"
        onChange={handleSearchInput}
      />
    </SearchFormWrap>
  );
};

SearchBar.propTypes = {
  filterData: PropTypes.func.isRequired,
};
