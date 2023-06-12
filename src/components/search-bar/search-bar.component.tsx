import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchWrapper, SearchField, SearchButton } from './search-bar.styled';

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = ({ onChange }) => (
  <SearchWrapper>
    <SearchField
      onChange={onChange}
      type="search"
      id="todo-search"
      placeholder="search"
    />
    <SearchButton>
      <SearchIcon fontSize="small" />
    </SearchButton>
  </SearchWrapper>
);

export { SearchBar };
