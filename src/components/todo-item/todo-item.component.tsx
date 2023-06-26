import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Switch } from '@mui/material';

import { Todo } from 'src/common/types';
import { TodoItemWrapper, TodoDescriptionCard } from './todo-item.styled';
import { AppRoute } from 'src/common/enums';
import { SmallButton } from '../styled-components/button';
import { useDeleteTodo, useUpdateTodo } from 'src/query-hooks';
import { toast } from 'react-toastify';

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
    <TodoItemWrapper>
      <Card
        sx={{
          borderRadius: 0,
          boxShadow: 'none',
          border: '4px solid black',
          display: 'flex',
          flexDirection: 'column',
          height: '250px',
          maxWidth: '372px',
          margin: '0 auto',
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 0,
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {todo.title}
          </Typography>
          <TodoDescriptionCard isCompleted={isCompleted}>
            {todo.description}
          </TodoDescriptionCard>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to={`${AppRoute.TODOS}/${todo.id}`}>
              <SmallButton>View</SmallButton>
            </Link>
            <SmallButton onClick={handleOnClickDelete}>Delete</SmallButton>
          </Box>
          <Switch checked={isCompleted} onChange={handleSwitchChange} />
        </CardActions>
      </Card>
    </TodoItemWrapper>
  );
};

export { TodoItem };
