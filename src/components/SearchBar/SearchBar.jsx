import { SearchInput, SearchFormWrap } from './StyledSearchBar';
import PropTypes from 'prop-types';

// import { useState } from 'react';

export const SearchBar = ({ filterData }) => {
  // const [query, setQuery] = useState('');

  const handleSearchInput = event => {
    // setQuery(event.target.value);
    filterData(event.target.value);
  };

  return (
    <SearchFormWrap>
      <SearchInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search person by name"
        // value={event.target.value}
        onChange={handleSearchInput}
      />
      {/* {query.length < 3 && <p>Too many matches</p>} */}
    </SearchFormWrap>
  );
};

SearchBar.propTypes = {
  filterData: PropTypes.func.isRequired,
};
