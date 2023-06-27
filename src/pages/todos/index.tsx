import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { TodoListControls } from 'src/components/todo-list-controls';
import { TodoList } from 'src/components/todo-list';
import { TodoSwipeList } from 'src/components/todos-swipe-list';
import { TodoTableList } from 'src/components/todo-table-list/todo-table-list.component';
import { useGetTodos } from 'src/query-hooks';
import {
  TodoListContainer,
  TodosMain,
  TodosPrimaryContainer,
} from './todos.styled';

const Todos: React.FC = () => {
  const { status, data: todos } = useGetTodos();

  const isMobile = useMediaQuery('(max-width:425px)');
  const isTablet = useMediaQuery('(min-width:425px)');
  const isDesktop = useMediaQuery('(min-width:768px)');

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter: string) => setFilter(newFilter);

  const getTodoListByView = () => {
    if (status === 'loading') {
      return <h2>Loading...</h2>;
    }

    if (todos) {
      if (isDesktop) {
        return <TodoTableList todos={todos} />;
      }
      if (isTablet) {
        return <TodoSwipeList todos={todos} />;
      }
      return <TodoList todos={todos} />;
    }
  };

  return (
    <TodosMain>
      <TodoListControls
        isMobile={isMobile}
        filterValue={filter}
        onFilterChange={handleFilterChange}
      />
      <TodosPrimaryContainer>
        <TodoListContainer>{getTodoListByView()}</TodoListContainer>
      </TodosPrimaryContainer>
    </TodosMain>
  );
};

export { Todos };
