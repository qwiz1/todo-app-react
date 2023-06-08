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
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AppRoute } from 'src/common/enums';
import { TodoDescription } from 'src/components/styled-components/todo-description';

const TodoMock = {
  title: 'Todo title',
  description:
    'You can start using Material UI right away with minimal front-end infrastructure by installing it via CDN, which is a great option for rapid prototyping. Follow this CDN example to get started.',
  isCompleted: false,
  isPrivate: false,
};

const Todo: React.FC = () => {
  return (
    <TodoMain>
      <TodoContainer>
        <h2>{TodoMock.title}</h2>
        <DescriptionContainer>
          <h3>Description:</h3>
          <TodoDescription isCompleted={TodoMock.isCompleted}>
            {TodoMock.description}
          </TodoDescription>
        </DescriptionContainer>
        <SwitchesContainer>
          <SwitchContainer>
            <FieldLabel htmlFor="is-completed-switch">Completed:</FieldLabel>
            <Switch checked={TodoMock.isCompleted} id="is-completed-switch" />
          </SwitchContainer>
          <SwitchContainer>
            <FieldLabel htmlFor="is-private-switch">Private:</FieldLabel>
            <Switch checked={TodoMock.isPrivate} id="is-private-switch" />
          </SwitchContainer>
        </SwitchesContainer>
        <ButtonGroup>
          <Link to={AppRoute.ROOT}>
            <MediumButton>Back</MediumButton>
          </Link>
          <Link to={AppRoute.TODOS_$ID_EDIT}>
            <MediumButton>Edit</MediumButton>
          </Link>
        </ButtonGroup>
      </TodoContainer>
    </TodoMain>
  );
};

export default Todo;
