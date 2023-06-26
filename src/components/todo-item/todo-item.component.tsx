import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

import { Todo } from 'src/common/types';
import { AppRoute } from 'src/common/enums';
import { SmallButton } from '../styled-components/button';
import { useDeleteTodo, useUpdateTodo } from 'src/query-hooks';
import { toast } from 'react-toastify';
import {
  BtnWrapper,
  CardActions,
  CardContent,
  CardDescription,
  CardTitle,
  TodoCard,
} from './todo-item.styled';
import { Switch } from '@mui/material';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const { mutate: mutateUpdate } = useUpdateTodo();
  const { mutate: mutateDelete } = useDeleteTodo();

  const handleOnClickDelete = () => {
    mutateDelete(todo.id);
    toast.success('Todo Deleted!');
  };

  const handleSwitchChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    setIsCompleted(checked);
    mutateUpdate({ id: todo.id, data: { isCompleted: checked } });
  };

  return (
    <TodoCard>
      <CardContent>
        <CardTitle>{todo.title}</CardTitle>
        <CardDescription done={isCompleted}>{todo.description}</CardDescription>
      </CardContent>
      <CardActions>
        <BtnWrapper>
          <Link to={`${AppRoute.TODOS}/${todo.id}`}>
            <SmallButton>View</SmallButton>
          </Link>
          <SmallButton onClick={handleOnClickDelete}>Delete</SmallButton>
        </BtnWrapper>
        <Switch checked={isCompleted} onChange={handleSwitchChange} />
      </CardActions>
    </TodoCard>
  );
};

export { TodoItem };
