import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { TodoListControls } from 'src/components/todo-list-controls';
import {
  TodoListContainer,
  TodosMain,
  TodosPrimaryContainer,
} from './todos.styled';
import { TodoList } from 'src/components/todo-list';
import { TodoSwipeList } from 'src/components/todos-swipe-list';
import { TodoTableList } from 'src/components/todo-table-list/todo-table-list.component';

const TodosMock = [
  {
    id: 1,
    title: 'Todo title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam quas neque voluptate officia quaerat exercitationem aspernatur tempore? Accusamusnem aspernatur tempore? Accusamus quae iure harum vel fuga facere magni inveore.',
    isCompleted: false,
    isPrivate: false,
  },
  {
    id: 2,
    title: 'Todo title 2',
    description:
      'Which is a great option for rapid prototyping. Follow this CDN example to get started.',
    isCompleted: false,
    isPrivate: true,
  },
  {
    id: 3,
    title: 'Todo title 3',
    description: 'Follow this CDN example to get started.',
    isCompleted: true,
    isPrivate: false,
  },
];

const Todos: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:425px)');
  const isTablet = useMediaQuery('(min-width:425px)');
  const isDesktop = useMediaQuery('(min-width:768px)');

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter: string) => setFilter(newFilter);

  const getTodoListByView = () => {
    if (isDesktop) {
      return <TodoTableList todos={TodosMock} />;
    }
    if (isTablet) {
      return <TodoSwipeList todos={TodosMock} />;
    }
    return <TodoList todos={TodosMock} />;
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
