import { FieldLabel } from 'src/components/styled-components/field-label';
import {
  ButtonGroup,
  DescriptionContainer,
  SwitchContainer,
  SwitchesContainer,
  TodoContainer,
  TodoMain,
} from './todo.styled';
import { MediumButton } from 'src/components/styled-components/button';
import { Link, useParams } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AppRoute } from 'src/common/enums';
import { TodoDescription } from 'src/components/styled-components/todo-description';
import { useGetTodoById } from 'src/query-hooks';

const Todo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: todo } = useGetTodoById(Number(id));

  return (
    <TodoMain>
      {todo && (
        <TodoContainer>
          <h2>{todo.title}</h2>
          <DescriptionContainer>
            <h3>Description:</h3>
            <TodoDescription isCompleted={todo.isCompleted}>
              {todo.description}
            </TodoDescription>
          </DescriptionContainer>
          <SwitchesContainer>
            <SwitchContainer>
              <FieldLabel htmlFor="is-completed-switch">Completed:</FieldLabel>
              <Switch checked={todo.isCompleted} id="is-completed-switch" />
            </SwitchContainer>
            <SwitchContainer>
              <FieldLabel htmlFor="is-private-switch">Private:</FieldLabel>
              <Switch checked={todo.isPrivate} id="is-private-switch" />
            </SwitchContainer>
          </SwitchesContainer>
          <ButtonGroup>
            <Link to={AppRoute.TODOS}>
              <MediumButton>Back</MediumButton>
            </Link>
            <Link to={`${AppRoute.TODOS_EDIT}/${todo.id}`}>
              <MediumButton>Edit</MediumButton>
            </Link>
          </ButtonGroup>
        </TodoContainer>
      )}
    </TodoMain>
  );
};

export default Todo;
