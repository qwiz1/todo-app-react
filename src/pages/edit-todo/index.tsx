import { FieldLabel } from 'src/components/styled-components/field-label';
import {
  ButtonGroup,
  EditForm,
  FieldContainer,
  SwitchContainer,
  SwitchesContainer,
  EditTodoMain,
} from './edit-todo.styled';
import { MediumButton } from 'src/components/styled-components/button';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AppRoute } from 'src/common/enums';
import { Field, Formik } from 'formik';
import { InputField, TextareaField } from 'src/components/fields';
import { FormTitle } from 'src/components/styled-components/form-title';

const TodoMock = {
  title: 'Todo title',
  description:
    'You can start using Material UI right away with minimal front-end infrastructure by installing it via CDN, which is a great option for rapid prototyping. Follow this CDN example to get started.',
  isCompleted: false,
  isPrivate: false,
};

type Todo = {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
};

const EditTodo: React.FC = () => {
  const initialValues: Todo = {
    title: TodoMock.title,
    description: TodoMock.description,
    isCompleted: TodoMock.isCompleted,
    isPrivate: TodoMock.isPrivate,
  };

  return (
    <EditTodoMain>
      <Formik
        initialValues={initialValues}
        onSubmit={(v: any) => console.log(v)}
      >
        <EditForm>
        <FormTitle>Edit Todo</FormTitle>
          <FieldLabel htmlFor="edit-title">Title:</FieldLabel>
          <FieldContainer>
            <InputField id="edit-title" name="title" />
          </FieldContainer>
          <FieldLabel htmlFor="edit-description">Description:</FieldLabel>
          <FieldContainer>
            <TextareaField id="edit-description" name="description" rows={6} />
          </FieldContainer>
          <SwitchesContainer>
            <SwitchContainer>
              <FieldLabel htmlFor="edit-is-completed">Completed:</FieldLabel>
              <Field
                id="edit-is-completed"
                name="isCompleted"
                type="checkbox"
                as={Switch}
              />
            </SwitchContainer>
            <SwitchContainer>
              <FieldLabel htmlFor="edit-is-ptivate">Private:</FieldLabel>
              <Field
                id="edit-is-private"
                name="isPrivate"
                type="checkbox"
                as={Switch}
              />
            </SwitchContainer>
          </SwitchesContainer>
          <ButtonGroup>
            <Link to={AppRoute.TODOS_$ID}>
              <MediumButton>Back</MediumButton>
            </Link>
            <MediumButton type="submit">Save</MediumButton>
          </ButtonGroup>
        </EditForm>
      </Formik>
    </EditTodoMain>
  );
};

export default EditTodo;
