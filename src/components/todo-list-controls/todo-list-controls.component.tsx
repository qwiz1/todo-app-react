import React from 'react';
import { SearchBar } from '../search-bar';
import { FilterBar } from '../filter-bar';
import { ControlsContainer } from './todo-list-controls.styled';

type Props = {
  isMobile?: boolean;
  filterValue: string;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (filter: string) => void;
};

const TodoListControls: React.FC<Props> = ({
  isMobile = false,
  filterValue,
  onSearchChange,
  onFilterChange,
}) => (
  <ControlsContainer isMobile={isMobile}>
    <SearchBar onChange={onSearchChange} />
    <FilterBar value={filterValue} onChange={onFilterChange} />
  </ControlsContainer>
);

export { TodoListControls };
