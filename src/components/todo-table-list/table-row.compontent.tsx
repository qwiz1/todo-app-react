import React, { useState } from 'react';
import { Switch } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {
  ButtonsGroup,
  ControlsContainer,
  StyledLink,
} from './todo-table-list.styled';
import { Todo } from 'src/common/types';
import { SmallButton } from '../styled-components/button';
import { AppRoute } from 'src/common/enums';

type Props = {
  todo: Todo;
  onToggleSwitch: (id: number, checked: boolean) => void;
  onClickDelete: (id: number) => void;
};

export const CustomTableRow: React.FC<Props> = ({
  todo,
  onToggleSwitch,
  onClickDelete,
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const handleToggleSwitch = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    setIsCompleted(checked);
    onToggleSwitch(todo.id, checked);
  };

  const handleDeleteTodo = () => {
    onClickDelete(todo.id);
  };

  return (
    <TableRow hover key={todo.id} sx={{ maxHeight: '71px' }}>
      <TableCell sx={{ width: '20%' }} component="th" scope="row">
        {todo.title}
      </TableCell>
      <TableCell
        sx={{ width: '55%', textDecoration: isCompleted ? 'line-through' : '' }}
      >
        {todo.description}
      </TableCell>
      <TableCell align="center" sx={{ width: '25%' }}>
        <ControlsContainer>
          <ButtonsGroup>
            <StyledLink to={`${AppRoute.TODOS}/${todo.id}`}>
              <SmallButton>View</SmallButton>
            </StyledLink>

            <SmallButton onClick={handleDeleteTodo}>Delete</SmallButton>
          </ButtonsGroup>
          <Switch checked={isCompleted} onChange={handleToggleSwitch} />
        </ControlsContainer>
      </TableCell>
    </TableRow>
  );
};
